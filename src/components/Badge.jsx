import React from 'react';
import styles from './Badge.module.scss';

export default function Badge({
  children,
  variant = 'emerald',
  size = 'md',
  interactive = true,
  className = '',
  ...props
}) {
  const badgeClasses = [
    styles.badge,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    interactive ? styles.interactive : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
}
