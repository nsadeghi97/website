import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const investmentFocus = [
    {
      icon: '💻',
      title: 'SaaS & B2B',
      description: 'We invest in innovative Software-as-a-Service and B2B solutions that revolutionize business processes.',
      memePhrase: 'living rent-free in our portfolio'
    },
    {
      icon: '🌱',
      title: 'CleanTech',
      description: 'Sustainable technologies and solutions for environmental challenges are at the core of our green investment strategy.',
      memePhrase: 'mother nature said periodt'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'In an increasingly connected world, we invest in companies developing innovative security solutions.',
      memePhrase: 'hackers be crying rn'
    },
    {
      icon: '🦫',
      title: 'Bober Principle',
      description: 'Like beavers, we build sustainable business models and ecosystems together with our portfolio companies.',
      memePhrase: 'dam good investments'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-heading">
          <h2>Investment Focus <span className="emoji-vibe">✌️</span></h2>
          <div className="trending-tag">#TrendingInVC</div>
        </div>
        <div className="services-grid">
          {investmentFocus.map((focus, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{focus.icon}</div>
              <h3>{focus.title}</h3>
              <p>{focus.description}</p>
              <div className="meme-phrase">{focus.memePhrase}</div>
            </div>
          ))}
        </div>
        <div className="investment-criteria">
          <h3>Our Investment Criteria <span className="emoji-vibe">💅</span></h3>
          <div className="criteria-intro">we only fw companies that are:</div>
          <ul>
            <li>Seed to Series A funding rounds</li>
            <li>Investments between €500K and €3M</li>
            <li>Strong founding team with vision and perseverance</li>
            <li>Scalable business models with clear market potential</li>
            <li>Preferably in the DACH region</li>
          </ul>
          <div className="criteria-badge">
            <span>elite standards</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 