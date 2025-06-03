import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './Products/Company/AboutPage';
import Header from './Components/Header'; // adjust path as needed
import Careers from './Products/Company/Careers';
import Footer from './Components/Footer';
import AIHabitTracker from './Products/Core Features/AIHabitTracker'; 
import LifeOS from './Products/Core Features/LifeOS'
import PIS from './Products/Core Features/PIS';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/habit-tracker" element={<AIHabitTracker />} />
        <Route path="/LifeOS" element={<LifeOS />} />
        <Route path="/PIS" element={<PIS />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
