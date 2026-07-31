// Hero.jsx - Stunning Hero section with interactive stats and direct contact buttons
import React from 'react';
import styles from './Hero.module.scss';
import { ArrowRight, Terminal, Compass, Quote, Mail } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Hero({ onShowToast }) {
  return (
    <section className={styles.hero} id="about">
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left: Text & CTA */}
          <div className={styles.textContent}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              <span>STATUS // AUSTIN, TX — FULL STACK ENGINEER & FRONTEND SPECIALIST</span>
            </div>

            <h1 className={styles.title}>
              Andy Warner — <span className={styles.nameHighlight}>Full Stack Engineer</span> with a Frontend Focus.
            </h1>

            <p className={styles.subtitle}>
              Full Stack Engineer specializing in frontend development and the creation of beautiful, pixel-perfect, enterprise-grade web applications. Based in the Austin area, I bridge robust backend services with intuitive UI design systems and high-performance user experiences.
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

              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                <LinkedInIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className={styles.secondaryBtn}
              >
                <Mail size={18} />
                <span>Email</span>
              </a>

              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                <GitHubIcon size={18} />
                <span>GitHub</span>
              </a>
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
            <Terminal size={18} />
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

          <div className={styles.statCard} onClick={() => onShowToast('⚡ React, TypeScript, SCSS, Node.js, Elixir/Phoenix, Docker, and SQL.')}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Core Technologies</div>
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
