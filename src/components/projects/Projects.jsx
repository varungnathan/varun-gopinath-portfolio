import React from 'react';
import './projects.css';

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>
      <div className="project-list">
        <div className="project-item">
          <div className="project-preview">
            <iframe
              src="https://planeat-capstone.netlify.app/"
              title="PlanEat Project"
              className="project-iframe"
              scrolling="no"
            />
          </div>
          <div className="project-details">
            <h2>PlanEat</h2>
            <p className="project-description">
              PlanEat is a family meal planning platform that helps users manage their meals, grocery lists, and dietary preferences. Key features include Google Calendar integration for meal scheduling and Firebase for real-time updates. Built using React, Firebase, and MongoDB.
            </p>
            <a
              href="https://planeat-capstone.netlify.app/"
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Project
            </a>
          </div>
        </div>

        <div className="project-item">
          <div className="project-preview">
            <iframe
              src="https://your-other-website-link.com"
              title="Project 2"
              className="project-iframe"
              scrolling="no"
            />
          </div>
          <div className="project-details">
            <h2>Project 2: Another Project</h2>
            <p className="project-description">
              This project is about a different type of website where I implemented...
            </p>
            <a
              href="https://your-other-website-link.com"
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
