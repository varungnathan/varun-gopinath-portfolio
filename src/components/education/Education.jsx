// src\components\education\Education.jsx

import React from 'react';
import './education.css';

const Education = () => {
  return (
    <section className="education__section" id="education">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My Academic Journey</span>

      <div className="education__timeline">
        {/* Post Graduate Degree (Right side of the vertical line) */}
        <div className="education__item education__item-postgrad">
          <div className="education__circle right"></div>
          <div className="education__details">
            <h3 className="education__degree">Post Graduate Degree in Web Development</h3>
            <p className="education__institution">Conestoga College, Kitchener, Ontario, Canada</p>
            <p className="education__date">2023 - 2024</p>
            <p className="education__gpa">Grade: 3.31 GPA</p>
          </div>
        </div>

        {/* Vertical Bar */}
        <div className="education__bar"></div>

        {/* Undergraduate Degree (Left side of the vertical line) */}
        <div className="education__item education__item-undergrad">
          <div className="education__circle left"></div>
          <div className="education__details">
            <h3 className="education__degree">B.Tech in Computer Science & Engineering</h3>
            <p className="education__institution">Mangalam College of Engineering, APJ Abdul Kalam Technological University</p>
            <p className="education__date">2017 - 2021</p>
            <p className="education__gpa">Grade: 7.20 GPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
