import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Dashboard from '@/pages/Dashboard/Dashboard';
import { usePolkadotApi } from '@/hooks/usePolkadotApi';
import { useNetworkStats } from '@/hooks/useNetworkStats';
import { useValidators } from '@/hooks/useValidators';
import { useBlockData } from '@/hooks/useBlockData';

// Mock hooks
vi.mock('@/hooks/usePolkadotApi', () => ({
  usePolkadotApi: vi.fn(),
}));
vi.mock('@/hooks/useNetworkStats', () => ({
  useNetworkStats: vi.fn(),
}));
vi.mock('@/hooks/useValidators', () => ({
  useValidators: vi.fn(),
}));
vi.mock('@/hooks/useBlockData', () => ({
  useBlockData: vi.fn(),
}));

// Mock child components to simplify testing (optional, but good for isolation)
// Actually, let's keep them real to verify integration, 
// but since they depend on the same hooks we mocked, it works out.

describe('Dashboard Page', () => {
  beforeEach(() => {
    // Default mocks
    (usePolkadotApi as any).mockReturnValue({ isConnected: true, isConnecting: false, error: null });
    (useNetworkStats as any).mockReturnValue({ 
      stats: { chain: 'Polkadot', tokenSymbol: 'DOT', nodeName: 'TestNode', nodeVersion: '1.0' }, 
      isLoading: false 
    });
    (useValidators as any).mockReturnValue({ validators: [], isLoading: false });
    (useBlockData as any).mockReturnValue({ 
      currentBlock: 12345, 
      blockHash: '0x123',
      blockTime: Date.now(),
      extrinsicCount: 5,
      recentBlocks: [], 
      isLoading: false 
    });
  });

  it('renders loading state initially', () => {
    (usePolkadotApi as any).mockReturnValue({ isConnected: false, isConnecting: true, error: null });
    render(<Dashboard />);
    expect(screen.getByRole('status')).toBeDefined();
  });

  it('renders dashboard content when connected', () => {
    render(<Dashboard />);
    expect(screen.getByText('Network Status')).toBeDefined();
    expect(screen.getByText('Latest Block')).toBeDefined();
    expect(screen.getByText('Top Validators')).toBeDefined();
    // Check for data rendering
    expect(screen.getByText('Polkadot')).toBeDefined();
    expect(screen.getByText('TestNode')).toBeDefined();
  });

  it('renders validator list when validators are available', () => {
    (useValidators as any).mockReturnValue({ 
      validators: [
        { address: '15oF4...', totalStake: '1000', commission: '5%', active: true }
      ], 
      isLoading: false 
    });
    render(<Dashboard />);
    expect(screen.getByText('15oF4...')).toBeDefined();
    expect(screen.getByText('5%')).toBeDefined();
  });
});
