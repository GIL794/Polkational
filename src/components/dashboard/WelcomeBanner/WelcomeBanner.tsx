import React, { useState, useEffect } from 'react';
import styles from './WelcomeBanner.module.css';

const WelcomeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidden = localStorage.getItem('hideWelcomeBanner');
    if (hidden === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hideWelcomeBanner', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <button className={styles.closeButton} onClick={handleClose} aria-label="Close welcome banner">
        ×
      </button>
      <div className={styles.content}>
        <h2 className={styles.title}>Welcome to the Polkadot Educational Dashboard! 🚀</h2>
        <p className={styles.description}>
          This platform is designed to help you understand the Polkadot ecosystem through real-time data and interactive learning.
        </p>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span>📊</span> Watch live blocks & validators
          </div>
          <div className={styles.step}>
            <span>🎓</span> Take interactive quizzes in the Learn tab
          </div>
          <div className={styles.step}>
            <span>🔍</span> Explore the Glossary for definitions
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
