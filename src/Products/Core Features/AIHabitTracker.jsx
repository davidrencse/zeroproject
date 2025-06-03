// AIHabitTracker.jsx
import React, { useState } from 'react';
import './AIHabitTracker.css';
import HabitDetailModal from './HabitDetailModal';

const AIHabitTracker = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Purpose-built for self-growth',
      image: '/src/assets/images/z.png',
      detail: 'At the heart of Zρ is an intelligent journal that does more than just capture your thoughts—it transforms them into action. It does this by first giving you journal prompts to understand and diagnose your situation. The first step to any action is identifying that there is a problem. Otherwise, you would not even know that there was a problem to be solved in the first place.'
    },
    {
      id: 2,
      title: 'Designed to adapt fast',
      image: '/src/assets/images/goood.jpg',
      detail: 'Zρ adapts to the pace of your growth. Designed with performance in mind, our systems make it extremely simple and minimalistic to streamlined daily flows that adjust to your personal evolution. Zρ will craft a daily plan, which schedules your day through time blocks and actionable steps. It will then take more feedback and create a general plan to show you the phases of your life.  '
    },
    {
      id: 3,
      title: 'Crafted with intention',
      image: '/src/assets/images/zs.png',
      detail: 'Through writing in our AI-powered journals and automated plans, your time will be saved for doing the raw action. Because spending time documenting, scheduling, and deliberating every step of the way will only clutter your brain to what truly matters: getting you from point A to point B.'
    }
  ];

  return (
    <div className="ai-section" style={{ paddingTop: '200px' }}>

      <div className="ai-header">
        <h1>Made for modern self-development</h1>
        <p>
          Zρ is built around the principles that distinguish high-performing individuals: focus, momentum,
          and deep alignment. Our AI Habit Tracker combines accountability with intelligent suggestions
          to help you become the person you intend to be. <a href="#">Make the shift</a>
        </p>
      </div>

      <div className="ai-cards">
        {cards.map(card => (
          <div
            key={card.id}
            className="ai-card"
            onClick={() => setActiveCard(card)  }
          >
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <button className="plus-btn">+</button>
          </div>
        ))}
      </div>

      {activeCard && (
        <HabitDetailModal card={activeCard} onClose={() => setActiveCard(null)} />
      )}
    </div>
  );
};

export default AIHabitTracker;