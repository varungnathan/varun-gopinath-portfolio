// src\components\header\Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './header.css';
import Contact from '../contact/Contact';
import Resume from '../resume/Resume'; // Import the Resume component

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false); // State for Resume modal

  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setShowContact(true);
  };

  const handleCloseContact = () => {
    setShowContact(false);
  };

  const handleResumeClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setShowResume(true); // Open Resume modal
  };

  const handleCloseResume = () => {
    setShowResume(false); // Close Resume modal
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">Varun Gopinath</Link> {/* Use Link for the logo */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Tech Stack
              </a>
            </li>

            <li className="nav__item">
              <a href="#education" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Education
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            {/* Resume Link */}
            <li className="nav__item">
              <a href="#resume" className="nav__link" onClick={handleResumeClick}>
                <i className="uil uil-file-alt nav__icon"></i> Resume
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={handleContactClick}>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close"></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>

      {/* Contact Modal */}
      <Contact show={showContact} onClose={handleCloseContact} />

      {/* Resume Modal */}
      <Resume show={showResume} onClose={handleCloseResume} />
    </header>
  );
};

export default Header;