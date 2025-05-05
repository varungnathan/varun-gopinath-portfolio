// src\components\skills\Skills.jsx

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaPython, FaAndroid, FaCloud, FaJava, FaCode } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiMysql, SiTypescript, SiDotnet, SiAdobe, SiFigma } from 'react-icons/si';
import './skills.css'; // This imports the CSS file

const Skills = () => {
  const allSkills = [
    { name: 'HTML', icon: <FaHtml5 className="skill-icon" color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt className="skill-icon" color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs className="skill-icon" color="#DAA520" /> },
    { name: 'React Js', icon: <FaReact className="skill-icon" color="#1E90FF" /> },
    { name: 'TypeScript', icon: <SiTypescript className="skill-icon" color="#3178C6" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon" color="#7952B3" /> },
    { name: 'Node JS', icon: <FaNodeJs className="skill-icon" color="#339933" /> },
    { name: 'Python', icon: <FaPython className="skill-icon" color="#3776AB" /> },
    { name: '.NET', icon: <SiDotnet className="skill-icon" color="#512BD4" /> },
    { name: 'PHP', icon: <FaPhp className="skill-icon" color="#777BB4" /> },
    { name: 'MySQL', icon: <SiMysql className="skill-icon" color="#4479A1" /> },
    { name: 'MongoDB', icon: <SiMongodb className="skill-icon" color="#47A248" /> },
    { name: 'Java', icon: <FaJava className="skill-icon" color="#007396" /> },
    { name: 'C#', icon: <FaCode className="skill-icon" color="#68217A" /> },
    { name: 'C++', icon: <FaCode className="skill-icon" color="#00599C" /> },
    { name: 'Kotlin', icon: <FaAndroid className="skill-icon" color="#3DDC84" /> },
    { name: 'React Native', icon: <FaReact className="skill-icon" color="#1E90FF" /> },
    { name: 'Firebase', icon: <SiFirebase className="skill-icon" color="#FFCA28" /> },
    { name: 'AWS', icon: <FaCloud className="skill-icon" color="#FF9900" /> },
    { name: 'Adobe XD', icon: <SiAdobe className="skill-icon" color="#FF0000" /> },
    { name: 'Figma', icon: <SiFigma className="skill-icon" color="#F24E1E" /> },
    { name: 'Sketch', icon: <SiAdobe className="skill-icon" color="#F7B500" /> },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Tech Stack</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div className="skills__grid">
        {allSkills.map((skill, index) => (
          <div className="skill__item" key={index}>
            <div className="skill__icon-wrapper">
              {React.cloneElement(skill.icon, { className: "skill-icon" })}
            </div>
            <span className="skill__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;