// Employment.jsx - Expedition History / Professional Employment Timeline
import React, { useState } from 'react';
import styles from './Employment.module.scss';
import { Briefcase, ChevronDown, ChevronUp, Award, TrendingUp, Users, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

import employmentData from '../data/employment.json';

const renderImpactIcon = (iconType) => {
  switch (iconType) {
    case 'zap':
      return <Zap size={15} />;
    case 'users':
      return <Users size={15} />;
    case 'trending':
      return <TrendingUp size={15} />;
    case 'award':
      return <Award size={15} />;
    default:
      return <Zap size={15} />;
  }
};

const parseFormattedText = (text) => {
  if (!text) return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2);
      return (
        <span key={index} className={styles.highlightTerm}>
          {content}
        </span>
      );
    }
    return part;
  });
};

export default function Employment() {
  const [expandedId, setExpandedId] = useState(1); // Default first one expanded

  const toggleExpand = (id, role) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} id="employment">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">CAREER HISTORY // EMPLOYMENT TIMELINE</div>
          <h2>Professional Employment History</h2>
          <p>
            We all have story, for me it involves a lot of hard work, determination, and a passion for building great products.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          {employmentData.map(item => {
            const isExpanded = expandedId === item.id;

            return (
              <div key={item.id} className={styles.timelineItem}>
                <div className={`${styles.nodeIcon} ${item.current ? styles.current : ''}`}>
                  <Briefcase size={15} />
                  {item.current && <span className={styles.pulseRing}></span>}
                </div>

                <div
                  className={styles.card}
                  onClick={() => toggleExpand(item.id, item.role)}
                  title="Click to expand/collapse mission briefing"
                >
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.roleTitle}>{item.role}</h3>
                      <div className={styles.companyName}>{item.company}</div>
                    </div>
                    <span className={styles.dateBadge}>{item.period}</span>
                  </div>

                  <p className={styles.missionSummary}>{item.summary}</p>

                  {/* Impact Pills */}
                  <div className={styles.impactGrid}>
                    {item.impact.map((imp, idx) => (
                      <div key={idx} className={styles.impactPill}>
                        {renderImpactIcon(imp.iconType)}
                        <span>{imp.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className={styles.techTags}>
                    {item.tech.map((t, idx) => (
                      <span key={idx}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Deep Dive */}
                  <div className={styles.expandPrompt}>
                    {isExpanded ? (
                      <>
                        <ChevronUp size={16} />
                        <span>Hide Mission Details</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        <span>View Key Accomplishments ({item.details.length})</span>
                      </>
                    )}
                  </div>

                  {isExpanded && (
                    <ul className={styles.detailsList}>
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{parseFormattedText(detail)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
