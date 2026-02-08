import { useState, useEffect } from 'react';
import { usePolkadotApi } from './usePolkadotApi';
import { getValidators } from '@/services/api/validatorService';
import { ValidatorInfo } from '@/types/polkadot.types';
import { logError } from '@/utils/errorHandlers';
import { dataCache } from '@/services/cache/dataCache';

export const useValidators = () => {
  const { api, status } = usePolkadotApi();
  const [validators, setValidators] = useState<ValidatorInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchValidators = async () => {
      if (!api || status !== 'connected') return;

      const cacheKey = 'validators';
      const cached = dataCache.get<ValidatorInfo[]>(cacheKey);

      if (cached) {
        setValidators(cached);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data = await getValidators(api);
        setValidators(data);
        dataCache.set(cacheKey, data);
        setIsLoading(false);
      } catch (err) {
        logError('useValidators', err);
        setError(err as Error);
        setIsLoading(false);
      }
    };

    fetchValidators();
  }, [api, status]);

  return { validators, isLoading, error };
};
