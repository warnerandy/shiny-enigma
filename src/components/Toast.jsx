// Toast.jsx - Glassmorphic toast notification for interactive feedback
import React from 'react';
import styles from './Toast.module.scss';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toast}>
        <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0 }} />
        <span>{message}</span>
      </div>
    </div>
  );
}
