import { ApiPromise } from '@polkadot/api';
import { NetworkStats } from './polkadot.types';

export enum ConnectionStatus {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error',
}

export interface PolkadotContextState {
  api: ApiPromise | null;
  status: ConnectionStatus;
  networkStats: NetworkStats | null;
  error: Error | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export interface ApiConfig {
  endpoint: string;
  retryAttempts: number;
  retryDelay: number;
}
