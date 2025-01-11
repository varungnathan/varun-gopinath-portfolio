// src/components/projects/ProjectModal.jsx

import React from 'react';
import './projectModal.css';

const ProjectModal = ({ show, onClose, project }) => {
  if (!show) return null;

  return (
    <div className="project__modal">
      <div className="project__modal-content">
        <span className="project__modal-close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <p>{project.subtitle}</p>
        <div className="project__details">
          <p>
            PlanEat is a platform designed to address family meal planning and grocery management. 
            It integrates real-time collaboration with features like personalized recipe recommendations, 
            Google Calendar sync, and automated grocery tracking.
          </p>
          <p>
            The platform aims to simplify meal planning for families by offering a centralized 
            solution for managing recipes, meal schedules, and grocery lists. Users can collaborate 
            in real-time, ensuring everyone is on the same page.
          </p>
          <p><strong>Technologies Used:</strong></p>
          <div className="project__technologies">
            {project.technologies.map((tech, index) => (
              <div key={index} className="project__technology">
                <img src={tech.icon} alt={tech.name} className="project__technology-icon" />
                {tech.name}
              </div>
            ))}
          </div>
          <p><strong>Key Features:</strong></p>
          <div className="project__features">
            {project.features.map((feature, index) => (
              <div key={index} className="project__feature">{feature}</div>
            ))}
          </div>
          <p><strong>Challenges & Solutions:</strong></p>
          <div className="project__challenges">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="project__challenge">{challenge}</div>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="button--flex project__visit-button">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;