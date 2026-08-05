import React from 'react';
import styles from './Card.module.scss';

export default function Card({
  children,
  hoverable = true,
  className = '',
  onClick,
  ...props
}) {
  const cardClasses = [
    styles.card,
    hoverable ? styles.hoverable : '',
    onClick ? styles.clickable : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
