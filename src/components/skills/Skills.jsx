// src\components\skills\Skills.jsx

import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaDatabase, FaPython, FaAndroid, FaCloud } from 'react-icons/fa';
import { SiFirebase, SiSelenium, SiGit } from 'react-icons/si';
import './skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 90, icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', level: 90, icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', level: 80, icon: <FaJs color="#F7DF1E" /> },
        { name: 'React Js', level: 75, icon: <FaReact color="#61DAFB" /> },
        { name: 'Bootstrap', level: 70, icon: <FaBootstrap color="#7952B3" /> },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node JS', level: 80, icon: <FaNodeJs color="#339933" /> },
        { name: 'PHP', level: 75, icon: <FaPhp color="#777BB4" /> },
        { name: 'MySQL', level: 90, icon: <FaDatabase color="#4479A1" /> },
        { name: 'SQL', level: 90, icon: <FaDatabase color="#4479A1" /> },
        { name: 'Python', level: 80, icon: <FaPython color="#3776AB" /> },
        ,
      ],
    },
    {
      title: 'Mobile Application Development',
      skills: [
        { name: 'Kotlin', level: 80, icon: <FaAndroid color="#3DDC84" /> },
        { name: 'React Native', level: 60, icon: <FaReact color="#61DAFB" /> },
      ],
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'AWS', level: 70, icon: <FaCloud color="#FF9900" /> },
        { name: 'Firebase', level: 90, icon: <SiFirebase color="#FFCA28" /> },
      ],
    },
    {
      title: 'Quality Assurance + Website Security',
      skills: [
        { name: 'Python Selenium', level: 80, icon: <SiSelenium color="#43B02A" /> },
        { name: 'Git', level: 75, icon: <SiGit color="#F05032" /> },
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
                  <h4 className="skills__name">{skill.icon} {skill.name}</h4>
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
