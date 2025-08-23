// src\components\header\Home\Social.jsx

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import linkedinAnimationData from '../../animation/linkedin.json';
import mailAnimationData from '../../animation/Mail.json';

const Social = () => {
  const linkedinIconRef = useRef(null);
  const mailIconRef = useRef(null);

  useEffect(() => {
    const linkedinAnimationInstance = lottie.loadAnimation({
      container: linkedinIconRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: linkedinAnimationData,
    });

    const mailAnimationInstance = lottie.loadAnimation({
      container: mailIconRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: mailAnimationData,
    });

    return () => {
      linkedinAnimationInstance.destroy();
      mailAnimationInstance.destroy();
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
        href="mailto:varun.g.nath.official@gmail.com"
        className="home__social-icon"
        aria-label="Email"
      >
        <div ref={mailIconRef} style={{ width: 50, height: 50 }}></div>
      </a>
    </div>
  );
};

export default Social;