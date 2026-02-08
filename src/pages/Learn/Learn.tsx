import React, { useState } from 'react';
import styles from './Learn.module.css';
import ArchitectureGuide from '@/components/education/ArchitectureGuide/ArchitectureGuide';
import TutorialCard from '@/components/education/TutorialCard/TutorialCard';
import ResourceLinks from '@/components/education/ResourceLinks/ResourceLinks';
import Quiz from '@/components/education/Quiz/Quiz';
import Glossary from '@/components/education/Glossary/Glossary';
import { quizzes } from '@/data/quizzes';
import Card from '@/components/common/Card/Card';

const externalResources = [
  {
    title: 'Parachains 101',
    description: 'What are parachains and how do they connect to the relay chain?',
    difficulty: 'Beginner',
    duration: '10 min',
    tags: ['Architecture', 'Scalability'],
    link: 'https://wiki.polkadot.network/docs/learn-parachains'
  },
  {
    title: 'Understanding Consensus',
    description: 'Learn how NPoS (Nominated Proof of Stake) works in Polkadot.',
    difficulty: 'Intermediate',
    duration: '15 min',
    tags: ['Consensus', 'Staking', 'NPoS'],
    link: 'https://wiki.polkadot.network/docs/learn-consensus'
  },
  {
    title: 'Cross-Chain Messaging (XCM)',
    description: 'How chains communicate with each other using XCM.',
    difficulty: 'Advanced',
    duration: '25 min',
    tags: ['Interoperability', 'XCM'],
    link: 'https://wiki.polkadot.network/docs/learn-xcm'
  }
] as const;

const Learn: React.FC = () => {
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);

  const activeQuiz = quizzes.find(q => q.id === activeQuizId);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Network Architecture</h2>
        <ArchitectureGuide />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Interactive Tutorials</h2>
        
        {!activeQuiz ? (
          <div className={styles.tutorialGrid}>
            {quizzes.map((quiz) => (
              <Card key={quiz.id} title={quiz.title}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <p className="text-muted" style={{ marginBottom: '1rem', flex: 1 }}>
                    {quiz.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={`${styles.difficulty} ${styles[quiz.difficulty.toLowerCase()]}`}>
                      {quiz.difficulty}
                    </span>
                    <button 
                      className="button-primary"
                      onClick={() => setActiveQuizId(quiz.id)}
                      style={{ 
                        padding: '0.5rem 1rem', 
                        backgroundColor: 'var(--primary)', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Start Quiz
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Quiz 
            questions={activeQuiz.questions} 
            onExit={() => setActiveQuizId(null)}
          />
        )}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Extra Learning</h2>
        <div className={styles.tutorialGrid}>
          {externalResources.map((resource) => (
            <TutorialCard
              key={resource.title}
              {...resource}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Polkadot Glossary</h2>
        <Glossary />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Additional Resources</h2>
        <ResourceLinks />
      </div>
    </div>
  );
};

export default Learn;
