// src\components\about\Info.jsx

import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-user about__icon'></i>
            <h3 className="about__title">Profile</h3>
            <span className="about__subtitle">Aspiring Developer</span>
        </div>

        <div className="about__box">
        <i class='bx bx-planet about__icon' ></i>
            <h3 className="about__title">Interests</h3>
            <span className="about__subtitle">Web Development, AI</span>
        </div>

        <div className="about__box">
        <i class='bx bx-bulb about__icon' ></i>
            <h3 className="about__title">Hobbies</h3>
            <span className="about__subtitle">Coding, Reading</span>
        </div>
    </div>
  )
}

export default Info