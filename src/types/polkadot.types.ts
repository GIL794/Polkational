export interface BlockData {
  number: number;
  hash: string;
  timestamp: number;
  extrinsics: number;
  author?: string;
}

export interface ValidatorInfo {
  address: string;
  totalStake: string;
  commission: string;
  active: boolean;
  identity?: {
    display?: string;
    legal?: string;
    web?: string;
    riot?: string;
  };
}

export interface NetworkStats {
  chain: string;
  nodeName: string;
  nodeVersion: string;
  tokenSymbol: string;
  tokenDecimals: number;
  ss58Format: number;
}

export interface ChainState {
  finalizedBlock: number;
  bestBlock: number;
  validatorCount: number;
  era: number;
  session: number;
}
