// src/components/contact/Contact.jsx

import React from 'react';
import './contact.css';

const Contact = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="contact__modal">
      <div className="contact__modal-content">
        <span className="contact__modal-close" onClick={onClose}>&times;</span>
        <h2>Contact Me</h2>
        <p>Email: varun.g.nath.official@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;