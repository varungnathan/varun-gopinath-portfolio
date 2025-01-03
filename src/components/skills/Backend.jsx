// src\components\skills\Backend.jsx

import React, { useEffect } from 'react';

const Backend = () => {
  const skills = [
    { name: 'PHP', level: 75 },
    { name: 'Node Js', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'MySQL', level: 90 },
    { name: 'Firebase', level: 90 },
    { name: 'SQL', level: 90 },
  ];

  useEffect(() => {
    skills.forEach((skill) => {
      const progressBar = document.getElementById(`backend-${skill.name.replace(/\s+/g, '-')}`);
      if (progressBar) {
        progressBar.style.width = `${skill.level}%`;
      }
    });
  }, []);

  return (
    <div className="skills content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__group">
        {skills.map((skill) => (
          <div className="skill__data" key={skill.name}>
            <h3 className="skill__name">{skill.name}</h3>
            <div className="skill__bar">
              <div className="skill__progress" id={`backend-${skill.name.replace(/\s+/g, '-')}`}></div>
            </div>
            <span className="skills__level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;