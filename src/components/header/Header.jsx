// src/components/header/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Resume from '../resume/Resume';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowResume(true);
  };

  const handleCloseResume = () => {
    setShowResume(false);
  };

  const handleCloseMenu = () => {
    showMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">Varun Gopinath</Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-code-branch nav__icon"></i> Tech Stack
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-cog nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#experience" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Experience
              </a>
            </li>

            <li className="nav__item">
              <a href="#education" className="nav__link">
                <i className="uil uil-graduation-cap nav__icon"></i> Education
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-folder nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link" onClick={handleResumeClick}>
                <i className="uil uil-file-download nav__icon"></i> Resume
              </a>
            </li>

            <li className="nav__item">
              <a href="#connect" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Connect
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={handleCloseMenu}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>

      <Resume show={showResume} onClose={handleCloseResume} />
    </header>
  );
};

export default Header;
