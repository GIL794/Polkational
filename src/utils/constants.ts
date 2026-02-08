export const APP_CONFIG = {
  TITLE: import.meta.env.VITE_APP_TITLE || 'Polkadot Educational Dashboard',
  RPC_ENDPOINTS: {
    WSS: import.meta.env.VITE_POLKADOT_RPC_WSS || 'wss://rpc.polkadot.io',
    HTTP: import.meta.env.VITE_POLKADOT_RPC_HTTP || 'https://rpc.polkadot.io',
  },
  CACHE: {
    TTL: Number(import.meta.env.VITE_CACHE_TTL) || 60000,
    MAX_SIZE: Number(import.meta.env.VITE_MAX_CACHE_SIZE) || 100,
  },
  FEATURES: {
    VALIDATOR_DETAILS: import.meta.env.VITE_ENABLE_VALIDATOR_DETAILS === 'true',
    ADVANCED_STATS: import.meta.env.VITE_ENABLE_ADVANCED_STATS === 'true',
  },
  REFRESH_INTERVAL: Number(import.meta.env.VITE_REFRESH_INTERVAL) || 12000,
};

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  LEARN: '/learn',
  ABOUT: '/about',
};
