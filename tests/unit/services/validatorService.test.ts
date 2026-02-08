import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getValidators } from '@/services/api/validatorService';
import { ApiPromise } from '@polkadot/api';

describe('ValidatorService', () => {
  let mockApi: unknown;

  beforeEach(() => {
    const mockValidators = ['5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mockValidators as any).isEmpty = false;

    mockApi = {
      query: {
        session: {
          validators: vi.fn().mockResolvedValue(mockValidators),
        },
        staking: {
          activeEra: vi.fn().mockResolvedValue({
            isNone: false,
            isSome: true,
            unwrap: () => ({ index: '100' }),
          }),
          currentEra: vi.fn().mockResolvedValue({
             isNone: false,
             isSome: true,
             unwrap: () => '100' 
          }),
          erasStakers: {
            multi: vi.fn().mockResolvedValue([
              { total: { toString: () => '1000000000000' } }
            ]),
          },
          validators: {
            multi: vi.fn().mockResolvedValue([
              { commission: { toString: () => '10000000' } }
            ]),
          },
        },
      },
    };
  });

  it('fetches and formats validators correctly', async () => {
    const validators = await getValidators(mockApi as ApiPromise);

    expect(validators).toHaveLength(1);
    expect(validators[0]).toEqual({
      address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      totalStake: '1000000000000',
      commission: '10000000',
      active: true,
    });
  });

  it('handles API errors gracefully', async () => {
    const errorApi = {
      query: {
        session: {
          validators: vi.fn().mockRejectedValue(new Error('API Error')),
        },
      },
    };

    await expect(getValidators(errorApi as unknown as ApiPromise)).rejects.toThrow('API Error');
  });

  it('returns validators with 0 stake if active era and current era are not available', async () => {
    const mockValidators = ['5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mockValidators as any).isEmpty = false;

    const noEraApi = {
      query: {
        session: {
          validators: vi.fn().mockResolvedValue(mockValidators),
        },
        staking: {
          activeEra: vi.fn().mockResolvedValue({
            isNone: true,
            isSome: false,
          }),
          currentEra: vi.fn().mockResolvedValue({
            isNone: true,
            isSome: false,
          }),
          validators: {
            multi: vi.fn().mockResolvedValue([
              { commission: { toString: () => '10000000' } }
            ]),
          },
        },
      },
    };

    const validators = await getValidators(noEraApi as unknown as ApiPromise);
    expect(validators).toHaveLength(1);
    expect(validators[0].totalStake).toBe('0');
    expect(validators[0].commission).toBe('10000000');
  });
});
