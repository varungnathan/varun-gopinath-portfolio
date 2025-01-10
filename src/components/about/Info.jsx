// src\components\about\Info.jsx

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import profileAnimationData from '../../components/animation/Profile.json';
import likeAnimationData from '../../components/animation/Like.json';
import hobbyAnimationData from '../../components/animation/Hobby.json';

const Info = () => {
  const profileIconRef = useRef(null);
  const likeIconRef = useRef(null);
  const hobbyIconRef = useRef(null);

  useEffect(() => {
    const profileAnimationInstance = lottie.loadAnimation({
      container: profileIconRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: profileAnimationData,
    });

    const likeAnimationInstance = lottie.loadAnimation({
      container: likeIconRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: likeAnimationData,
    });

    const hobbyAnimationInstance = lottie.loadAnimation({
      container: hobbyIconRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: hobbyAnimationData,
    });

    return () => {
      profileAnimationInstance.destroy();
      likeAnimationInstance.destroy();
      hobbyAnimationInstance.destroy();
    };
  }, []);

  return (
    <div className="about__info grid">
      <div className="about__box">
        <div ref={profileIconRef} className="about__icon"></div>
        <h3 className="about__title">Profile</h3>
        <span className="about__subtitle">Aspiring Developer</span>
      </div>

      <div className="about__box">
        <div ref={likeIconRef} className="about__icon"></div>
        <h3 className="about__title">Interests</h3>
        <span className="about__subtitle">Web Development, AI</span>
      </div>

      <div className="about__box">
        <div ref={hobbyIconRef} className="about__icon"></div>
        <h3 className="about__title">Hobbies</h3>
        <span className="about__subtitle">Coding, Reading</span>
      </div>
    </div>
  );
};

export default Info;