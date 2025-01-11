// src/components/projects/Projects.jsx

import React from 'react';
import './projects.css';
import ProjectDetails from './ProjectDetails';  // Import the ProjectDetails component

const Projects = () => {
  return (
    <section className="projects__section" id="projects">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Some of the projects I've worked on</span>

        <div className="projects__container container grid">
            <div className="projects__data">
                <ProjectDetails /> {/* Display the details of 3 projects */}
                <p className="projects__description">
                  Here are a few notable projects that I've developed, demonstrating my skills in various technologies. 
                  Each project is a testament to my ability to solve real-world problems with innovative solutions.
                </p>
            </div>
        </div>
    </section>
  );
};

export default Projects;