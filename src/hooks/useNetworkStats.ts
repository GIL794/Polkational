import { useState, useEffect } from 'react';
import { usePolkadotApi } from './usePolkadotApi';
import { getNetworkStats } from '@/services/api/networkService';
import { NetworkStats } from '@/types/polkadot.types';
import { logError } from '@/utils/errorHandlers';

export const useNetworkStats = () => {
  const { api, status } = usePolkadotApi();
  const [stats, setStats] = useState<NetworkStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      if (!api || status !== 'connected') return;

      try {
        setIsLoading(true);
        const data = await getNetworkStats(api);
        setStats(data);
        setIsLoading(false);
      } catch (err) {
        logError('useNetworkStats', err);
        setError(err as Error);
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [api, status]);

  return { stats, isLoading, error };
};
