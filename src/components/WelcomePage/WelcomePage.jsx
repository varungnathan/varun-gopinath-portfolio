// src\components\WelcomePage\WelcomePage.jsx

import React, { useEffect, useState } from 'react';
import './welcomePage.css';

const WelcomePage = ({ onWelcomeComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0); // State for loading progress
  const [showWelcome, setShowWelcome] = useState(false); // State to control welcome message visibility

  useEffect(() => {
    // Simulate random loading progress
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(loadingInterval);
          return 100;
        }
        const randomIncrement = Math.floor(Math.random() * 15) + 5; // Random increment between 5% and 20%
        return Math.min(prevProgress + randomIncrement, 100); // Ensure it doesn't exceed 100%
      });
    }, 500); // Update every 500ms

    return () => clearInterval(loadingInterval);
  }, []);

  useEffect(() => {
    // When loading is complete, show welcome message and trigger fade-out
    if (loadingProgress >= 100) {
      setShowWelcome(true); // Show welcome message
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(onWelcomeComplete, 1000); // Wait for fade-out animation to complete
      }, 2000); // Delay before starting fade-out (2 seconds)

      return () => clearTimeout(timer);
    }
  }, [loadingProgress, onWelcomeComplete]);

  return (
    <div className={`welcome-page ${fadeOut ? 'fade-out' : ''}`}>
      {/* Loading Bar and Percentage Indicator */}
      {!showWelcome && (
        <div className="loading-container">
          <div className="loading-bar">
            <div
              className="loading-progress"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="loading-percentage">{loadingProgress}%</div>
        </div>
      )}

      {/* Welcome Message (shown only after loading is complete) */}
      {showWelcome && (
        <div className="welcome-message fade-in">
          <h1>Welcome!!</h1>
          {/* <p>Thank you for visiting. Let's get started.</p> */}
        </div>
      )}
    </div>
  );
};

export default WelcomePage;