// Footer.jsx - Professional Footer & Expedition credits
import React from 'react';
import styles from './Footer.module.scss';
import { ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer({ onShowToast }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    confetti({
      particleCount: 20,
      spread: 35,
      origin: { y: 0.9 },
      colors: ['#10b981', '#f59e0b']
    });
    onShowToast('🚀 Returned to Expedition basecamp (Top of page)');
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.title}>
              ANDREW WARNER <span>// FULL STACK & FRONTEND ARCHITECT</span>
            </div>
            <p className={styles.tagline}>
              Full Stack Engineer specializing in frontend craft — building beautiful, enterprise-grade applications.
            </p>
          </div>

          <button className={styles.backTop} onClick={handleScrollTop}>
            <span>Back To Basecamp</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Andrew Warner. All rights reserved. • Designed & Built with React, Vite & SCSS • Adventure Awaits
        </div>
      </div>
    </footer>
  );
}
