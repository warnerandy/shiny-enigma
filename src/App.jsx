// App.jsx - Root application component for Warner's Vanity Resume Site
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Employment from './components/Employment';
import AiPhilosophy from './components/AiPhilosophy';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        <Hero />

        <Experience />

        <Employment />

        <AiPhilosophy />

        <Projects />

        <Interests />
      </main>

      <Footer />
    </div>
  );
}
