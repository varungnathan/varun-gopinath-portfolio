// src/components/contact/Contact.jsx

import React from 'react';
import './contact.css';

const Contact = ({ show, onClose }) => {
  if (!show) return null;

  const handleEmailClick = () => {
    window.location.href = "mailto:varun.g.nath.official@gmail.com";
  };

  return (
    <div className="contact__modal">
      <div className="contact__modal-content">
        <span className="contact__modal-close" onClick={onClose}>&times;</span>
        <h2>Hire Me!</h2>
        <p>Let’s work together to bring your ideas to life. Whether it’s a website, web app, or collaboration, I’d love to hear from you!</p>
        <p>Email: <strong>varun.g.nath.official@gmail.com</strong></p>
        <button className="contact__modal-button" onClick={handleEmailClick}>
          Send Me an Email
        </button>
      </div>
    </div>
  );
};

export default Contact;