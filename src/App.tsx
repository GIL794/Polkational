import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import Header from '@/components/common/Header/Header';
import LoadingSpinner from '@/components/common/Loading/LoadingSpinner';
import ErrorBoundary from '@/components/common/ErrorBoundary/ErrorBoundary';
import { PolkadotProvider } from '@/contexts/PolkadotContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ROUTES } from '@/utils/constants';

// Lazy load pages
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const Learn = lazy(() => import('@/pages/Learn/Learn'));
const About = lazy(() => import('@/pages/About/About'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <PolkadotProvider>
          <Router>
            <div className={styles.app}>
              <Header />
              <main className={`container ${styles.main}`}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                    <Route path={ROUTES.LEARN} element={<Learn />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
          </Router>
        </PolkadotProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
