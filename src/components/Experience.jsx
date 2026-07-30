// Experience.jsx - The Skill Canopy / Tech Radar with search, filter, and interactive XP bars
import React, { useState } from 'react';
import styles from './Experience.module.scss';
import { Search, Sparkles, Terminal, Code, Database, Cpu, Cloud, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

import skillsData from '../data/skills.json';

const CATEGORIES = [
  'All Skills',
  'Frontend & UI',
  'Backend & Systems',
  'Cloud & DevOps',
  'Architecture & Craft',
  'Core Languages'
];

export default function Experience({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('All Skills');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData
    .filter(skill => {
      const matchesCategory = activeTab === 'All Skills' || skill.category === activeTab;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => b.level - a.level);

  const handleCardClick = (skill) => {
    onShowToast(`🌿 Explorer's Note (${skill.name}): ${skill.note}`);
  };

  return (
    <section className={styles.section} id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">CORE COMPETENCIES // TECHNICAL MATRIX</div>
          <h2>Technical Experience & Arsenal</h2>
          <p>
            An interactive radar of my full-stack capabilities, centered on frontend architecture, glassmorphic design systems, React performance, and beautiful enterprise applications.
          </p>
        </div>

        {/* Search and Filters */}
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search skills (e.g. React, Docker, API, TypeScript)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search skills"
            />
            {searchQuery && (
              <button className={styles.clearBtn} onClick={() => setSearchQuery('')}>
                Clear
              </button>
            )}
          </div>

          <div className={styles.filterTabs}>
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`${styles.tabBtn} ${activeTab === category ? styles.active : ''}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        {filteredSkills.length > 0 ? (
          <div className={styles.skillGrid}>
            {filteredSkills.map(skill => (
              <div
                key={skill.id}
                className={styles.skillCard}
                onClick={() => handleCardClick(skill)}
                title="Click to view full Explorer's Note"
              >
                <div>
                  <div className={styles.cardHeader}>
                    <h3>{skill.name}</h3>
                    <span className={styles.categoryBadge}>{skill.category}</span>
                  </div>

                  <p className={styles.explorerNote}>{skill.note}</p>
                </div>

                <div className={styles.xpContainer}>
                  <div className={styles.xpHeader}>
                    <span className={styles.xpLabel}>MASTERY LEVEL</span>
                    <span className={styles.xpValue}>{skill.badge}</span>
                  </div>
                  <div className={styles.xpBarBg}>
                    <div
                      className={styles.xpBarFill}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <p>No skills found matching "{searchQuery}" in this category.</p>
            <button onClick={() => { setSearchQuery(''); setActiveTab('All Skills'); }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
