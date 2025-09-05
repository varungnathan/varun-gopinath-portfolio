// src\components\WelcomePage\WelcomePage.jsx

import React, { useEffect, useState } from 'react';
import './welcomePage.css';

const WelcomePage = ({ onWelcomeComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning! ☀️');
    } else if (currentHour < 17) {
      setGreeting('Good Afternoon! 🌤️');
    } else {
      setGreeting('Good Evening! 🌇');
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onWelcomeComplete, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onWelcomeComplete]);

  return (
    <div className={`welcome-page ${fadeOut ? 'fade-out' : ''}`}>
      {/* Welcome Message */}
      <div className="welcome-message fade-in">
        <h1>{greeting}</h1>
      </div>
    </div>
  );
};

export default WelcomePage;