// src\components\header\Home\Social.jsx

import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      {/* Added rel="noreferrer" to external links */}
      <a
        href="https://www.instagram.com/varun.g.nath/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/varungnath"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i class="uil uil-linkedin"></i>
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
    </div>
  );
};

export default Social;
