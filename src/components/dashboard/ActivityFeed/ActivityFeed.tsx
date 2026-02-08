import React from 'react';
import styles from './ActivityFeed.module.css';
import Card from '@/components/common/Card/Card';
import { useBlockData } from '@/hooks/useBlockData';
import { formatNumber, formatAddress, formatTimeAgo } from '@/utils/formatters';

const ActivityFeed: React.FC = () => {
  const { recentBlocks, isLoading, error } = useBlockData();

  return (
    <Card title="Recent Activity" loading={isLoading} error={error}>
      <ul className={styles.feedList}>
        {recentBlocks.map((block) => (
          <li key={block.hash} className={styles.feedItem}>
            <div className={styles.blockInfo}>
              <span className={styles.blockNum}>#{formatNumber(block.number)}</span>
              <span className={styles.blockHash}>{formatAddress(block.hash)}</span>
            </div>
            <div className={styles.meta}>
              <div>{block.extrinsics} Extrinsics</div>
              <div>{formatTimeAgo(block.timestamp)}</div>
            </div>
          </li>
        ))}
        {recentBlocks.length === 0 && !isLoading && (
          <li className="text-center text-muted">No activity yet</li>
        )}
      </ul>
    </Card>
  );
};

export default ActivityFeed;
