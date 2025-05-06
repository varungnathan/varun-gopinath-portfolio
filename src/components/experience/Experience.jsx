// src\components\experience\Experience.jsx

import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const postgradRef = useRef(null);
  const undergradRef = useRef(null);

  useEffect(() => {
    const postgradElement = postgradRef.current;
    const undergradElement = undergradRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('experience__item-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (postgradElement) {
      observer.observe(postgradElement);
    }
    if (undergradElement) {
      observer.observe(undergradElement);
    }

    return () => {
      if (postgradElement) {
        observer.unobserve(postgradElement);
      }
      if (undergradElement) {
        observer.unobserve(undergradElement);
      }
    };
  }, []);

  return (
    <section className="experience__section" id="experience">
      <h2 className="section__title">Experience</h2>

      <div className="experience__timeline">
        <div className="experience__item experience__item-postgrad" ref={postgradRef}>
          <h3 className="experience__heading">Mar 2024 - Present</h3>
          <div className="experience__container">
            <div className="experience__circle experience__circle-postgrad right"></div>
            <div className="experience__details">
              <h3 className="experience__degree">Freelance Web Developer</h3>
              <p className="experience__institution">Canada (Remote)</p>
              &nbsp;
              <div className="experience__responsibilities">
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Delivered 10+ custom web applications for clients across industries, taking full ownership from planning to deployment.
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Worked with React.js, Node.js, Python, and SQL to build scalable solutions
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Designed and implemented full-stack applications and interactive dashboards
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Built and consumed RESTful APIs, integrated third-party services
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Created optimized database structures (MongoDB, PostgreSQL, MS SQL)
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Deployed projects using Netlify, Render, and AWS
                </p>
              </div>
              {/* <p className="experience__technologies">
                <strong>Technologies:</strong> React.js, TypeScript, Node.js, Express.js, Python, SQL, MongoDB, Redux, Git, REST APIs, AWS
              </p> */}
            </div>
          </div>
        </div>

        <div className="experience__divider"></div>

        <div className="experience__item experience__item-undergrad" ref={undergradRef}>
          <h3 className="experience__heading">August 2021- June 2023</h3>
          <div className="experience__container">
            <div className="experience__circle experience__circle-undergrad left"></div>
            <div className="experience__details">
              <h3 className="experience__degree">Full Stack Developer</h3>
              <p className="experience__institution">JIVROM Technologies, Kochi, Kerala, India</p>
              &nbsp;
              <div className="experience__responsibilities">
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Implemented RESTful APIs using Node.js and Express.js to handle business logic
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Designed MongoDB schemas and optimized database queries for faster data retrieval
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Built reusable UI components that reduced development time by 25%
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Integrated third-party APIs including payment gateways and Google Maps
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Wrote clean, maintainable code following best practices and coding standards
                </p>
                <p style={{ textAlign: 'justify', marginBottom: '0.5em', paddingLeft: '1.5em', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', top: '0.3em', fontSize: '0.8em' }}>•</span>
                  Increased application performance by implementing lazy loading and code splitting
                </p>
              </div>
              {/* <p className="experience__technologies">Technologies Used: React.js, Angular, JavaScript, TypeScript, Node.js, Express.js, MongoDB, MySQL, REST APIs, HTML5, CSS3, Bootstrap, Material UI, Git.</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;