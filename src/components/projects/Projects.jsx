import React, { useState } from 'react';
import './projects.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiNetlify, SiRender, SiOpencv, SiTensorflow, SiSqlite } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import ProjectDetails from './ProjectDetails';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import loginImage from '../../assets/Login.jpg';
import markedAttendanceImage from '../../assets/Marked Attendance.jpg';
import occludedFaceDetectionImage from '../../assets/Occluded Face Detection.jpg';
import outputImage from '../../assets/Output.jpg';

const Project = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const sliderImages = [
    { src: loginImage, alt: 'Login', description: 'Login Page', id: 'login-description' },
    { src: markedAttendanceImage, alt: 'Marked Attendance', description: 'Marked Attendance', id: 'attendance-description' },
    { src: occludedFaceDetectionImage, alt: 'Occluded Face Detection', description: 'Occluded Face Detection', id: 'face-detection-description' },
    { src: outputImage, alt: 'Output', description: 'Output', id: 'output-description' },
  ];  

  return (
    <div id="projects" className="project-container">
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
              PlanEat is a family meal planning platform that helps users manage their meals, grocery lists, and dietary preferences. Key features include Google Calendar integration for meal scheduling and Firebase for real-time updates.
            </p>
            <h3 className="technologies-title">Technologies Used:</h3>
            <div className="technologies-used">
              <div className="tech-item">
                <FaReact className="tech-icon" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <SiFirebase className="tech-icon" />
                <span>Firebase</span>
              </div>
              <div className="tech-item">
                <SiMongodb className="tech-icon" />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <FaNodeJs className="tech-icon" />
                <span>Node.js</span>
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
            <Carousel className="project-carousel" showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={image.alt} />
                  <p className="legend">{image.description}</p>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="project-details">
            <h2>Automated Attendance System Based on Face Recognition & Live Video Processing</h2>
            <p className="project-description">
              An automated attendance marking system based on face recognition technology with live video processing. The system captures video using a camera module, processes it in real-time to detect and recognize faces, and marks attendance accordingly.
            </p>
            <h3 className="technologies-title">Technologies Used:</h3>
            <div className="technologies-used">
              <div className="tech-item">
                <FaPython className="tech-icon" style={{ color: 'var(--title-color)' }} />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <SiOpencv className="tech-icon" style={{ color: 'var(--title-color)' }} />
                <span>OpenCV</span>
              </div>
              <div className="tech-item">
                <SiTensorflow className="tech-icon" style={{ color: 'var(--title-color)' }} />
                <span>TensorFlow</span>
              </div>
              <div className="tech-item">
                <SiSqlite className="tech-icon" style={{ color: 'var(--title-color)' }} />
                <span>SQLite</span>
              </div>
            </div>
            <button onClick={togglePopup} className="know-more-button">Know More</button>
            <ProjectDetails show={showPopup} onClose={togglePopup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
