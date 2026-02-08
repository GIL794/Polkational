import { ApiPromise } from '@polkadot/api';
import { NetworkStats } from '@/types/polkadot.types';

export const getNetworkStats = async (api: ApiPromise): Promise<NetworkStats> => {
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
  ]);

  const properties = api.registry.getChainProperties();
  const tokenSymbol = properties?.tokenSymbol?.unwrapOr(['DOT'])[0].toString() || 'DOT';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tokenDecimals = (properties?.tokenDecimals?.unwrapOr([10])[0] as any)?.toNumber?.() ?? 10;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ss58Format = (properties?.ss58Format?.unwrapOr(42) as any)?.toNumber?.() ?? 42;

  return {
    chain: chain.toString(),
    nodeName: nodeName.toString(),
    nodeVersion: nodeVersion.toString(),
    tokenSymbol,
    tokenDecimals,
    ss58Format,
  };
};
