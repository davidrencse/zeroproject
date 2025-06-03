import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [displayText, setDisplayText] = useState({
    title: '',
    description: '',
    buttonsVisible: false
  });
  
  const fullTitle = "Life got simple, phone got dry, 'friends' got distant, work became home";
  const fullDescription = "Meet the system for modern self development. Streamline daily life, vision, and life roadmaps.";
  
  useEffect(() => {
    // Animate the title
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      if (titleIndex <= fullTitle.length) {
        setDisplayText(prev => ({
          ...prev,
          title: fullTitle.substring(0, titleIndex)
        }));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        
        // Start animating the description after title is complete
        let descIndex = 0;
        const descInterval = setInterval(() => {
          if (descIndex <= fullDescription.length) {
            setDisplayText(prev => ({
              ...prev,
              description: fullDescription.substring(0, descIndex)
            }));
            descIndex++;
          } else {
            clearInterval(descInterval);
            
            // Show buttons after text is complete
            setDisplayText(prev => ({
              ...prev,
              buttonsVisible: true
            }));
          }
        }, 20); // Speed for description
      }
    }, 30); // Speed for title
    
    return () => {
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <div className="landing-page">
      <div className="background-image-container">
        {/* Background image container */}
      </div>
     <header>
      <div>

      </div>
     </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1>{displayText.title}<span className="cursor"></span></h1>
          <p className="hero-description">
            {displayText.description}
          </p>
          <div className={`cta-buttons ${displayText.buttonsVisible ? 'visible' : ''}`}>
            <button className="primary-btn">Start from Zero</button>
            <button className="secondary-btn">
              Mission Statement <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </main>

    </div>
    
  );
}


export default LandingPage;