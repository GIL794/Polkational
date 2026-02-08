import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Polkadot API
vi.mock('@polkadot/api', () => ({
  ApiPromise: {
    create: vi.fn(),
  },
  WsProvider: vi.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
