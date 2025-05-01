import React from 'react';
import './projectModal.css';

const ProjectModal = ({ show, onClose, project }) => {
  if (!show) return null;

  return (
    <div className="project__modal">
      <div className="project__modal-content">
        <span className="project__modal-close" onClick={onClose}>&times;</span>
        <div className="project__layout">
          <div className="project__image-container">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project__image"
            />
          </div>
          <div className="project__info">
            <h2>{project.title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="project__technologies">
              {project.technologies.map((tech, index) => (
                <div key={index} className="project__technology">
                  <img src={tech.icon} alt={tech.name} className="project__technology-icon" />
                  {tech.name}
                </div>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button--flex project__visit-button"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;