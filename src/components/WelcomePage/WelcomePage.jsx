// src\components\WelcomePage\WelcomePage.jsx

import React, { useEffect, useState } from 'react';
import './welcomePage.css';

const WelcomePage = ({ onWelcomeComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onWelcomeComplete, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onWelcomeComplete]);

  return (
    <div className={`welcome-page ${fadeOut ? 'fade-out' : ''}`}>
      <h1>Welcome!!</h1>
      {/* <p>Thank you for visiting. Let's get started.</p> */}
    </div>
  );
};

export default WelcomePage;