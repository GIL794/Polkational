import React from 'react';
import styles from './ResourceLinks.module.css';
import Card from '@/components/common/Card/Card';

interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'doc' | 'video' | 'wiki' | 'tool';
  source: 'official' | 'community';
  icon: string;
}

const resources: Resource[] = [
  {
    title: 'Polkadot Wiki',
    description: 'The official source of truth for all things Polkadot.',
    url: 'https://wiki.polkadot.network/',
    type: 'wiki',
    source: 'official',
    icon: '📚'
  },
  {
    title: 'Polkadot.js Docs',
    description: 'Documentation for the Polkadot.js API.',
    url: 'https://polkadot.js.org/docs/',
    type: 'doc',
    source: 'official',
    icon: '🔧'
  },
  {
    title: 'Subscan Explorer',
    description: 'High-precision block explorer for Substrate-based chains.',
    url: 'https://polkadot.subscan.io/',
    type: 'tool',
    source: 'community',
    icon: '🔍'
  },
  {
    title: 'Polkadot Architecture',
    description: 'Deep dive into the relay chain and parachain model.',
    url: 'https://www.youtube.com/watch?v=-IshNkqXGqI',
    type: 'video',
    source: 'official',
    icon: '🎥'
  }
];

const ResourceLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      {resources.map((resource) => (
        <a 
          key={resource.url} 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.resourceLink}
        >
          <Card className={styles.card}>
            <span className={styles.icon}>{resource.icon}</span>
            <h4>{resource.title}</h4>
            <p className="text-muted text-sm">{resource.description}</p>
            <div className={styles.meta}>
              <span className={`${styles.type} ${styles[resource.source]}`}>
                {resource.source}
              </span>
              <span className={styles.type}>{resource.type}</span>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ResourceLinks;
