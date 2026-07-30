// Interests.jsx - Off The Clock / Interactive Passions & Configurable Hobbies
import React from 'react';
import styles from './Interests.module.scss';
import interestsData from '../data/interests.json';
import { Terminal, Sparkles } from 'lucide-react';

const SoccerBallIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 256 256">
    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <circle cx="45" cy="45" r="44" fill="none" />
      <path
        d="M 89.668 50.376 C 89.879 48.612 90 46.82 90 45 c 0 -8.977 -2.653 -17.342 -7.201 -24.371 c -0.052 -0.15 -0.136 -0.284 -0.253 -0.395 C 74.485 8.054 60.668 0 45 0 C 29.331 0 15.514 8.055 7.453 20.236 c -0.115 0.11 -0.199 0.243 -0.251 0.39 C 2.654 27.656 0 36.022 0 45 c 0 1.822 0.121 3.614 0.333 5.38 c -0.01 0.131 0.007 0.264 0.05 0.391 c 1.009 7.843 4.032 15.064 8.551 21.111 c 0.065 0.146 0.164 0.267 0.286 0.366 c 6.268 8.211 15.292 14.203 25.681 16.595 c 0.086 0.034 0.175 0.053 0.268 0.062 C 38.336 89.614 41.623 90 45 90 c 3.378 0 6.665 -0.386 9.833 -1.095 c 0.092 -0.009 0.181 -0.028 0.266 -0.062 c 10.392 -2.393 19.419 -8.387 25.688 -16.603 c 0.116 -0.096 0.211 -0.213 0.276 -0.352 c 4.521 -6.048 7.545 -13.27 8.555 -21.114 C 89.661 50.645 89.678 50.51 89.668 50.376 z M 79.636 70.444 l -17.597 -0.952 l -5.409 -8.426 l 6.19 -19.05 l 11.464 -2.745 l 13.309 11.57 C 86.601 58.106 83.794 64.799 79.636 70.444 z M 27.961 69.492 l -17.597 0.952 c -4.158 -5.645 -6.965 -12.338 -7.957 -19.603 l 13.31 -11.571 l 11.462 2.745 l 6.19 19.051 L 27.961 69.492 z M 80.719 21.088 l -6.891 16.235 l -11.571 2.771 L 46 28.282 v -13.1 l 14.273 -10.37 C 68.653 8.008 75.788 13.746 80.719 21.088 z M 29.727 4.812 L 44 15.182 v 13.1 L 27.742 40.094 l -11.57 -2.771 L 9.281 21.087 C 14.212 13.746 21.347 8.008 29.727 4.812 z M 35.995 87.044 l -6.354 -16.467 l 5.372 -8.369 h 19.972 l 5.372 8.37 l -6.353 16.466 C 51.1 87.666 48.089 88 45 88 C 41.911 88 38.9 87.666 35.995 87.044 z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const WhistleIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Whistle Barrel extending left */}
    <path d="M2.5 7.5 H10 L10 11.5 H2.5 Z" />
    {/* Top vent notch */}
    <path d="M7 7.5 V5.5 H9.5 V7.5" fill="currentColor" fillOpacity="0.2" />
    {/* Circular Pea Chamber on the right */}
    <circle cx="15.5" cy="12" r="6" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
    {/* Inner shine arc in chamber */}
    <path d="M14 8.5 A4 4 0 0 1 18.5 13" />
    {/* Ring loop at bottom-right of chamber */}
    <path d="M19.5 16.5 C20.5 17.5, 21.5 16.5, 20.8 15.5" strokeWidth="2" />
    <circle cx="20.5" cy="17" r="1.2" fill="currentColor" fillOpacity="0.8" />
  </svg>
);

const SwordIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Straight Foil Blade extending up-left */}
    <line x1="13.5" y1="13.5" x2="4.5" y2="4.5" />
    {/* Bell Guard (Domed cup facing blade) */}
    <path d="M 11 16 C 10 13 13 10 16 11 Z" fill="currentColor" />
    {/* Handle Grip extending down-right */}
    <line x1="14.5" y1="14.5" x2="19.5" y2="19.5" strokeWidth="3" />
  </svg>
);

const FishingRodIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Main angled fly rod shaft */}
    <line x1="2" y1="13" x2="16" y2="5" strokeWidth="2" />
    {/* Cork grip handle */}
    <rect x="2" y="12" width="4.5" height="2" rx="1" transform="rotate(-29 4.2 13)" fill="currentColor" fillOpacity="0.8" />
    {/* Fly reel attached below handle */}
    <circle cx="3.8" cy="15.8" r="2.2" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" />
    <circle cx="3.8" cy="15.8" r="0.8" fill="currentColor" />
    {/* Guide rings along rod */}
    <line x1="6.5" y1="10.5" x2="7" y2="11.5" />
    <line x1="10.5" y1="8.2" x2="11" y2="9.2" />
    <line x1="14.5" y1="6" x2="15" y2="7" />
    {/* Fly line flowing from tip in fluid loops */}
    <path d="M16 5 C19.5 2, 23.5 3.5, 23.5 7.5 C23.5 11.5, 15.5 10.5, 16.5 14.5 C17 16.5, 19.5 16.5, 18.5 19 C17.8 20.8, 16 19.8, 16.5 22" fill="none" strokeWidth="1.2" />
    {/* Feathered Fly lure & hook at end of line */}
    <path d="M16.5 22 C15.5 22.5, 14.8 21.5, 15.3 20.8 C16 19.8, 17.8 20.5, 17 21.6" fill="none" strokeWidth="1.5" />
    {/* Fly hackle feathers */}
    <path d="M16 20.2 L13.8 19 M16 20.6 L13.2 20.6 M16.2 21.1 L14.2 22.2" strokeWidth="1.2" />
  </svg>
);

const WoodworkingIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="currentColor" fillOpacity="0.2" />
    <path d="M7 17l-2 2" />
  </svg>
);

export default function Interests({ onShowToast }) {
  const getIcon = (id) => {
    switch (id) {
      case 'soccer':
        return <SoccerBallIcon size={28} />;
      case 'referee':
        return <WhistleIcon size={28} />;
      case 'fencing':
        return <SwordIcon size={28} />;
      case 'fishing':
        return <FishingRodIcon size={28} />;
      case 'programming':
        return <Terminal size={28} />;
      case 'woodworking':
        return <WoodworkingIcon size={28} />;
      default:
        return <Sparkles size={28} />;
    }
  };

  return (
    <section id="interests" className={styles.interestsSection}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>PERSONAL // PASSIONS & INTERESTS</div>
          <h2 className={styles.title}>
            Beyond The <span>Terminal</span>
          </h2>
          <p className={styles.subtitle}>
            When I'm not architecting full stack applications and frontend systems, here is what keeps me energized off the clock.
          </p>
        </div>

        <div className={styles.grid}>
          {interestsData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{getIcon(item.id)}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>

              <p className={styles.description}>{item.description}</p>

              {item.tag && (
                <div className={styles.interestTag}>
                  <span>{item.tag}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
