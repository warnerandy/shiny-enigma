// Navbar.jsx - Sleek, glassmorphic navigation bar with direct contact buttons
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Mail } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Navbar() {
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
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={16} />
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className={styles.socialButton}
            aria-label="Send Email"
          >
            <Mail size={16} />
          </a>

          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialButton}
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
