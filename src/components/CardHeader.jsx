import React from 'react';
import styles from './CardHeader.module.scss';

export default function CardHeader({
  children,
  icon,
  title,
  subtitle,
  actions,
  className = '',
  iconVariant = 'emerald',
  iconSize = 'md',
  iconClassName = '',
  ...props
}) {
  const headerClasses = [styles.cardHeader, className].filter(Boolean).join(' ');

  if (children) {
    return (
      <div className={headerClasses} {...props}>
        {children}
      </div>
    );
  }

  const iconClasses = [
    styles.iconBox,
    styles[`variant-${iconVariant}`],
    styles[`size-${iconSize}`],
    iconClassName
  ].filter(Boolean).join(' ');

  return (
    <div className={headerClasses} {...props}>
      <div className={styles.leftSection}>
        {icon && (
          <div className={iconClasses}>
            {icon}
          </div>
        )}
        <div className={styles.titleArea}>
          {title && (typeof title === 'string' ? <h3 className={styles.title}>{title}</h3> : title)}
          {subtitle && (typeof subtitle === 'string' ? <div className={styles.subtitle}>{subtitle}</div> : subtitle)}
        </div>
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
