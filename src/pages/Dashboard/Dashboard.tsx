import React from 'react';
import styles from './Dashboard.module.css';
import NetworkStatus from '@/components/dashboard/NetworkStatus/NetworkStatus';
import BlockInfo from '@/components/dashboard/BlockInfo/BlockInfo';
import ValidatorList from '@/components/dashboard/ValidatorList/ValidatorList';
import ActivityFeed from '@/components/dashboard/ActivityFeed/ActivityFeed';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner/WelcomeBanner';
import { usePolkadotApi } from '@/hooks/usePolkadotApi';
import LoadingSpinner from '@/components/common/Loading/LoadingSpinner';

const Dashboard: React.FC = () => {
  const { isConnected, isConnecting, error } = usePolkadotApi();

  if (isConnecting) {
    return <LoadingSpinner size="large" />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Connection Error</h2>
        <p>{error.message}</p>
        <p>Please make sure you are connected to the internet and the Polkadot network is accessible.</p>
      </div>
    );
  }

  if (!isConnected) {
    return <div>Connecting to Polkadot Network...</div>;
  }

  return (
    <div className={styles.dashboardGrid}>
      <div className={styles.welcomeBanner}>
        <WelcomeBanner />
      </div>

      <div className={styles.networkStatus}>
        <NetworkStatus />
      </div>
      
      <div className={styles.blockInfo}>
        <BlockInfo />
      </div>
      
      <div className={styles.validators}>
        <ValidatorList />
      </div>
      
      <div className={styles.activity}>
        <ActivityFeed />
      </div>
    </div>
  );
};

export default Dashboard;
