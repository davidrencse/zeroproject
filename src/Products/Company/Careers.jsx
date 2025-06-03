// Careers.jsx
import React from 'react';
import './Careers.css';

const jobListings = [
  {
    team: 'Engineering',
    roles: [
      { title: 'Head of Security', location: 'North America' },
      { title: 'Staff Security Engineer', location: 'North America' },
      { title: 'Product Engineer', location: 'North America' },
      { title: 'Senior / Staff Frontend Engineer', location: 'North America' },
      { title: 'Senior / Staff Fullstack Engineer', location: 'North America' },
      { title: 'Senior / Staff Product Engineer', location: 'Remote' },
      { title: 'Senior / Staff Backend Engineer', location: 'Remote' },
    ]
  },
  {
    team: 'Magic Team',
    roles: [
      { title: 'Creative Lead (Web & Brand)', location: 'North America' },
    ]
  },
  {
    team: 'Business Operations',
    roles: [
      { title: 'Head of Marketing', location: 'North America' },
    ]
  },
  {
    team: 'Product Management',
    roles: [
      { title: 'Product Manager', location: 'Remote, North America' },
    ]
  }
];

const Careers = () => {
  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="hero-content">
          <img src="/src/assets/images/COMPANY LOGO.png" alt="Icon Blueprint" className="hero-icon" />
          <h1>Help us craft high-quality tools</h1>
          <p>
            To empower product teams to do their best work, we are building a tool that
            combines UI elegance with world-class performance. Can you help us make it better?
          </p>
          <a href="#open-roles" className="open-roles-btn">See open roles</a>
        </div>
      </section>

      <section id="open-roles" className="roles-section">
        <h2>Open roles</h2>
        {jobListings.map((group, index) => (
          <div key={index} className="job-group">
            <h3>{group.team}</h3>
            <ul className="job-list">
              {group.roles.map((job, idx) => (
                <li key={idx} className="job-item">
                  <span className="job-title">{job.title}</span>
                  <span className="job-location">{job.location}</span>
                  <a href="#" className="apply-link">Apply →</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Careers;
