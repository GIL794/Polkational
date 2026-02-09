import { ApiPromise } from '@polkadot/api';
import { BlockData } from '@/types/polkadot.types';

export const subscribeNewHeads = async (
  api: ApiPromise,
  callback: (block: BlockData) => void
): Promise<() => void> => {
  const unsub = await api.rpc.chain.subscribeNewHeads((header) => {
    const blockData: BlockData = {
      number: header.number.toNumber(),
      hash: header.hash.toString(),
      timestamp: Date.now(),
      extrinsics: 0,
    };
    
    // Fetch the full block to get extrinsic count and accurate timestamp
    api.rpc.chain.getBlock(header.hash).then((signedBlock) => {
      blockData.extrinsics = signedBlock.block.extrinsics.length;
      // Extract timestamp from extrinsics
      const timestampExtrinsic = signedBlock.block.extrinsics.find(
        (ex) => ex.method.section === 'timestamp' && ex.method.method === 'set'
      );
      if (timestampExtrinsic) {
        blockData.timestamp = Number(timestampExtrinsic.method.args[0].toString());
      }
      // Call callback only once with complete data
      callback(blockData);
    }).catch((err) => {
      // If fetching block fails, still callback with available data
      console.warn('Failed to fetch block details:', err);
      callback(blockData);
    });
  });

  return unsub;
};
