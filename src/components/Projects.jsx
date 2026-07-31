// Projects.jsx - Gemini Lab & Side Projects Section
import React from 'react';
import styles from './Projects.module.scss';
import projectsData from '../data/projects.json';
import { Bot, Code2, Activity, Home, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'bot':
        return <Bot size={26} />;
      case 'code':
        return <Code2 size={26} />;
      case 'activity':
        return <Activity size={26} />;
      case 'home':
        return <Home size={26} />;
      default:
        return <FolderGit2 size={26} />;
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>PROJECT LAB // FEATURED SIDE PROJECTS</div>
          <h2 className={styles.title}>
            Side Projects
          </h2>
          <p className={styles.subtitle}>
            A showcase of side projects I work on in my spare time to continue to bring my ideas to life.
          </p>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{getIcon(project.iconType)}</div>
                <div className={styles.headerText}>
                  <h3>{project.title}</h3>
                </div>
              </div>

              <div className={styles.badgeRow}>
                <span className={styles.badgePill}>{project.badge}</span>
              </div>

              <p className={styles.summary}>{project.summary}</p>

              <ul className={styles.highlightsList}>
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className={styles.techTags}>
                {project.tech.map((t, idx) => (
                  <span key={idx}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
