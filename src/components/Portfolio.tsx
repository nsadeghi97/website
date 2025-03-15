import React, { useState } from 'react';
import '../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  const portfolioCompanies = [
    {
      name: 'BiberTech',
      logo: '🦫',
      description: 'Revolutionary AI solutions for resource management and environmental protection.',
      stage: 'Series A',
      year: 2021,
      memeTag: 'built different'
    },
    {
      name: 'EcoStream',
      logo: '🌊',
      description: 'Sustainable water management platform for businesses and municipalities.',
      stage: 'Seed',
      year: 2022,
      memeTag: 'rent free'
    },
    {
      name: 'SecureNest',
      logo: '🔒',
      description: 'Next-gen cybersecurity solutions for SMEs.',
      stage: 'Series A',
      year: 2020,
      memeTag: 'zero chill'
    },
    {
      name: 'GreenBuild',
      logo: '🏗️',
      description: 'Innovative materials and processes for sustainable construction.',
      stage: 'Seed',
      year: 2023,
      memeTag: 'slaps hard'
    },
    {
      name: 'DataDam',
      logo: '📊',
      description: 'B2B data analytics platform for real-time decision making.',
      stage: 'Series A',
      year: 2021,
      memeTag: 'big brain energy'
    },
    {
      name: 'ForestAI',
      logo: '🌲',
      description: 'AI-powered solutions for forest management and biodiversity protection.',
      stage: 'Seed',
      year: 2022,
      memeTag: 'understood the assignment'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-heading">
          <h2>Our Portfolio <span className="fire-emoji">🔥</span></h2>
          <div className="vibe-check">vibe check: passed</div>
        </div>
        <div className="portfolio-filter">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">SaaS & B2B</button>
          <button className="filter-btn">CleanTech</button>
          <button className="filter-btn">Cybersecurity</button>
        </div>
        <div className="portfolio-grid">
          {portfolioCompanies.map((company, index) => (
            <div 
              className="portfolio-card" 
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="portfolio-logo">
                {company.logo}
                {hoverIndex === index && (
                  <div className="logo-effect">
                    <span className="effect-text">stonks</span>
                  </div>
                )}
              </div>
              <div className="portfolio-info">
                <h3>{company.name}</h3>
                <div className="meme-tag">{company.memeTag}</div>
                <p>{company.description}</p>
                <div className="portfolio-meta">
                  <span className="portfolio-stage">{company.stage}</span>
                  <span className="portfolio-year">{company.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-cta">
          <h3>Got an innovative startup? <span className="emoji-pop">👀</span></h3>
          <p>We're always looking for promising founders and ideas that are straight fire.</p>
          <a href="#contact" className="btn btn-primary">Submit Pitch Deck</a>
          <div className="meme-badge">
            <span>slay</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 