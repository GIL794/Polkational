import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { HeaderProps } from '@/types/component.types';
import { useTheme } from '@/contexts/ThemeContext';
import { ROUTES } from '@/utils/constants';

const Header: React.FC<HeaderProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <NavLink to={ROUTES.HOME} className={styles.logo}>
          <img src="/polkadot-logo.svg" alt="Polkadot Logo" className={styles.logoImg} />
          <span>Polkadot Edu</span>
        </NavLink>

        <button 
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.links} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <NavLink 
            to={ROUTES.DASHBOARD} 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
            onClick={handleNavClick}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to={ROUTES.LEARN} 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
            onClick={handleNavClick}
          >
            Learn
          </NavLink>
          <NavLink 
            to={ROUTES.ABOUT} 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
            onClick={handleNavClick}
          >
            About
          </NavLink>
          <button onClick={() => { toggleTheme(); handleNavClick(); }} className={styles.themeToggleMobile} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
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
