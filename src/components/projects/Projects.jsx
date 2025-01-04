import React from 'react';
import './projects.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiNetlify, SiRender } from 'react-icons/si';

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
              PlanEat is a family-oriented meal planning platform designed to help users manage their meals, grocery lists, and dietary preferences with ease. It integrates with Google Calendar for meal scheduling and Firebase for real-time updates across devices. The platform allows users to create, share, and update meal plans, track pantry inventory, and get personalized recipe suggestions based on seasonal ingredients and dietary preferences. It is designed to help busy families streamline their meal planning process and ensure they have what they need when it’s time to cook.
            </p>

            <h3 className="technologies-title">Technologies Used:</h3>
            <div className="technologies-used">
              <div className="tech-item">
                <FaReact className="tech-icon" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <FaNodeJs className="tech-icon" />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <SiMongodb className="tech-icon" />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <SiFirebase className="tech-icon" />
                <span>Firebase</span>
              </div>
              <div className="tech-item">
                <SiNetlify className="tech-icon" />
                <span>Netlify</span>
              </div>
              <div className="tech-item">
                <SiRender className="tech-icon" />
                <span>Render</span>
              </div>
            </div>

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
              This project is focused on building a different type of platform aimed at helping users manage their personal tasks and activities through an intuitive user interface. The platform integrates multiple tools and technologies to provide a seamless experience for users in organizing and scheduling their tasks efficiently.
            </p>
            <h3 className="technologies-title">Technologies Used:</h3>
            <div className="technologies-used">
              {/* Add appropriate icons for technologies */}
            </div>
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
