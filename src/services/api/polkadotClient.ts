import { ApiPromise, WsProvider } from '@polkadot/api';
import { APP_CONFIG } from '@/utils/constants';
import { logError } from '@/utils/errorHandlers';

class PolkadotClient {
  private static instance: PolkadotClient;
  private api: ApiPromise | null = null;
  private provider: WsProvider | null = null;

  private constructor() {}

  public static getInstance(): PolkadotClient {
    if (!PolkadotClient.instance) {
      PolkadotClient.instance = new PolkadotClient();
    }
    return PolkadotClient.instance;
  }

  public async connect(): Promise<ApiPromise> {
    if (this.api && this.api.isConnected) {
      return this.api;
    }

    try {
      this.provider = new WsProvider(APP_CONFIG.RPC_ENDPOINTS.WSS);
      this.api = await ApiPromise.create({ provider: this.provider });
      await this.api.isReady;
      console.log('Connected to Polkadot node');
      return this.api;
    } catch (error) {
      logError('PolkadotClient.connect', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    if (this.api) {
      await this.api.disconnect();
      this.api = null;
    }
    if (this.provider) {
      await this.provider.disconnect();
      this.provider = null;
    }
  }

  public getApi(): ApiPromise | null {
    return this.api;
  }
}

export const polkadotClient = PolkadotClient.getInstance();
