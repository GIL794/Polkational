import { formatBalance as polkadotFormatBalance } from '@polkadot/util';

export const formatAddress = (address: string, start = 6, end = 6): string => {
  if (!address) return '';
  if (address.length <= start + end) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};

export const formatNumber = (num: number | string): string => {
  return new Intl.NumberFormat('en-US').format(Number(num));
};

export const formatBalance = (
  balance: string | number | bigint,
  decimals = 10,
  symbol = 'DOT'
): string => {
  // Simple formatter if @polkadot/util one is too complex for basic needs
  // or wrap it. For now, use basic Intl
  // Actually, let's use a simpler approach for education
  return polkadotFormatBalance(balance, { decimals, withUnit: symbol });
};

export const formatTimeAgo = (timestamp: number): string => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  
  return Math.floor(seconds) + " seconds ago";
};
