import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally make an API request to save the email
    console.log('Newsletter signup with email:', email);
    setSubscribed(true);
    setEmail('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  // Array of meme phrases for Gen Z
  const memeTexts = [
    "no cap fr fr",
    "stonks only go up",
    "to the moon 🚀",
    "IYKYK",
    "sheesh",
    "it's giving venture",
    "main character energy",
    "vibe check passed",
    "living rent-free",
    "CEO of funding",
    "based investments",
    "this slaps",
    "not me investing 💅"
  ];

  // Array of meme emojis for Gen Z
  const memeEmojis = ["🦫", "💯", "🔥", "💸", "🚀", "✨", "💅", "🤑", "😎", "🧠", "👑", "🤌", "🥶"];

  return (
    <section id="home" className="hero">
      <div className="grid-lines"></div>
      <div className="hero-container">
        <h1>BoberVentures</h1>
        <p className="hero-tagline">Funding your vibe since <span className="highlight">2023</span> <span className="emoji-pop">🚀</span></p>
        
        <div className="meme-banner">
          <span className="meme-text">We understand the assignment</span>
        </div>
        
        <div className="hero-btns">
          <button className="btn btn-primary">Our Portfolio</button>
          <button className="btn btn-outline">Contact Us</button>
        </div>
        
        <div className="newsletter-container">
          <h3>Stay in the Loop <span className="emoji-pop">👀</span></h3>
          <p>Subscribe to our newsletter for the latest updates and investment opportunities</p>
          
          {subscribed ? (
            <div className="newsletter-success">
              <p>✓ Thanks for subscribing! You're officially based.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email address"
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
      
      {/* Meme overlay with emojis and text */}
      <div className="hero-meme-overlay">
        {memeEmojis.map((emoji, index) => (
          <div key={`emoji-${index}`} className="meme-beaver">
            {emoji}
          </div>
        ))}
        
        {memeTexts.map((text, index) => (
          <div key={`text-${index}`} className="floating-meme-text" style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 15}s`
          }}>
            {text}
          </div>
        ))}
      </div>
      
      {/* Stonks arrow */}
      <div className="stonks-arrow">
        <div className="stonks-text">STONKS</div>
      </div>
    </section>
  );
};

export default Hero; 