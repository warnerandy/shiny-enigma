// Hero.jsx - Stunning Hero section with interactive stats and explorer theme
import React, { useState } from 'react';
import styles from './Hero.module.scss';
import { Compass, Download, ArrowRight, Coffee, ShieldCheck, Terminal, Award, Sparkles, Quote } from 'lucide-react';
export default function Hero({ onOpenContact, onShowToast }) {
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
              Andy Warner — <span className={styles.nameHighlight}>Full Stack Engineer</span> with a Frontend Focus.
            </h1>

            <p className={styles.subtitle}>
              Full Stack Engineer specializing in frontend architecture and the creation of beautiful, pixel-perfect, enterprise-grade web applications. Based in the Austin area, I bridge robust backend services with intuitive UI design systems and high-performance user experiences.
            </p>

            {/* Core Tech Stack Pills */}
            <div className={styles.techPillsRow}>
              <span>JavaScript / Node.js</span>
              <span>React / Next.js</span>
              <span>TypeScript</span>
              <span>SCSS / CSS3</span>
              <span>Vite</span>
              <span>Docker</span>
              <span>Elixir & Phoenix</span>
              <span>PostgreSQL / MySQL</span>
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
                alt="Andy Warner Avatar"
                className={styles.avatarImage}
              />
            </div>

            {/* Floating Badge 1 */}
            <div className={`${styles.floatTag} ${styles.tagTop}`}>
              <Terminal size={16} />
              <div>FOCUS // <span>FRONTEND DEV</span></div>
            </div>

            {/* Floating Badge 2 */}
            <div className={`${styles.floatTag} ${styles.tagBottom}`}>
              <Compass size={16} />
              <div>SPECIALTY // <span>ENTERPRISE WEB APPS</span></div>
            </div>
          </div>
        </div>

        {/* Full-Width Why I Program Manifesto Card */}
        <div className={styles.whyManifestoCard}>
          <div className={styles.quoteIcon}>
            <Quote size={36} />
          </div>
          <blockquote className={styles.quoteText}>
            "I program because I am passionate about complex problems and making beautiful solutions. Programming and front end development allow me to do this every day."
          </blockquote>
          <div className={styles.quoteAuthor}>
            <Sparkles size={18} />
            <span>ANDY WARNER // WHY I PROGRAM</span>
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

          <div className={styles.statCard} onClick={() => onShowToast('☕ Fueled by fresh espresso and clean software architecture.')}>
            <div className={styles.statNumber}>2,400+</div>
            <div className={styles.statLabel}>Cups of Espresso</div>
          </div>
        </div>
      </div>
    </section>
  );
}
