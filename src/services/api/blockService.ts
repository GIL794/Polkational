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
      timestamp: Date.now(), // Approximation, real time comes from extrinsics usually or block time
      extrinsics: 0, // Header doesn't have extrinsics count directly without fetching block
    };
    
    // To get extrinsics count, we might need to fetch the full block
    // For efficiency in subscription, we might skip or do a separate fetch
    // But let's try to get full block details if possible or just update what we have
    
    // For this demo, let's fetch the block to get extrinsic count
    api.rpc.chain.getBlock(header.hash).then((signedBlock) => {
        blockData.extrinsics = signedBlock.block.extrinsics.length;
        // timestamp can be extracted from extrinsics too (timestamp.set)
        const timestampExtrinsic = signedBlock.block.extrinsics.find(
            (ex) => ex.method.section === 'timestamp' && ex.method.method === 'set'
        );
        if (timestampExtrinsic) {
            blockData.timestamp = Number(timestampExtrinsic.method.args[0].toString());
        }
        callback(blockData);
    });
  });

  return unsub;
};
