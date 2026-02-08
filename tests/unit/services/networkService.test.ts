import { describe, it, expect, vi } from 'vitest';
import { getNetworkStats } from '@/services/api/networkService';
import { ApiPromise } from '@polkadot/api';

describe('NetworkService', () => {
  it('fetches and formats network stats correctly', async () => {
    const mockApi = {
      rpc: {
        system: {
          chain: vi.fn().mockResolvedValue({ toString: () => 'Polkadot' }),
          name: vi.fn().mockResolvedValue({ toString: () => 'Parity Polkadot' }),
          version: vi.fn().mockResolvedValue({ toString: () => '1.0.0' }),
        },
      },
      registry: {
        getChainProperties: vi.fn().mockReturnValue({
          tokenSymbol: { unwrapOr: () => ['DOT'] },
          tokenDecimals: { unwrapOr: () => [{ toNumber: () => 10 }] },
          ss58Format: { unwrapOr: () => ({ toNumber: () => 42 }) },
        }),
      },
    };

    const stats = await getNetworkStats(mockApi as unknown as ApiPromise);

    expect(stats).toEqual({
      chain: 'Polkadot',
      nodeName: 'Parity Polkadot',
      nodeVersion: '1.0.0',
      tokenSymbol: 'DOT',
      tokenDecimals: 10,
      ss58Format: 42,
    });
  });

  it('uses default values when properties are missing', async () => {
    const mockApi = {
      rpc: {
        system: {
          chain: vi.fn().mockResolvedValue({ toString: () => 'Polkadot' }),
          name: vi.fn().mockResolvedValue({ toString: () => 'Parity Polkadot' }),
          version: vi.fn().mockResolvedValue({ toString: () => '1.0.0' }),
        },
      },
      registry: {
        getChainProperties: vi.fn().mockReturnValue(undefined),
      },
    };

    const stats = await getNetworkStats(mockApi as unknown as ApiPromise);

    expect(stats).toEqual({
      chain: 'Polkadot',
      nodeName: 'Parity Polkadot',
      nodeVersion: '1.0.0',
      tokenSymbol: 'DOT',
      tokenDecimals: 10,
      ss58Format: 42,
    });
  });
});
