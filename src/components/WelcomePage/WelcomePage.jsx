// src\components\WelcomePage\WelcomePage.jsx

import React, { useEffect, useState } from 'react';
import './welcomePage.css';

const WelcomePage = ({ onWelcomeComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show welcome message and trigger fade-out after a delay
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onWelcomeComplete, 1000); // Wait for fade-out animation to complete
    }, 2000); // Delay before starting fade-out (2 seconds)

    return () => clearTimeout(timer);
  }, [onWelcomeComplete]);

  return (
    <div className={`welcome-page ${fadeOut ? 'fade-out' : ''}`}>
      {/* Welcome Message */}
      <div className="welcome-message fade-in">
        <h1>Welcome!!</h1>
      </div>
    </div>
  );
};

export default WelcomePage;