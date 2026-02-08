import React, { useEffect, useState } from 'react';
import styles from './BlockInfo.module.css';
import Card from '@/components/common/Card/Card';
import { useBlockData } from '@/hooks/useBlockData';
import { formatNumber, formatTimeAgo, formatAddress } from '@/utils/formatters';

const BlockInfo: React.FC = () => {
  const { currentBlock, blockHash, blockTime, extrinsicCount, isLoading, error } = useBlockData();
  const [animate, setAnimate] = useState(false);
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    if (currentBlock > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentBlock]);

  useEffect(() => {
    const updateTime = () => {
      if (blockTime) {
        setTimeAgo(formatTimeAgo(blockTime));
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [blockTime]);

  return (
    <Card title="Latest Block" loading={isLoading} error={error} className={animate ? styles.pulse : ''}>
      <div className={styles.container}>
        <div className={styles.statRow}>
          <span className={styles.label}>Height</span>
          <span className={`${styles.value} ${styles.blockNumber}`}>#{formatNumber(currentBlock)}</span>
        </div>
        <div className={styles.statRow}>
          <span className={styles.label}>Hash</span>
          <span className={`${styles.value} ${styles.hash}`} title={blockHash}>
            {formatAddress(blockHash, 6, 6)}
          </span>
        </div>
        <div className={styles.statRow}>
          <span className={styles.label}>Time</span>
          <span className={styles.value}>{timeAgo}</span>
        </div>
        <div className={styles.statRow}>
          <span className={styles.label}>Extrinsics</span>
          <span className={styles.value}>{extrinsicCount}</span>
        </div>
      </div>
    </Card>
  );
};

export default BlockInfo;
