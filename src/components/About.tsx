import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-heading">
          <h2>About Us <span className="emoji-accent">✨</span></h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              BoberVentures is a leading venture capital fund focused on investing in 
              early-stage startups with main character energy. Like the beaver (Bober), we build 
              the future together with our portfolio companies and support them with 
              our network, expertise, and capital. <span className="text-accent">No cap.</span>
            </p>
            <h3>Our Vibe</h3>
            <p>
              We believe in long-term partnerships and invest in founders with 
              visionary ideas and the passion to execute them. Our goal is to 
              support companies that have the potential to disrupt their industries 
              and create sustainable value. <span className="text-accent">It's giving innovation.</span>
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h4>€50M+</h4>
                <p>AUM <span className="emoji-accent">💰</span></p>
              </div>
              <div className="stat-item">
                <h4>25+</h4>
                <p>Portfolio Companies <span className="emoji-accent">🚀</span></p>
              </div>
              <div className="stat-item">
                <h4>8</h4>
                <p>Successful Exits <span className="emoji-accent">💯</span></p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + '/images/IMG_7146.JPG'} alt="BoberVentures Team" />
            <div className="image-overlay">
              <span className="overlay-text">squad goals</span>
            </div>
          </div>
        </div>
        
        {/* Meme callout */}
        <div className="meme-callout">
          <p>When your portfolio companies hit unicorn status</p>
          <div className="meme-reaction">🤑</div>
        </div>
      </div>
    </section>
  );
};

export default About; 