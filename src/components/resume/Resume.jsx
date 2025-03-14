// src\components\resume\Resume.jsx

import React from "react";
import "./resume.css"; // Import the CSS file

const Resume = ({ show, onClose }) => {
  if (!show) return null; // Don't render if show is false

  return (
    <div className="resume__modal">
      <div className="resume__modal-content">
        {/* Close Button */}
        <span className="resume__modal-close" onClick={onClose}>&times;</span>

        {/* Resume Content */}
        <h2 className="resume__title">Resume</h2>
        <span className="resume__subtitle">My professional journey</span>

        <div className="resume__container">
          {/* Header Section */}
          <div className="resume__header">
            <h1 className="resume__name">VARUN GOPINATH</h1>
            <p className="resume__contact">
              226-868-3301 • varun.g.nath.official@gmail.com • Kitchener, ON, Canada
              • LinkedIn • Portfolio • GitHub
            </p>
            <h2 className="resume__role">Full Stack Developer</h2>
            <p className="resume__summary">
              Passionate Full-Stack Developer with expertise in HTML, CSS, JavaScript,
              React.js, Node.js, Express.js, MongoDB, WordPress, and SEO. Experienced
              in building responsive web applications, optimizing user experiences,
              and managing content with a strong focus on performance, accessibility,
              and scalability.
            </p>
          </div>

          {/* Professional Experience Section */}
          <div className="resume__section">
            <h3 className="resume__section-title">Professional Experience</h3>
            <div className="resume__experience">
              <h4 className="resume__experience-title">Freelance Web Developer, Canada (Remote)</h4>
              <ul className="resume__experience-list">
                <li>
                  Developed custom web applications and websites from scratch using
                  React.js, Node.js, WordPress, and other modern technologies.
                </li>
                <li>
                  Designed wireframes and interactive prototypes using tools like
                  Figma, Adobe XD, and Webflow.
                </li>
                <li>
                  Applied SEO best practices to improve site visibility, including
                  keyword optimization and on-page SEO.
                </li>
                <li>
                  Integrated WooCommerce and Shopify to design and develop
                  e-commerce websites.
                </li>
                <li>
                  Collaborated with clients to define requirements, set project
                  milestones, and ensure high-quality deliverables.
                </li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume__section">
            <h3 className="resume__section-title">Education</h3>
            <div className="resume__education">
              <h4 className="resume__education-title">Conestoga College, Kitchener, Canada</h4>
              <p className="resume__education-details">
                Post Graduate Diploma in Web Development (GPA: 3.31), Sep 2023 - Dec 2024
              </p>
              <h4 className="resume__education-title">Mangalam College of Engineering, Kottayam, India</h4>
              <p className="resume__education-details">
                Bachelor of Technology in Computer Science and Engineering (GPA: 7.21), Jun 2017 - Jul 2021
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="resume__section">
            <h3 className="resume__section-title">Projects</h3>
            <div className="resume__project">
              <h4 className="resume__project-title">PlanEat</h4>
              <ul className="resume__project-list">
                <li>
                  Developed a platform for meal planning, grocery management, and
                  personalized recipe recommendations.
                </li>
                <li>
                  Integrated Google Calendar for seamless scheduling and Firebase for
                  real-time updates.
                </li>
                <li>
                  Built using React.js, Node.js, Express.js, MongoDB, and Firebase.
                </li>
              </ul>
            </div>
            <div className="resume__project">
              <h4 className="resume__project-title">Automated Attendance System</h4>
              <ul className="resume__project-list">
                <li>
                  Developed an attendance system using face recognition and live
                  video processing.
                </li>
                <li>
                  Utilized Python, OpenCV, MySQL, Haar Cascade, PCA, and Fisher LDA.
                </li>
                <li>
                  Achieved 80% accuracy for occluded face recognition and reduced
                  computational time.
                </li>
              </ul>
            </div>
          </div>

          {/* Core Competencies Section */}
          <div className="resume__section">
            <h3 className="resume__section-title">Core Competencies</h3>
            <ul className="resume__competencies-list">
              <li>
                <strong>Backend:</strong> Node.js, Express.js, MongoDB, SQL, RESTful APIs, Firebase
              </li>
              <li>
                <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript, JSX, Bootstrap
              </li>
              <li>
                <strong>Mobile Development:</strong> Java, Kotlin, Dart, React Native
              </li>
              <li>
                <strong>SEO:</strong> On-Page SEO, Keyword Optimization, Google Analytics
              </li>
              <li>
                <strong>Deployment:</strong> Netlify, Render, Heroku, AWS, DigitalOcean
              </li>
            </ul>
          </div>

          {/* Publications Section */}
          <div className="resume__section">
            <h3 className="resume__section-title">Publications</h3>
            <div className="resume__publication">
              <h4 className="resume__publication-title">
                Automated Attendance System Based on Face Recognition & Live Video Processing
              </h4>
              <p className="resume__publication-details">
                Published in IJERT - ICCIDT, Jun 2021. Technologies: Python, OpenCV,
                Haar Cascade, Fisher LDA, PCA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;