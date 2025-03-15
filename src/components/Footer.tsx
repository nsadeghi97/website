import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>BoberVentures</h3>
            <p>Investieren in die Zukunft mit Biber-Weisheit</p>
          </div>
          <div className="footer-links">
            <h4>Schnelllinks</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Über uns</a></li>
              <li><a href="#services">Investment-Fokus</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Folgen Sie uns</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BoberVentures. Alle Rechte vorbehalten.</p>
          <div className="footer-legal">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 