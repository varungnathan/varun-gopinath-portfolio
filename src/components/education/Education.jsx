// src\components\education\Education.jsx

import React, { useEffect, useRef, useState } from 'react';
import './education.css';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import postgradCertificate from '../../assets/8929281 - parchment 2024_page-0001.jpg'; // Import the image
import undergradCertificate from '../../assets/Degree Certificate_page-0001.jpg'; // Import the image

const Education = () => {
  const postgradRef = useRef(null);
  const undergradRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  useEffect(() => {
    const postgradElement = postgradRef.current;
    const undergradElement = undergradRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('education__item-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (postgradElement) {
      observer.observe(postgradElement);
    }
    if (undergradElement) {
      observer.observe(undergradElement);
    }

    return () => {
      if (postgradElement) {
        observer.unobserve(postgradElement);
      }
      if (undergradElement) {
        observer.unobserve(undergradElement);
      }
    };
  }, []);

  return (
    <section className="education__section" id="education">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My Academic Journey</span>

      <div className="education__timeline">
        <div className="education__bar"></div>

        <div className="education__item education__item-postgrad" ref={postgradRef}>
          <div className="education__container">
            <div className="education__circle education__circle-postgrad"></div>
            <div className="education__details">
              <div className="education__icon">
                <FaLaptopCode size={24} />
              </div>
              <h3 className="education__degree">Post Graduate Degree in Web Development</h3>
              <p className="education__institution">Conestoga College, Kitchener, Ontario, Canada</p>
              <p className="education__date">2023 - 2024</p>
              <p className="education__gpa">Grade: 3.31 GPA</p>
              <div className="education__achievements">
                <p><strong>Achievements:</strong></p>
                <ul>
                  <li>Developed a full-stack e-commerce platform using React and Node.js.</li>
                  <li>Won "Best Capstone Project" for a web-based traffic optimization tool.</li>
                  <li>Certified in Advanced JavaScript and Full-Stack Development.</li>
                </ul>
                <p><strong>Key Subjects:</strong></p>
                <ul>
                  <li>Responsive Site Design</li>
                  <li>Advanced Database Design</li>
                  <li>Full-Stack Programming</li>
                  <li>Web Traffic and Search Engine Optimization</li>
                  <li>Website Security and Quality Assurance</li>
                </ul>
              </div>
              <div className="education__cta">
                <button
                  className="education__cta-button"
                  onClick={() => openModal(postgradCertificate)}
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="education__item education__item-undergrad" ref={undergradRef}>
          <div className="education__container">
            <div className="education__circle education__circle-undergrad"></div>
            <div className="education__details">
              <div className="education__icon">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="education__degree">B.Tech in Computer Science & Engineering</h3>
              <p className="education__institution">Kerala Technological University, Kerala, India</p>
              <p className="education__date">2017 - 2021</p>
              <p className="education__gpa">Grade: 7.20 GPA</p>
              <div className="education__achievements">
                <p><strong>Achievements:</strong></p>
                <ul>
                  <li>Selected as Computing Club Leader (2018-2019).</li>
                  <li>Coordinated Inter-College Techfest (2019), hosting 500+ participants.</li>
                  <li>Won "Best Project Award" for a machine learning-based attendance system.</li>
                </ul>
                <p><strong>Key Subjects:</strong></p>
                <ul>
                  <li>Data Structures and Algorithms</li>
                  <li>Operating Systems</li>
                  <li>Database Design</li>
                  <li>Computer Networks</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
              <div className="education__cta">
                <button
                  className="education__cta-button"
                  onClick={() => openModal(undergradCertificate)}
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certificate" className="modal-image" />
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;