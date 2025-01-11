// src/components/projects/ProjectDetails.jsx

import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import project1IconData from '../../components/animation/working1.json';
import project2IconData from '../../components/animation/Profile.json';
import project3IconData from '../../components/animation/Hobby.json';
import ProjectModal from './ProjectModal';

const ProjectDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const projects = [
    {
      title: 'PlanEat',
      subtitle: 'A meal planning and grocery management platform for families.',
      technologies: [
        { name: 'React.js', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
        { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
        { name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
        { name: 'Express.js', icon: 'https://img.icons8.com/color/48/000000/express.png' },
        { name: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png' },
        { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
        { name: 'Google Calendar API', icon: 'https://img.icons8.com/color/48/000000/google-calendar.png' },
      ],
      link: 'https://planeat-capstone.netlify.app/',
    },
    {
      title: 'Project 2',
      subtitle: 'Description of Project 2',
      technologies: [],
      link: '#',
    },
    {
      title: 'Project 3',
      subtitle: 'Description of Project 3',
      technologies: [],
      link: '#',
    },
  ];

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

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects__info grid">
      {projects.map((project, index) => (
        <div key={index} className="project__box">
          <div ref={index === 0 ? project1Ref : index === 1 ? project2Ref : project3Ref} className="project__icon"></div>
          <h3 className="project__title">{project.title}</h3>
          <span className="project__subtitle">{project.subtitle}</span>
          <button className="button--flex project__more-button" onClick={() => handleShowModal(project)}>
            Know More
          </button>
        </div>
      ))}
      {selectedProject && (
        <ProjectModal show={showModal} onClose={handleCloseModal} project={selectedProject} />
      )}
    </div>
  );
};

export default ProjectDetails;