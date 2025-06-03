// AboutPage.jsx
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="main-heading">Zρ is Redefining Transformation</h1>
        <div className="screenshot-placeholder"></div>
      </header>

      <section className="intro-section">
        <h2>Zρ is a Total Life Overhaul Multi-Purpose Tool</h2>
        <p>
          Modern productivity apps are all scattered. There is no consistency between apps and consolidation. Zρ
          unifies all productivity features into one, concrete, universal app that takes the best of each features and
          optimises them to accelerate self-improvement and start self-improvement journies from Zero.
        </p>
      </section>

      <section className="team-section">
        <h2>We care deeply about the quality of our work</h2>
        <p>
          Zρ was born from a love of technology, self-improvement, and user experience. We are a small, focused team distributed across the world,
          united by a shared passion for self-improvement and efficiency.
        </p>
        <div className="founders">
          <img src="src\assets\images\founder.jpg" alt="Founders" />
          <p className="caption">Zρ founder David Ren</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
