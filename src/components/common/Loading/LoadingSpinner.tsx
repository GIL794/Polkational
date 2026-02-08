import React from 'react';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium' }) => {
  return (
    <div className={`${styles.spinnerContainer} ${styles[size]}`}>
      <div className={styles.spinner} role="status" aria-label="Loading"></div>
    </div>
  );
};

export default LoadingSpinner;
