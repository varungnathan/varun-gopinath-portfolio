// src\components\header\Home\Social.jsx

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import githubAnimationData from '../../animation/Animation - 1736462575324.json';
import linkedinAnimationData from '../../animation/Animation - 1736463467992.json';

const Social = () => {
  const githubIconRef = useRef(null);
  const linkedinIconRef = useRef(null);

  useEffect(() => {
    const githubAnimationInstance = lottie.loadAnimation({
      container: githubIconRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: githubAnimationData,
    });

    const linkedinAnimationInstance = lottie.loadAnimation({
      container: linkedinIconRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: linkedinAnimationData,
    });

    return () => {
      githubAnimationInstance.destroy();
      linkedinAnimationInstance.destroy();
    };
  }, []);

  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/varungnath"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <div ref={linkedinIconRef} style={{ width: 50, height: 50 }}></div>
      </a>

      <a
        href="https://github.com/varungnath"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <div ref={githubIconRef} style={{ width: 50, height: 50 }}></div>
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
