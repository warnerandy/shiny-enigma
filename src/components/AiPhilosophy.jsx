import React, { useState } from 'react';
import styles from './AiPhilosophy.module.scss';
import aiData from '../data/aiPhilosophy.json';
import { Cpu, Compass, Zap, Shield, Quote, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AiPhilosophy() {
  const [answerIndex, setAnswerIndex] = useState(0);
  const [hasAsked, setHasAsked] = useState(false);

  const iconsMap = {
    cpu: <Cpu size={24} />,
    compass: <Compass size={24} />,
    zap: <Zap size={24} />,
    shield: <Shield size={24} />
  };

  const handleAskPersona = () => {
    const nextIdx = (answerIndex + 1) % aiData.interactivePrompt.sampleAnswers.length;
    setAnswerIndex(nextIdx);
    setHasAsked(true);
  };

  return (
    <section id={aiData.sectionId} className={styles.aiSection}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>{aiData.badge}</div>
          <h2 className={styles.title}>
            {aiData.title.split('AI')[0]} <span>AI</span> {aiData.title.split('AI')[1]}
          </h2>
          <p className={styles.subtitle}>{aiData.subtitle}</p>
        </div>

        <div className={styles.manifestoCard}>
          <div className={styles.quoteIcon}>
            <Quote size={40} />
          </div>
          <blockquote className={styles.quoteText}>
            "{aiData.quote}"
          </blockquote>
          <div className={styles.quoteAuthor}>
            <Terminal size={18} />
            <span>ANDY WARNER // AI IN SOFTWARE ENGINEERING</span>
          </div>
        </div>

        <div className={styles.principlesGrid}>
          {aiData.principles.map((principle) => (
            <div key={principle.id} className={styles.principleCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  {iconsMap[principle.icon] || <Zap size={24} />}
                </div>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
              </div>
              <p className={styles.principleDesc}>{principle.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.interactiveBox}>
          <h3 className={styles.boxTitle}>
            <Sparkles size={20} color="#10b981" />
            {aiData.interactivePrompt.title}
          </h3>
          <p style={{ color: '#a7f3d0', fontSize: '0.95rem' }}>
            {aiData.interactivePrompt.placeholder}
          </p>

          {hasAsked && (
            <div className={styles.answerCard}>
              "{aiData.interactivePrompt.sampleAnswers[answerIndex]}"
            </div>
          )}

          <button className={styles.askBtn} onClick={handleAskPersona}>
            <Sparkles size={16} />
            <span>{hasAsked ? 'Ask Another Question // Next Take' : 'Synthesize AI Take // Ask Persona'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
