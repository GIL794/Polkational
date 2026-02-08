import React, { useState } from 'react';
import styles from './Quiz.module.css';
import Card from '@/components/common/Card/Card';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

interface QuizProps {
  questions: Question[];
  onExit?: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  // Reset internal state if questions change
  React.useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
  }, [questions]);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  if (currentQuestionIndex >= questions.length) {
    return (
      <Card title="Quiz Completed">
        <div className={styles.container}>
          <div className={styles.feedback + ' ' + styles.success}>
            <h3>Great Job!</h3>
            <p>You scored {score} out of {questions.length}</p>
          </div>
          <div className={styles.navigation} style={{ justifyContent: 'center', gap: '1rem' }}>
            <button className={styles.navButton} onClick={handleReset}>
              Try Again
            </button>
            {onExit && (
              <button className={styles.navButton} onClick={onExit} style={{ backgroundColor: 'var(--secondary)' }}>
                Back to Quizzes
              </button>
            )}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      title={`Interactive Quiz: Question ${currentQuestionIndex + 1}/${questions.length}`}
      footer={onExit && (
        <button 
          onClick={onExit}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-muted)', 
            cursor: 'pointer',
            fontSize: '0.9rem',
            textDecoration: 'underline'
          }}
        >
          Exit Quiz
        </button>
      )}
    >
      <div className={styles.container}>
        <div className={styles.progress}>
          Score: {score} / {currentQuestionIndex}
        </div>

        <div className={styles.questionText}>
          {currentQuestion.question}
        </div>

        <div className={styles.optionsGrid}>
          {currentQuestion.options.map((option, index) => {
            let className = styles.optionButton;
            if (isSubmitted) {
              if (index === currentQuestion.correctAnswer) {
                className += ` ${styles.correct}`;
              } else if (index === selectedOption) {
                className += ` ${styles.incorrect}`;
              }
            } else if (index === selectedOption) {
              className += ` ${styles.selected}`;
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleOptionSelect(index)}
                disabled={isSubmitted}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className={`${styles.feedback} ${selectedOption === currentQuestion.correctAnswer ? styles.success : styles.error}`}>
            <p>
              {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect.'}
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        <div className={styles.navigation}>
          {!isSubmitted ? (
            <button 
              className={styles.navButton} 
              onClick={handleSubmit}
              disabled={selectedOption === null}
            >
              Submit Answer
            </button>
          ) : (
            <button className={styles.navButton} onClick={isLastQuestion ? () => setCurrentQuestionIndex(questions.length) : handleNext}>
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Quiz;
