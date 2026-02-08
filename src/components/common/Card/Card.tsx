import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '@/types/component.types';
import LoadingSpinner from '../Loading/LoadingSpinner';

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  loading = false, 
  error = null, 
  footer,
  className 
}) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      {title && (
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      )}
      
      <div className={styles.content}>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="alert alert-danger">
            Error: {error.message || 'Something went wrong'}
          </div>
        ) : (
          children
        )}
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
