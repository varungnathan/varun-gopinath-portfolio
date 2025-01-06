// src\components\skills\Skills.jsx

import React, { useEffect } from 'react';
import './skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'React Js', level: 75 },
        { name: 'Bootstrap', level: 70 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node JS', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'MySQL', level: 90 },
        { name: 'SQL', level: 90 },
        { name: 'Python', level: 80 },
      ],
    },
    {
      title: 'Mobile Application Development',
      skills: [
        { name: 'Kotlin', level: 80 },
        { name: 'React Native', level: 60 },
      ],
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'AWS', level: 50 },
      ],
    },
    {
      title: 'Quality Assurance + Website Security',
      skills: [
        { name: 'Python Selenium', level: 80 },
        { name: 'Git', level: 75 },
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
                  <h4 className="skills__name">{skill.name}</h4>
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
