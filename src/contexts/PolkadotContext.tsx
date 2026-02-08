import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ApiPromise } from '@polkadot/api';
import { PolkadotContextState, ConnectionStatus } from '@/types/api.types';
import { NetworkStats } from '@/types/polkadot.types';
import { polkadotClient } from '@/services/api/polkadotClient';
import { getNetworkStats } from '@/services/api/networkService';

const PolkadotContext = createContext<PolkadotContextState | undefined>(undefined);

export const PolkadotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [status, setStatus] = useState<ConnectionStatus>(ConnectionStatus.DISCONNECTED);
  const [networkStats, setNetworkStats] = useState<NetworkStats | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const connect = async () => {
    setStatus(ConnectionStatus.CONNECTING);
    setError(null);
    try {
      const apiInstance = await polkadotClient.connect();
      setApi(apiInstance);
      setStatus(ConnectionStatus.CONNECTED);
      
      const stats = await getNetworkStats(apiInstance);
      setNetworkStats(stats);
      
      // Handle disconnections
      apiInstance.on('disconnected', () => {
        setStatus(ConnectionStatus.DISCONNECTED);
        setApi(null);
      });
      apiInstance.on('error', (err) => {
        setStatus(ConnectionStatus.ERROR);
        setError(err as Error);
      });

    } catch (err) {
      setStatus(ConnectionStatus.ERROR);
      setError(err as Error);
    }
  };

  const disconnect = async () => {
    await polkadotClient.disconnect();
    setApi(null);
    setStatus(ConnectionStatus.DISCONNECTED);
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, []);

  return (
    <PolkadotContext.Provider value={{ api, status, networkStats, error, connect, disconnect }}>
      {children}
    </PolkadotContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePolkadot = (): PolkadotContextState => {
  const context = useContext(PolkadotContext);
  if (context === undefined) {
    throw new Error('usePolkadot must be used within a PolkadotProvider');
  }
  return context;
};
