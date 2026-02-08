import React from 'react';
import styles from './TutorialCard.module.css';
import Card from '@/components/common/Card/Card';
import { TutorialCardProps } from '@/types/component.types';

const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  description,
  difficulty,
  duration,
  tags,
  link
}) => {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.cardHeader}>
        <h4>{title}</h4>
        <span className={`${styles.difficulty} ${styles[difficulty.toLowerCase()]}`}>
          {difficulty}
        </span>
      </div>
      
      <p className={styles.description}>{description}</p>
      
      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>#{tag}</span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-muted text-sm">⏱️ {duration}</span>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Start Learning →
          </a>
        )}
      </div>
    </Card>
  );
};

export default TutorialCard;
