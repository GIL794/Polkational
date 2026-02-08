import React from 'react';
import styles from './About.module.css';
import Card from '@/components/common/Card/Card';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card title="About Polkadot Educational Dashboard">
        <div className={styles.content}>
          <p>
            The Polkadot Educational Dashboard is an interactive learning platform designed 
            to help developers and enthusiasts understand the Polkadot ecosystem through 
            real-time data visualization and educational content.
          </p>
          
          <p style={{ marginTop: '1rem' }}>
            Built as an open-source initiative, this dashboard demonstrates how to interact 
            with the Polkadot network using modern web technologies while providing valuable 
            insights into network mechanics.
          </p>
        </div>
      </Card>

      <Card title="Key Features">
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureTitle}>Real-time Data</span>
            <span className={styles.featureDesc}>Live network statistics, block production, and validator metrics.</span>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureTitle}>Educational Focus</span>
            <span className={styles.featureDesc}>Interactive guides explaining consensus, architecture, and more.</span>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureTitle}>Modern Stack</span>
            <span className={styles.featureDesc}>Built with React, TypeScript, and Polkadot.js API.</span>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureTitle}>Open Source</span>
            <span className={styles.featureDesc}>Fully open source and available for community contribution.</span>
          </li>
        </ul>
      </Card>

      <Card title="Tech Stack">
        <div className={styles.content}>
          <p>
            This project utilizes the following technologies:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li>React 18+</li>
            <li>TypeScript 5+</li>
            <li>Vite 5+</li>
            <li>Polkadot.js API</li>
            <li>CSS Modules</li>
            <li>Docker</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default About;
