import { ApiPromise } from '@polkadot/api';
import type { Vec } from '@polkadot/types';
import type { AccountId32 } from '@polkadot/types/interfaces';
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
  const validatorArray = Array.from(validatorIds as Vec<AccountId32>);
  const limitedValidators = validatorArray.slice(0, 20);
  
  const validatorsInfo: ValidatorInfo[] = [];

  // Fetch active era
  // Type: Option<PalletStakingActiveEraInfo> - Polkadot's optional type wrapper
  const activeEraOpt = await api.query.staking.activeEra();
  let eraIndex: number | undefined;

  // Check if the option contains a value using isSome (standard Rust-like Option pattern)
  // Using type guard to safely access Option methods
  interface PolkadotOption {
    isSome: boolean;
    unwrap: () => any;
  }
  
  if (activeEraOpt && typeof (activeEraOpt as any).isSome === 'boolean' && (activeEraOpt as unknown as PolkadotOption).isSome) {
    const unwrapped = (activeEraOpt as unknown as PolkadotOption).unwrap();
    if (unwrapped && 'index' in unwrapped) {
      // Handle both Codec types (with toNumber()) and plain values
      const indexValue = unwrapped.index;
      eraIndex = typeof indexValue === 'string' ? parseInt(indexValue, 10) : 
                 typeof indexValue === 'number' ? indexValue :
                 indexValue?.toNumber ? indexValue.toNumber() : undefined;
    }
  } else {
    // Fallback to current era if active era is not available
    const currentEraOpt = await api.query.staking.currentEra();
    if (currentEraOpt && typeof (currentEraOpt as any).isSome === 'boolean' && (currentEraOpt as unknown as PolkadotOption).isSome) {
      const unwrapped = (currentEraOpt as unknown as PolkadotOption).unwrap();
      // Handle both Codec types (with toNumber()) and plain values
      eraIndex = typeof unwrapped === 'string' ? parseInt(unwrapped, 10) :
                 typeof unwrapped === 'number' ? unwrapped :
                 unwrapped?.toNumber ? unwrapped.toNumber() : undefined;
    }
  }

  // Use multi-query for better performance
  // Fetch prefs (commission) for all validators - this is era-independent
  const prefs = await api.query.staking.validators.multi(limitedValidators);
  
  // Fetch exposure (stake) only if we have a valid era index
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let exposures: any[] = [];
  if (eraIndex !== undefined) {
    const erasStakersKeys = limitedValidators.map(id => [eraIndex, id]);
    exposures = await api.query.staking.erasStakers.multi(erasStakersKeys);
  }

  limitedValidators.forEach((validatorId, index: number) => {
      const pref = prefs[index];
      // Default to 0 if exposure is missing
      const exposure = exposures.length > index ? exposures[index] : null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const totalStake = exposure ? (exposure as any).total.toString() : '0';
      
      validatorsInfo.push({
          address: validatorId.toString(),
          totalStake: totalStake,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          commission: (pref as any).commission.toString(),
          active: true
      });
  });
  
  return validatorsInfo;
};
