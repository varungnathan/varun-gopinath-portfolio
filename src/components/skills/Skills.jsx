// src\components\skills\Skills.jsx

import React from 'react';
import './skills.css';
import Backend from './Backend';
import Frontend from './Frontend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Tech Stack</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;