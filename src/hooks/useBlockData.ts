import { useState, useEffect } from 'react';
import { usePolkadotApi } from './usePolkadotApi';
import { subscribeNewHeads } from '@/services/api/blockService';
import { BlockData } from '@/types/polkadot.types';
import { logError } from '@/utils/errorHandlers';

export const useBlockData = () => {
  const { api, status } = usePolkadotApi();
  const [currentBlock, setCurrentBlock] = useState<number>(0);
  const [blockHash, setBlockHash] = useState<string>('');
  const [blockTime, setBlockTime] = useState<number>(0);
  const [extrinsicCount, setExtrinsicCount] = useState<number>(0);
  const [recentBlocks, setRecentBlocks] = useState<BlockData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const setupSubscription = async () => {
      if (!api || status !== 'connected') return;

      try {
        setIsLoading(true);
        unsubscribe = await subscribeNewHeads(api, (blockData) => {
          setCurrentBlock(blockData.number);
          setBlockHash(blockData.hash);
          setBlockTime(blockData.timestamp);
          setExtrinsicCount(blockData.extrinsics);
          
          setRecentBlocks((prev) => {
            // Prevent duplicate blocks by checking if the hash already exists
            if (prev.some(block => block.hash === blockData.hash)) {
              return prev;
            }
            const newBlocks = [blockData, ...prev];
            return newBlocks.slice(0, 10); // Keep last 10
          });
          
          setIsLoading(false);
        });
      } catch (err) {
        logError('useBlockData', err);
        setError(err as Error);
        setIsLoading(false);
      }
    };

    setupSubscription();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [api, status]);

  return {
    currentBlock,
    blockHash,
    blockTime,
    extrinsicCount,
    recentBlocks,
    isLoading,
    error,
  };
};
