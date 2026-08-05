// Projects.jsx - Gemini Lab & Side Projects Section
import React from 'react';
import styles from './Projects.module.scss';
import projectsData from '../data/projects.json';
import { Bot, Code2, Activity, Home, FolderGit2 } from 'lucide-react';
import Badge from './Badge';
import Card from './Card';
import CardHeader from './CardHeader';

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
          <Badge className={styles.badge} interactive={false}>PROJECT LAB // FEATURED SIDE PROJECTS</Badge>
          <h2 className={styles.title}>
            Side Projects
          </h2>
          <p className={styles.subtitle}>
            A showcase of side projects I work on in my spare time to continue to bring my ideas to life.
          </p>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <Card key={project.id} className={styles.card}>
              <CardHeader
                icon={getIcon(project.iconType)}
                iconVariant="emerald"
                iconSize="md"
                iconClassName={styles.projectIcon}
                title={project.title}
              />

              <div className={styles.badgeRow}>
                <Badge variant="gold" size="sm">{project.badge}</Badge>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
