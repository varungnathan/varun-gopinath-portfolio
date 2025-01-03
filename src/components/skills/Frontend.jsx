// src\components\skills\Frontend.jsx

import React, { useEffect } from 'react';

const Frontend = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'Bootstrap', level: 70 },
    { name: 'Git', level: 75 },
    { name: 'React', level: 75 },
  ];

  useEffect(() => {
    skills.forEach((skill) => {
      const progressBar = document.getElementById(`frontend-${skill.name}`);
      if (progressBar) {
        progressBar.style.width = `${skill.level}%`;
      }
    });
  }, [skills]); // Added 'skills' as a dependency

  return (
    <div className="skills content">
      <h3 className="skills__title">Frontend</h3>
      <div className="skills__group">
        {skills.map((skill) => (
          <div className="skill__data" key={skill.name}>
            <h3 className="skill__name">{skill.name}</h3>
            <div className="skill__bar">
              <div className="skill__progress" id={`frontend-${skill.name}`}></div>
            </div>
            <span className="skills__level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;