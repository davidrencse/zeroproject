import React from 'react';
import { Link } from 'react-router-dom';
import '/src/LandingPage.css';

const Header = () => {
  return (
    <header className="header">
            <div className="logo">
                <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>Zρ</Link>
            </div>
    
            <nav className="navigation">
              <ul>
                <li className="nav-item">
                  <a href="#">Product</a>
                  <div className="dropdown-menu">
                    <div className="dropdown-column">
                      <h4>Company</h4>
                      <div className="feature-item">
                        <strong><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></strong>
                        <p>Meet the team</p>
                      </div>
                      <div className="feature-item">
                        <strong>
                            <Link to="/careers" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Careers
                            </Link>
                        </strong>
                        <p>Job opportunities at Zρ</p>
                    </div>

                    </div>
                    <div className="dropdown-column">
                      <h4>Core Features</h4>
                      <div className="feature-item">
                        <strong><Link to="/habit-tracker" style={{ color: 'inherit', textDecoration: 'none' }}> Mental Lab</Link></strong>
                        <p>AI that does more than keep accounatbility</p>
                      </div>
                      <div className="feature-item">
                        <strong>
                            <Link to="/lifeos" style={{ color: 'inherit', textDecoration: 'none' }}> Life OS </Link>
                        </strong>

                        <p>Visualization tool to achieve your goals</p>
                      </div>
                      <div className="feature-item">
                        <strong>
                            <Link to="/PIS" style={{ color: 'inherit', textDecoration: 'none' }}>  Personal Intelligence System </Link>
                            </strong>
                        <p>On-demand decision-making engine</p>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <h4>Auxiliary Features</h4>
                      <div className="feature-item">
                        <strong>Note-Taking System</strong>
                        <p>A Dedicated note-taking and visual thinking space</p>
                      </div>
                      <div className="feature-item">
                        <strong>Library</strong>
                        <p>Carefully curated, ever-expanding catalog of knowledge</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#">Resources</a>
                  <div className="dropdown-menu">
                    <div className="dropdown-column">
                      <h4>Mission</h4>
                      <div className="feature-item">
                        <strong>Who We Are</strong>
                        <p>Learn about our mission and how we aim to help</p>
                      </div>
                      <div className="feature-item">
                        <strong>Why Zρ</strong>
                        <p>Find out why our app supports you the best and accelerates your journey</p>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <h4>More</h4>
                      <div className="feature-item">
                        <strong>The Zρ Method</strong>
                        <p>Research and Development</p>
                      </div>
                      <div className="feature-item">
                        <strong>Insights</strong>
                        <p>Realtime analytics</p>
                      </div>
                      <div className="feature-item">
                        <strong>Zρ Asks</strong>
                        <p>Common Q&A</p>
                      </div>
                    </div>
                    <div className="dropdown-column">
                      <h4>Integrations</h4>
                      <div className="feature-item">
                        <strong>Mobile app</strong>
                        <p>Linear in your pocket</p>
                      </div>
                      <div className="feature-item">
                        <strong>Changelog</strong>
                        <p>See what's new</p>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li className="nav-item">
                  <a href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="#">Customers</a>
                </li>
                <li className="nav-item">
                  <a href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            
            <div className="auth-buttons">
              <button className="login-btn">Log in</button>
              <button className="signup-btn">Sign up</button>
            </div>
          </header>
  );
};

export default Header;
