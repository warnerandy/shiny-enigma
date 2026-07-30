// Hero.jsx - Stunning Hero section with interactive stats and explorer theme
import React, { useState } from 'react';
import styles from './Hero.module.scss';
import { Compass, Download, ArrowRight, Coffee, ShieldCheck, Terminal, Award } from 'lucide-react';
export default function Hero({ onOpenContact, onShowToast }) {
  const [coffees, setCoffees] = useState(2410);

  const handleCoffeeClick = () => {
    setCoffees(prev => prev + 1);
    onShowToast('☕ Fresh espresso brewed! Fueling Warner\'s next coding expedition.');
  };

  const handleResumeDownload = (e) => {
    e.preventDefault();
    onShowToast('📋 Resume Expedition Log downloaded (Virtual Preview Active!)');
  };

  return (
    <section className={styles.hero} id="about">
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left: Text & CTA */}
          <div className={styles.textContent}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              <span>STATUS // AUSTIN, TX — FULL STACK ENGINEER & FRONTEND ARCHITECT</span>
            </div>

            <h1 className={styles.title}>
              Andrew Warner — <span className={styles.nameHighlight}>Full Stack Engineer</span> with a Frontend Focus.
            </h1>

            <p className={styles.subtitle}>
              Full Stack Engineer specializing in frontend architecture and the creation of beautiful, pixel-perfect, enterprise-grade web applications. Based in the Austin area, I bridge robust backend services with intuitive UI design systems and high-performance user experiences.
            </p>

            {/* Core Tech Stack Pills */}
            <div className={styles.techPillsRow}>
              <span>React 19</span>
              <span>Vite</span>
              <span>TypeScript</span>
              <span>SCSS / CSS3</span>
              <span>Elixir & Phoenix</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>

            <div className={styles.actions}>
              <a href="#experience" className={styles.primaryBtn}>
                <span>Explore Technical Skills</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenContact} className={styles.secondaryBtn}>
                <Download size={18} />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Right: Avatar with Floating Professional Badges */}
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarRing}>
              <img
                src="/avatar.jpg"
                alt="Andrew Warner Avatar"
                className={styles.avatarImage}
              />
            </div>

            {/* Floating Badge 1 */}
            <div className={`${styles.floatTag} ${styles.tagTop}`}>
              <Terminal size={16} />
              <div>FOCUS // <span>FRONTEND ARCHITECTURE</span></div>
            </div>

            {/* Floating Badge 2 */}
            <div className={`${styles.floatTag} ${styles.tagBottom}`}>
              <Compass size={16} />
              <div>CRAFT // <span>ENTERPRISE APPS</span></div>
            </div>
          </div>
        </div>

        {/* Interactive Performance & Career Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard} onClick={() => onShowToast('💻 Over 25 years of full-stack software development experience.')}>
            <div className={styles.statNumber}>25+</div>
            <div className={styles.statLabel}>Years Writing Code</div>
          </div>

          <div className={styles.statCard} onClick={() => onShowToast('🚀 Shipped enterprise cloud management, telemetry dashboards, & web apps.')}>
            <div className={styles.statNumber}>40+</div>
            <div className={styles.statLabel}>Systems Deployed</div>
          </div>

          <div className={styles.statCard} onClick={() => onShowToast('⚡ High-availability production uptime and sub-second UI responsiveness.')}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>Production Reliability</div>
          </div>

          <div className={styles.statCard} onClick={handleCoffeeClick} title="Click to brew another coffee!">
            <div className={styles.statNumber}>{coffees.toLocaleString()}</div>
            <div className={styles.statLabel}>Cups of Espresso</div>
            <div className={styles.coffeeHint}>+ Click to brew ☕</div>
          </div>
        </div>
      </div>
    </section>
  );
}
