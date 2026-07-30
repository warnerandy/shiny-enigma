// ContactModal.jsx - Interactive Contact & Connect Modal
import React, { useState } from 'react';
import styles from './ContactModal.module.scss';
import { X, Mail, Terminal, Globe, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('warner.andy@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.5 },
      colors: ['#10b981', '#f59e0b']
    });
    onShowToast('📋 Copied warner.andy@gmail.com to the clipboard!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#10b981', '#f59e0b', '#06b6d4', '#ffffff']
    });
    onShowToast(`🚀 Message sent! Thanks for connecting, ${name || 'Explorer'}. Warner will be in touch!`);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className={styles.header}>
          <h3>Join the Expedition // Get In Touch</h3>
          <p>
            Interested in hiring Andy to build your next software project, or looking for a technical lead for your team? Drop a message below or connect directly.
          </p>
        </div>

        <div className={styles.quickContacts}>
          <button className={styles.contactOption} onClick={handleCopyEmail}>
            {copied ? <Check size={18} /> : <Mail size={18} />}
            <span>{copied ? 'Copied Email!' : 'warner.andy@gmail.com'}</span>
          </button>

          <a
            href="https://www.linkedin.com/in/andrew-warner-36950746/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactOption}
          >
            <Globe size={18} />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">YOUR NAME / ORGANIZATION</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Alex Chen - Engineering Director"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            id="email"
            type="email"
            placeholder="e.g. alex@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="msg">MISSION MESSAGE</label>
          <textarea
            id="msg"
            placeholder="Tell me about your team, project, or role..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit" className={styles.submitBtn}>
            <Send size={18} />
            <span>Transmit Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}
