// src\components\education\Education.jsx

import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './education.css';

const Education = () => {
  return (
    <div className="education">
      <h2 className="education__title">
        <FaGraduationCap className="education__icon" />
        Education
      </h2>

      <div className="education__items">
        <div className="education__item">
          <h3 className="education__degree">Post Graduate Degree in Web Development</h3>
          <p className="education__institution">Conestoga College, Kitchener, Ontario, Canada</p>
          <p className="education__details">
            UI/UX Full-stack JS (React, jQuery, Node, Full-stack .NET, Full-stack PHP, Mobile Application, Kotlin, Java, Flutter). Web security and Quality Assurance with Python.
          </p>
          <p className="education__date">2023 - 2024</p>
          <p className="education__gpa">Grade: 3.31 GPA</p>
        </div>

        <div className="education__divider"></div>

        <div className="education__item">
          <h3 className="education__degree">B.Tech in Computer Science & Engineering</h3>
          <p className="education__institution">Mangalam College of Engineering, APJ Abdul Kalam Technological University</p>
          <p className="education__date">2017 - 2021</p>
          <p className="education__gpa">Grade: 7.20 GPA</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
