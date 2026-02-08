import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { HeaderProps } from '@/types/component.types';
import { useTheme } from '@/contexts/ThemeContext';
import { ROUTES } from '@/utils/constants';

const Header: React.FC<HeaderProps> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <NavLink to={ROUTES.HOME} className={styles.logo}>
          <img src="/polkadot-logo.svg" alt="Polkadot Logo" className={styles.logoImg} />
          <span>Polkadot Edu</span>
        </NavLink>

        <nav className={styles.links}>
          <NavLink 
            to={ROUTES.DASHBOARD} 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to={ROUTES.LEARN} 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            Learn
          </NavLink>
          <NavLink 
            to={ROUTES.ABOUT} 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            About
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
