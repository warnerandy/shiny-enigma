// Navbar.jsx - Sleek, glassmorphic navigation bar with interactive celebration features
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Compass, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.1, x: 0.8 },
      colors: ['#10b981', '#f59e0b', '#06b6d4', '#ffffff']
    });
  };

  const handleLogoClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.2 },
      colors: ['#10b981', '#fbbf24']
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContent}`}>
        <button className={styles.logo} onClick={handleLogoClick} aria-label="Andrew Warner Logo - Scroll to top">
          <div className={styles.logoIcon}>AW//</div>
          <div className={styles.logoText}>
            ANDREW WARNER
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
            className={styles.funButton}
            onClick={triggerConfetti}
            title="Celebrate Expedition (Confetti!)"
            aria-label="Celebrate Expedition with Confetti"
          >
            <Sparkles size={20} />
          </button>
          <button
            className={styles.hireButton}
            onClick={onOpenContact}
          >
            <Send size={16} />
            <span>Join Expedition</span>
          </button>
        </div>
      </div>
    </header>
  );
}
