/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POLKADOT_RPC_WSS: string;
  readonly VITE_POLKADOT_RPC_HTTP: string;
  readonly VITE_CACHE_TTL: string;
  readonly VITE_MAX_CACHE_SIZE: string;
  readonly VITE_ENABLE_VALIDATOR_DETAILS: string;
  readonly VITE_ENABLE_ADVANCED_STATS: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_REFRESH_INTERVAL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
