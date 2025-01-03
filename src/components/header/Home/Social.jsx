// src\components\header\Home\Social.jsx

import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/varungnath"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/varungnathan"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="uil uil-github"></i>
      </a>

      <a
        href="mailto:varun.g.nath.official@gmail.com"
        className="home__social-icon"
        aria-label="Email"
      >
        <i className="uil uil-envelope-alt"></i>
      </a>
    </div>
  );
};

export default Social;
