import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>BoberVentures</h1>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Über uns</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">Investment-Fokus</a>
          </li>
          <li className="navbar-item">
            <a href="#portfolio" className="navbar-link">Portfolio</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 