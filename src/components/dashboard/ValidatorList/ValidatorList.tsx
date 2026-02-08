import React from 'react';
import styles from './ValidatorList.module.css';
import Card from '@/components/common/Card/Card';
import { useValidators } from '@/hooks/useValidators';
import { formatAddress, formatBalance } from '@/utils/formatters';

const ValidatorList: React.FC = () => {
  const { validators, isLoading, error } = useValidators();

  return (
    <Card 
      title="Top Validators" 
      loading={isLoading} 
      error={error}
      footer={
        <p className="text-sm text-muted mt-2">
          <strong>Educational Note:</strong> Validators secure the Relay Chain by staking DOT, validating proofs from collators, and participating in consensus. The active set changes every era (24 hours).
        </p>
      }
    >
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Address</th>
              <th>Total Stake</th>
              <th>Commission</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {validators.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center">No validators found</td>
              </tr>
            ) : (
              validators.map((validator) => (
                <tr key={validator.address}>
                  <td className={styles.address} title={validator.address}>
                    {formatAddress(validator.address)}
                  </td>
                  <td>{formatBalance(validator.totalStake)}</td>
                  <td>{validator.commission}</td>
                  <td className={validator.active ? styles.active : styles.inactive}>
                    {validator.active ? 'Active' : 'Waiting'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ValidatorList;
