// src\components\projects\ProjectDetails.jsx

import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import project1IconData from '../../components/animation/working1.json';
import project2IconData from '../../components/animation/Profile.json';
import project3IconData from '../../components/animation/Hobby.json';

const ProjectDetails = () => {
  const [showMore, setShowMore] = useState(false);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useEffect(() => {
    const project1Animation = lottie.loadAnimation({
      container: project1Ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: project1IconData,
    });

    const project2Animation = lottie.loadAnimation({
      container: project2Ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: project2IconData,
    });

    const project3Animation = lottie.loadAnimation({
      container: project3Ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: project3IconData,
    });

    return () => {
      project1Animation.destroy();
      project2Animation.destroy();
      project3Animation.destroy();
    };
  }, []);

  return (
    <div className="projects__info grid">
      <div className="project__box">
        <div ref={project1Ref} className="project__icon"></div>
        <h3 className="project__title">PlanEat</h3>
        <span className="project__subtitle">A meal planning and grocery management platform for families.</span>
        {/* <p className="project__short-description">
          PlanEat is a platform designed to address family meal planning and grocery management. It integrates real-time collaboration with features like personalized recipe recommendations, Google Calendar sync, and automated grocery tracking.
        </p> */}
        <button className="button--flex project__more-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Know More'}
        </button>
        {showMore && (
          <div className="project__details">
            <p><strong>Technologies Used:</strong></p>
            <ul>
              <li>Frontend: React.js, Bootstrap</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: Firebase, MongoDB</li>
              <li>API Integration: Google Calendar API</li>
              <li>Deployment: Netlify (frontend), Render (backend)</li>
              <li>Testing: Postman, React Testing Library</li>
            </ul>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Real-time family meal planner</li>
              <li>Recipe recommendations and grocery management</li>
              <li>User authentication with Firebase</li>
              <li>Seamless integration with Google Calendar</li>
            </ul>
            <p><strong>Challenges & Solutions:</strong></p>
            <ul>
              <li>Handled CORS issues and multi-device synchronization with Firebase</li>
              <li>Addressed Google Calendar OAuth token refresh</li>
            </ul>
            <a href="https://planeat-capstone.netlify.app/" target="_blank" rel="noopener noreferrer" className="button--flex project__visit-button">
              Visit Website
            </a>
          </div>
        )}
      </div>
      <div className="project__box">
        <div ref={project2Ref} className="project__icon"></div>
        <h3 className="project__title">Project 2</h3>
        <span className="project__subtitle">Description of Project 2</span>
      </div>
      <div className="project__box">
        <div ref={project3Ref} className="project__icon"></div>
        <h3 className="project__title">Project 3</h3>
        <span className="project__subtitle">Description of Project 3</span>
      </div>
    </div>
  );
};

export default ProjectDetails;
