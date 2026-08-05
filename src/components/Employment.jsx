// Employment.jsx - Expedition History / Professional Employment Timeline
import React, { useState } from 'react';
import styles from './Employment.module.scss';
import { Briefcase, ChevronDown, ChevronUp, Award, TrendingUp, Users, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import Badge from './Badge';
import Card from './Card';
import CardHeader from './CardHeader';

import morpheusLogo from '../assets/morpheus.svg';
import bertramLogo from '../assets/bertram.svg';
import hpeLogo from '../assets/hpe.svg';

import employmentData from '../data/employment.json';

const renderNodeIcon = (item) => {
  if (item.company.includes('HPE') || item.company.includes('Hewlett') || item.id === 1) {
    return <img src={hpeLogo} alt="HPE" className={styles.hpeLogoIcon} />;
  }
  if (item.company.includes('Morpheus') || item.id === 2) {
    return <img src={morpheusLogo} alt="Morpheus Data" className={styles.morpheusLogoIcon} />;
  }
  if (item.company.includes('Bertram') || item.id === 3) {
    return <img src={bertramLogo} alt="Bertram Labs" className={styles.bertramLogoIcon} />;
  }
  return <Briefcase size={15} />;
};

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

  const toggleExpand = (id, role, event) => {
    setExpandedId(prev => (prev === id ? null : id));

    const cardElement = event?.currentTarget;
    if (cardElement) {
      setTimeout(() => {
        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 80;
        const offset = headerHeight + 16; // 16px gap below nav header

        const elementTop = cardElement.getBoundingClientRect().top + window.scrollY;
        const targetScroll = elementTop - offset;

        window.scrollTo({
          top: Math.max(0, targetScroll),
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  return (
    <section className={styles.section} id="employment">
      <div className="container">
        <div className="section-header">
          <Badge className="section-badge" interactive={false}>CAREER HISTORY // EMPLOYMENT TIMELINE</Badge>
          <h2>Professional Employment History</h2>
          <p>
            We all have story, for me it involves a lot of hard work, determination, and a passion for building great products.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          {employmentData.map(item => {
            const isExpanded = expandedId === item.id;

            return (
              <div key={item.id} className={styles.timelineItem} id={`job-${item.id}`}>
                <div className={`${styles.nodeIcon} ${item.current ? styles.current : ''}`}>
                  {renderNodeIcon(item)}
                  {item.current && <span className={styles.pulseRing}></span>}
                </div>

                <Card
                  className={styles.card}
                  onClick={(e) => toggleExpand(item.id, item.role, e)}
                  title="Click to expand/collapse mission briefing"
                >
                  <CardHeader
                    className={styles.jobCardHeader}
                    title={item.role}
                    subtitle={item.company}
                    actions={<Badge variant="emerald" size="md" interactive={false}>{item.period}</Badge>}
                  />

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
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
