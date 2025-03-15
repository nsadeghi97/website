import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier würde normalerweise der Code zum Senden des Formulars stehen
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Unser Team wird sich in Kürze bei Ihnen melden.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Kontakt</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Lassen Sie uns zusammenarbeiten</h3>
            <p>
              Sind Sie ein vielversprechendes Startup auf der Suche nach Kapital und strategischer Unterstützung? 
              Oder möchten Sie mehr über unsere Investitionsstrategie erfahren? 
              Kontaktieren Sie uns - wir freuen uns auf Ihre Nachricht.
            </p>
            <p className="contact-message">
              Päääätty are you in?
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>Biberstraße 42, 10115 Berlin</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <p>+49 30 123456789</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p>info@boberventures.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Unternehmen</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Absenden</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 