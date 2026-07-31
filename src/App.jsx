// App.jsx - Root application component for Warner's Vanity Resume Site
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Employment from './components/Employment';
import AiPhilosophy from './components/AiPhilosophy';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        <Hero onShowToast={showToast} />

        <Experience onShowToast={showToast} />

        <Employment onShowToast={showToast} />

        <AiPhilosophy onShowToast={showToast} />

        <Projects onShowToast={showToast} />

        <Interests onShowToast={showToast} />
      </main>

      <Footer onShowToast={showToast} />

      <Toast message={toastMessage} />
    </div>
  );
}
