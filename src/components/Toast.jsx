// Toast.jsx - Glassmorphic toast notification for interactive feedback
import React from 'react';
import styles from './Toast.module.scss';
import { Sparkles } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toast}>
        <Sparkles size={18} style={{ color: '#f59e0b', flexShrink: 0 }} />
        <span>{message}</span>
      </div>
    </div>
  );
}
