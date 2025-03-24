// src\components\skills\Skills.jsx

import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaPython, FaAndroid, FaCloud, FaJava, FaCode } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiMysql, SiTypescript, SiDotnet } from 'react-icons/si';
import './skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 90, icon: <FaHtml5 className="skill-icon" color="#E34F26" /> },
        { name: 'CSS', level: 90, icon: <FaCss3Alt className="skill-icon" color="#1572B6" /> },
        { name: 'JavaScript', level: 80, icon: <FaJs className="skill-icon" color="#DAA520" /> },
        { name: 'React Js', level: 75, icon: <FaReact className="skill-icon" color="#1E90FF" /> },
        { name: 'TypeScript', level: 70, icon: <SiTypescript className="skill-icon" color="#3178C6" /> },
        { name: 'Bootstrap', level: 70, icon: <FaBootstrap className="skill-icon" color="#7952B3" /> },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node JS', level: 80, icon: <FaNodeJs className="skill-icon" color="#339933" /> },
        { name: 'Python', level: 80, icon: <FaPython className="skill-icon" color="#3776AB" /> },
        { name: '.NET', level: 85, icon: <SiDotnet className="skill-icon" color="#512BD4" /> },
        { name: 'PHP', level: 75, icon: <FaPhp className="skill-icon" color="#777BB4" /> },
        { name: 'MySQL', level: 90, icon: <SiMysql className="skill-icon" color="#4479A1" /> },
        { name: 'MongoDB', level: 85, icon: <SiMongodb className="skill-icon" color="#47A248" /> },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85, icon: <FaJava className="skill-icon" color="#007396" /> },
        { name: 'C#', level: 80, icon: <FaCode className="skill-icon" color="#68217A" /> },
        { name: 'C++', level: 75, icon: <FaCode className="skill-icon" color="#00599C" /> },
      ],
    },
    {
      title: 'Mobile Application Development',
      skills: [
        { name: 'Kotlin', level: 80, icon: <FaAndroid className="skill-icon" color="#3DDC84" /> },
        { name: 'React Native', level: 60, icon: <FaReact className="skill-icon" color="#1E90FF" /> },
      ],
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'Firebase', level: 90, icon: <SiFirebase className="skill-icon" color="#FFCA28" /> },
        { name: 'AWS', level: 70, icon: <FaCloud className="skill-icon" color="#FF9900" /> },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill__progress');
            progressBars.forEach((bar) => {
              bar.style.width = bar.getAttribute('data-level');
            });

            const typingElements = entry.target.querySelectorAll('.typing-effect');
            typingElements.forEach((element) => {
              element.classList.add('blink-caret');
              setTimeout(() => {
                element.classList.remove('blink-caret');
              }, 2000);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillSections = document.querySelectorAll('.skills__content');
    skillSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Tech Stack</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div className="skills__container container">
        {skillGroups.map((group) => (
          <div className="skills__content" key={group.title}>
            <h3 className="skills__title">{group.title}</h3>
            <div className="skills__group">
              {group.skills.map((skill) => (
                <div className="skills__data" key={skill.name}>
                  <h4 className="skills__name">
                    {skill.icon} <span className="typing-effect">{skill.name}</span>
                  </h4>
                  <div className="skill__bar-container">
                    <div className="skill__bar">
                      <div
                        className="skill__progress"
                        data-level={`${skill.level}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                    <span className="skills__level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;