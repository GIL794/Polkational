import { usePolkadot } from '@/contexts/PolkadotContext';
import { ConnectionStatus } from '@/types/api.types';

export const usePolkadotApi = () => {
  const context = usePolkadot();

  return {
    ...context,
    isConnected: context.status === ConnectionStatus.CONNECTED,
    isConnecting: context.status === ConnectionStatus.CONNECTING,
  };
};
