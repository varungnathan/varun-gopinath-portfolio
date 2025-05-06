// src\components\header\Home\Data.jsx

import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Resume from '../../resume/Resume';

const Data = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const openResumeModal = () => {
    setShowResumeModal(true);
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
  };

  return (
    <div className="home__data">
      <h1 className="home__title">Varun Gopinath</h1>
      <h3 className="home__subtitle">
        <span>
          <Typewriter
            words={["Full Stack Web Developer", "Mobile Application Developer", "Web Designer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h3>
      <p className="home__description">
        A results-driven Full Stack Developer with expertise in frontend and backend technologies, including HTML, CSS, JavaScript, React, PHP, Node.js, Python, and SQL. Proven experience in building responsive web applications, optimizing performance, and developing scalable solutions. Skilled in mobile development with Kotlin and React Native for cross-platform projects. Passionate about creating seamless user experiences while staying ahead of industry trends to deliver innovative, high-performance applications.
      </p>
      <div className="home__buttons">
        <button
          className="button button--flex"
          onClick={openResumeModal}
          style={{ color: '#000', backgroundColor: 'transparent', border: '2px solidrgb(70, 90, 101)' }}
        >
          View Resume
        </button>
      </div>
      <Resume show={showResumeModal} onClose={closeResumeModal} />
    </div>
  );
};

export default Data;
