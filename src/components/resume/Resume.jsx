// src\components\resume\Resume.jsx

import React from "react";
import "./resume.css";
import cv from "../../assets/cv.pdf";
import { FaDownload, FaExternalLinkAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Resume = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="resume__modal">
      <div className="resume__modal-content">
        <span className="resume__modal-close" onClick={onClose}>&times;</span>

        <div className="resume__header">
          <h1 className="resume__name">VARUN GOPINATH</h1>
          <p className="resume__contact">
            <a href="tel:+12268683301" className="resume__link">
              +1 (226)-868-3301
            </a>{" "}
            •{" "}
            <a href="mailto:varun.g.nath.official@gmail.com" className="resume__link">
              varun.g.nath.official@gmail.com
            </a>{" "}
            • Toronto, ON, Canada •{" "}
            <a
              href="https://www.linkedin.com/in/varungnath/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume__link"
            >
              <FaLinkedin className="resume__icon" />
            </a>{" "}
            •{" "}
            <a
              href="http://github.com/varungnathan/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume__link"
            >
              <FaGithub className="resume__icon" />
            </a>
          </p>
          <div className="resume__role-container">
            <h2 className="resume__role">Full Stack Developer</h2>
            <a href={cv} download="Varun_Gopinath_Resume.pdf" className="resume__download-button">
              <FaDownload className="resume__download-icon" /> Download Resume
            </a>
          </div>
          <p className="resume__summary">
          Versatile developer with hands-on expertise in <strong>JavaScript, Python, SQL, React.js, Node.js, and Express.js</strong>. 
          Proficient in building scalable, responsive web applications with <strong>strong skills in both frontend and backend development</strong>. 
          <strong>Experienced with MongoDB, MS SQL, RESTful APIs, WordPress, and SEO best practices</strong>. 
          Adept at optimizing performance, ensuring accessibility, and collaborating with cross-functional teams. 
          Known for a fast learning curve, project ownership, and delivering user-centric, business-aligned solutions.
          </p>
        </div>

        <div className="resume__section">
          <h3 className="resume__section-title">Professional Experience</h3>
          <div className="resume__experience">
            <h4 className="resume__experience-title">Full Stack Developer at JIVROM, Kochi, Kerala, India</h4>
            <p className="resume__experience-duration">Aug 2021 - Jun 2023</p>
            &nbsp;
            <ul className="resume__experience-list">
            <li>Implemented RESTful APIs using Node.js and Express.js to handle business logic</li>
            <li>Designed MongoDB schemas and optimized database queries for faster data retrieval</li>
            <li>Built reusable UI components that reduced development time by 25%</li>
            <li>Integrated third-party APIs including payment gateways and Google Maps</li>
            <li>Wrote clean, maintainable code following best practices and coding standards</li>
            <li>Increased application performance by implementing lazy loading and code splitting</li>
            <li>Used Git for version control and collaborative development workflows</li>
            <li>Fixed bugs and resolved production issues within tight deadlines</li>
            </ul>
            <p className="resume__project-technologies">
              <strong>Technologies Used:</strong> React.js, Angular, JavaScript, TypeScript, Node.js, Express.js, MongoDB, MySQL, REST APIs, HTML5, CSS3, Bootstrap, Material UI, Git
           </p>
          </div>
          &nbsp;
          <div className="resume__experience">
            <h4 className="resume__experience-title">Freelance Web Developer, Canada (Remote)</h4>
            <p className="resume__experience-duration">Mar 2024 - Present</p>
            &nbsp;
            <ul className="resume__experience-list">
              <li>
                <strong>Web Design & Development:</strong> Developed custom web applications and websites from scratch
                using React.js, Node.js, WordPress, and other modern technologies, focusing on responsive, interactive,
                and high-performance user interfaces.
              </li>
              <li>
                <strong>UI/UX Wireframing & Prototyping:</strong> Designed wireframes and interactive prototypes using
                tools like Figma, Adobe XD, and Webflow, ensuring seamless user experiences and alignment with client
                goals.
              </li>
              <li>
                <strong>SEO/SEM Optimization:</strong> Applied SEO best practices to improve site visibility, including
                keyword optimization, on-page SEO, and content structure enhancement. Analyzed effectiveness using
                Google Analytics and Search Console.
              </li>
              <li>
                <strong>E-commerce Solutions:</strong> Integrated WooCommerce and Shopify to design and develop
                e-commerce websites, enhancing online shopping experiences and streamlining transactions.
              </li>
              <li>
                <strong>Marketing Automation Integration:</strong> Gained familiarity with marketing automation
                platforms such as Pardot, HubSpot, and Marketo, integrating forms, tracking pixels, and customer
                journeys into websites to optimize lead generation and marketing workflows.
              </li>
              <li>
                Collaborated with clients to define requirements, set project milestones, and ensure the final product
                exceeded expectations in terms of both functionality and design.
              </li>
              <li>
                Delivered high-quality code with an emphasis on scalability, security, and performance optimization,
                ensuring long-term sustainability of client websites.
              </li>
              <li>
                Provided post-launch support, offering technical troubleshooting, content updates, and site maintenance
                while training clients on content management best practices.
              </li>
              <li>
                Performed quality assurance by testing cross-browser compatibility, mobile responsiveness, and
                debugging to ensure an optimal user experience. Optimized site speed using techniques like lazy loading,
                minification, and CDNs.
              </li>
              <li>
                Managed project progress using tools like Trello and Asana, prioritizing tasks and meeting deadlines
                while staying updated with the latest trends and technologies for modern, efficient development.
              </li>
              <li>
                Collaborated closely with clients to understand project requirements, provide regular updates, and
                deliver tailored web solutions that align with business goals.
              </li>
            </ul>
          </div>
        </div>

        <div className="resume__section">
          <h3 className="resume__section-title">Education</h3>
          <div className="resume__education">
            <h4 className="resume__education-title">Conestoga College, Kitchener, Canada</h4>
            <p className="resume__education-details">
              Ontario College Graduate Certificate in Web Development, Sep 2023 - Dec 2024
            </p>
            &nbsp;
            <h4 className="resume__education-title">Mangalam College of Engineering, Kottayam, India</h4>
            <p className="resume__education-details">
              Bachelor of Technology in Computer Science and Engineering, Jun 2017 - Jul 2021
            </p>
          </div>
        </div>

        <div className="resume__section">
          <h3 className="resume__section-title">Projects</h3>
          <div className="resume__project">
            <div className="resume__project-header">
              <h4 className="resume__project-title">PlanEat</h4>
              <a href="https://planeat-capstone.netlify.app/" target="_blank" rel="noopener noreferrer" className="resume__project-link">
                <FaExternalLinkAlt className="resume__link-icon" />
              </a>
            </div>
            <p className="resume__project-duration">Aug 2024 - Dec 2024</p>
            &nbsp;
            <ul className="resume__project-list">
              <li>
                Developed a platform designed for meal planning, grocery management, and personalized recipe
                recommendations.
              </li>
              <li>
                Integrated Google Calendar for seamless scheduling, allowing users to plan meals and track grocery lists
                effectively.
              </li>
              <li>
                Utilized Firebase for real-time updates, enabling collaborative meal plans and grocery tracking across
                multiple devices.
              </li>
              <li>
                Built using React.js, Node.js, Express.js, MongoDB, and Firebase for a modular and scalable
                architecture, with deployment on Netlify and Render.
              </li>
              <li>
                Key features include family-wide meal scheduling, pantry inventory management, and seasonal recipe
                suggestions tailored to user preferences.
              </li>
              <li>
                Resolved CORS issues, implemented real-time synchronization, and streamlined Google Calendar
                integration to ensure smooth functionality.
              </li>
              <li>
                Significantly reduced the effort of managing household meals and groceries, improving efficiency and
                collaboration for busy families.
              </li>
            </ul>
            <p className="resume__project-technologies">
              <strong>Key Technologies:</strong> React.js, Node.js, Express.js, Firebase, MongoDB, Google Calendar API,
              Netlify, Render.
            </p>
          </div>
          &nbsp;
          <div className="resume__project">
            <h4 className="resume__project-title">
              Automated Attendance System Based on Face Recognition & Live Video Processing
            </h4>
            <p className="resume__project-duration">Apr 2020 - May 2021</p>
            &nbsp;
            <ul className="resume__project-list">
              <li>
                Developed an Automated Attendance System using face recognition technology and real-time video
                processing to streamline attendance marking, achieving 80% accuracy for occluded face recognition and
                reducing computational time.
              </li>
              <li>
                Utilized Python, OpenCV, MySQL, Haar Cascade, PCA, and Fisher LDA for implementing face detection,
                recognition, and database integration.
              </li>
              <li>
                Designed a robust training module with Fisher Faces, improving system stability and reducing error rates
                in diverse environments.
              </li>
              <li>
                Built a Tkinter-based GUI for real-time attendance management, integrating live video feeds and
                frame-by-frame processing.
              </li>
            </ul>
            <p className="resume__project-technologies">
              <strong>Key Technologies:</strong> Python, OpenCV, MySQL, Haar Cascade, PCA, Fisher LDA.
            </p>
          </div>
        </div>

        <div className="resume__section">
          <h3 className="resume__section-title">Core Competencies</h3>
          <ul className="resume__competencies-list">
            <li>
              <strong>Backend:</strong> Node.js, Express.js, MongoDB, SQL (MySQL, PostgreSQL), RESTful APIs,
              WebSockets, Firebase, Server-side authentication, API integration, .NET.
            </li>
            <li>
              <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript, TypeScript, JSX, Bootstrap, Material-UI, Responsive
              Design, RESTful API integration, AJAX, DOM manipulation, Cross-browser compatibility, jQuery.
            </li>
            <li>
              <strong>Mobile Development:</strong> Java, Kotlin, Dart, React Native.
            </li>
            <li>
              <strong>Content Management & Publishing:</strong> WordPress, Content Management Systems (CMS), Content
              Publishing, Quality Assurance, Content Auditing, Content Updates.
            </li>
            <li>
              <strong>SEO:</strong> On-Page SEO, SEO Best Practices, Keyword Optimization, Search Engine Visibility,
              Google Analytics.
            </li>
            <li>
              <strong>Web Optimization & Accessibility:</strong> Responsive Web Design, Mobile Optimization, Web
              Accessibility (WCAG).
            </li>
            <li>
              <strong>Version Control:</strong> Git, GitHub, GitLab.
            </li>
            <li>
              <strong>Deployment:</strong> Netlify, Render, Heroku, AWS (Amazon Web Services), DigitalOcean.
            </li>
          </ul>
        </div>

        <div className="resume__section">
          <h3 className="resume__section-title">Interests</h3>
          <p className="resume__interests">
            Programming & Development, Photography, Travel, Reading.
          </p>
        </div>

        <div className="resume__section">
          <h3 className="resume__section-title">Publications</h3>
          <div className="resume__publication">
            <div className="resume__publication-header">
              <h4 className="resume__publication-title">
                Automated Attendance System Based on Face Recognition & Live Video Processing
              </h4>
              <a href="https://www.ijert.org/automated-attendance-system-based-on-face-recognition-live-video-processing" target="_blank" rel="noopener noreferrer" className="resume__publication-link">
                <FaExternalLinkAlt className="resume__link-icon" />
              </a>
            </div>

            <ul className="resume__publication-list">
              <li className="resume__publication-details" style={{ fontSize: '16px' }}>
                <strong>Technologies:</strong> Python, OpenCV, Haar Cascade, Fisher Linear Discriminant Analysis (LDA), Principal Component Analysis (PCA).
              </li>
              <li className="resume__publication-description" style={{ fontSize: '16px' }}>
                Developed and published a research paper on an Automated Attendance System that utilizes face recognition and live video processing for efficient and real-time attendance tracking. The paper, published in the International Journal of Engineering Research & Technology (IJERT), demonstrated the system’s 85%+ accuracy and its real-time capabilities in detecting and marking attendance.
              </li>
              <li className="resume__publication-description" style={{ fontSize: '16px' }}>
                The paper received appreciation from the IJERT team and industry professionals for its innovative approach and practical use of face recognition in educational attendance systems.
              </li>
              <li className="resume__publication-description" style={{ fontSize: '16px' }}>
                Successfully demonstrated the project at the final presentation, earning congratulations from faculty and officials for its potential to automate and improve traditional attendance methods in educational institutions.
              </li>
            </ul>
          </div>
        </div>

        <div className="resume__download">
          <a href={cv} download="Varun_Gopinath_Resume.pdf" className="resume__download-button">
            <FaDownload className="resume__download-icon" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;