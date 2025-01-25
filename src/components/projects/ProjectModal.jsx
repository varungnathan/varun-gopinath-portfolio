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
          {project.title === 'PlanEat' && (
            <>
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
            </>
          )}
          {project.title === 'Automated Attendance System Based on Face Recognition & Live Video Processing' && (
            <>
              <p>
                The project automates attendance marking by leveraging face recognition and real-time video processing technologies. 
                It aims to replace manual attendance systems with a more efficient, accurate, and scalable approach.
              </p>
              <p>
                This system reduces time and effort, prevents proxy attendance, and enhances classroom monitoring. 
                It also minimizes errors and paper usage compared to traditional methods.
              </p>
              <p><strong>Output Accuracy:</strong> The system achieves an attendance accuracy of 82%, with 15% failure due to video blur and other issues, and 3% failure due to unregistered faces.</p>
              <p><strong>Methodology:</strong></p>
              <ul>
                <li><strong>Face Detection:</strong> Uses Haar Cascade Classifier and handles occluded faces with 80% accuracy.</li>
                <li><strong>Face Recognition:</strong> Utilizes PCA, Fisher LDA, and LBP for robust face recognition.</li>
                <li><strong>Attendance Marking:</strong> Processes real-time video frames to detect faces, match them against the database, and record attendance.</li>
              </ul>
              <p><strong>Technologies Used:</strong></p>
              <ul>
                <li><strong>Software:</strong> Python, C++, Java, OpenCV, MySQL, Tkinter.</li>
                <li><strong>Hardware:</strong> Minimum requirements include Intel i3 processor, 8 GB RAM, and 120 GB HDD.</li>
              </ul>
              <p><strong>System Architecture:</strong></p>
              <ul>
                <li><strong>Input Stage:</strong> Captures live video or images, detects face regions, and pre-processes detected faces.</li>
                <li><strong>Processing Stage:</strong> Converts pre-processed images to tensors, applies PCA and LDA, and matches recognized faces against the database.</li>
                <li><strong>Output Stage:</strong> Marks attendance for matched faces and updates logs in the database.</li>
              </ul>
              <p><strong>Advantages:</strong> High accuracy, stability, efficiency, and scalability.</p>
              <p><strong>Challenges and Solutions:</strong> Handles occlusion, lighting variability, and time consumption effectively.</p>
              <p><strong>Future Scopes:</strong> Integration with IoT devices, enhanced accuracy, and deployment in various domains.</p>
            </>
          )}
          {project.title === 'FarmTec' && (
            <>
              <p>
                FarmTec is a smart farming application that emphasizes the use of information and communication technology in the cyber-physical farm management cycle. It leverages new technologies such as the Internet of Things and Cloud Computing to introduce more robots and artificial intelligence in farming.
              </p>
              <p>
                The application aims to provide predictive insights in farming operations, drive real-time operational decisions, and redesign business processes for game-changing business models. It influences the entire food supply chain, enhancing productivity and efficiency.
              </p>
              <p><strong>Technologies Used:</strong></p>
              <ul>
                <li>IoT</li>
                <li>Cloud Computing</li>
                <li>Big Data</li>
                <li>GPS</li>
                <li>GIS</li>
              </ul>
            </>
          )}
          {project.title !== 'FarmTec' && (
            <p><strong>Technologies Used:</strong></p>
          )}
          <div className="project__technologies">
            {project.technologies.map((tech, index) => (
              <div key={index} className="project__technology">
                <img src={tech.icon} alt={tech.name} className="project__technology-icon" />
                {tech.name}
              </div>
            ))}
          </div>
          {project.title !== 'FarmTec' && (
            <a href={project.title === 'Automated Attendance System Based on Face Recognition & Live Video Processing' ? 'https://www.ijert.org/research/automated-attendance-system-based-on-face-recognition-live-video-processing-IJERTCONV9IS07001.pdf' : project.link} target="_blank" rel="noopener noreferrer" className="button--flex project__visit-button">
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
