import { ApiPromise } from '@polkadot/api';
import { ValidatorInfo } from '@/types/polkadot.types';

export const getValidators = async (api: ApiPromise): Promise<ValidatorInfo[]> => {
  // Educational Note:
  // To get the current active set of validators (those producing blocks), we query 'session.validators'.
  // 'staking.validators' is a map that stores preferences (commission) for a specific stash account.
  
  const validatorIds = await api.query.session.validators();
  
  if (!validatorIds || validatorIds.isEmpty) {
    return [];
  }
  
  // validatorIds is a Vec<AccountId32>. We convert it to a native array to slice it safely.
  const limitedValidators = validatorIds.slice(0, 20);
  
  const validatorsInfo: ValidatorInfo[] = [];

  // Fetch active era
  const activeEraOpt = await api.query.staking.activeEra();
  let eraIndex;

  if (activeEraOpt.isSome) {
    eraIndex = activeEraOpt.unwrap().index;
  } else {
    // Fallback to current era if active era is not available
    const currentEraOpt = await api.query.staking.currentEra();
    if (currentEraOpt.isSome) {
      eraIndex = currentEraOpt.unwrap();
    }
  }

  // Use multi-query for better performance
  // Fetch prefs (commission) for all validators - this is era-independent
  const prefs = await api.query.staking.validators.multi(limitedValidators);
  
  // Fetch exposure (stake) only if we have a valid era index
  let exposures: any[] = [];
  if (eraIndex) {
    const erasStakersKeys = limitedValidators.map(id => [eraIndex, id]);
    exposures = await api.query.staking.erasStakers.multi(erasStakersKeys);
  }

  limitedValidators.forEach((validatorId, index) => {
      const pref = prefs[index];
      // Default to 0 if exposure is missing
      const exposure = exposures.length > index ? exposures[index] : null;
      const totalStake = exposure ? exposure.total.toString() : '0';
      
      validatorsInfo.push({
          address: validatorId.toString(),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          totalStake: totalStake,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          commission: (pref as any).commission.toString(),
          active: true
      });
  });
  
  return validatorsInfo;
};
