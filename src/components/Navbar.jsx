// Navbar.jsx - Sleek, glassmorphic navigation bar
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Send } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContent}`}>
        <button className={styles.logo} onClick={handleLogoClick} aria-label="Andy Warner Logo - Scroll to top">
          <div className={styles.logoIcon}>AW//</div>
          <div className={styles.logoText}>
            ANDY WARNER
          </div>
        </button>

        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#employment">Employment</a></li>
          <li><a href="#ai-philosophy">AI</a></li>
          <li><a href="#projects">Lab</a></li>
          <li><a href="#interests">Off The Clock</a></li>
        </ul>

        <div className={styles.navActions}>
          <button
            className={styles.hireButton}
            onClick={onOpenContact}
          >
            <Send size={16} />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </header>
  );
}
