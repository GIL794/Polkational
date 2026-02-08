import React from 'react';
import styles from './NetworkStatus.module.css';
import Card from '@/components/common/Card/Card';
import { useNetworkStats } from '@/hooks/useNetworkStats';

const NetworkStatus: React.FC = () => {
  const { stats, isLoading, error } = useNetworkStats();

  return (
    <Card title="Network Status" loading={isLoading} error={error}>
      {stats && (
        <div className={styles.grid}>
          <div className={styles.statItem}>
            <span className={styles.label}>Chain</span>
            <span className={styles.value}>{stats.chain}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>Token</span>
            <span className={styles.value}>{stats.tokenSymbol}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>Node</span>
            <span className={styles.value}>{stats.nodeName}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>Version</span>
            <span className={styles.value}>{stats.nodeVersion}</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default NetworkStatus;
