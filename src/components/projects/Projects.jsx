// src/components/projects/Projects.jsx

import React from 'react';
import './projects.css';

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>
      <div className="project-list">
        <div className="project-item">
          <h2>PlanEat</h2>
          <iframe
            src="https://planeat-capstone.netlify.app/" 
            title="PlanEat Project"
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
          />
          <p className="project-description">
            PlanEat is a family meal planning platform that helps users manage their meals, grocery lists, and dietary preferences. The app integrates family-wide meal planning, real-time synchronization of grocery lists, and personalized recipe suggestions. Key features include Google Calendar integration for meal scheduling and Firebase for real-time updates. Built using React for the frontend, Firebase and MongoDB for the backend, and deployed via Netlify and Render, PlanEat offers an efficient and user-friendly solution for busy households.
          </p>
        </div>

        {/* You can add more projects here */}
        <div className="project-item">
          <h2>Project 2: Another Project</h2>
          <iframe
            src="https://your-other-website-link.com"
            title="Project 2"
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
          />
          <p className="project-description">
            This project is about a different type of website where I implemented...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
