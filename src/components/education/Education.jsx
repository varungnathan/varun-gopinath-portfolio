// src\components\education\Education.jsx

import React, { useEffect, useRef, useState } from 'react';
import './education.css';
import ConestogaCertificate from '../../assets/Degree Certificate_page-0001.jpg'; // Import Conestoga certificate
import BTechCertificate from '../../assets/8929281 - parchment 2024_page-0001.jpg'; // Import BTech certificate

const Education = () => {
  const postgradRef = useRef(null);
  const undergradRef = useRef(null);
  const [modalImage, setModalImage] = useState(null); // State to manage modal image

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

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="education__section" id="education">
      <h2 className="section__title">Education</h2>

      <div className="education__timeline">
        {/* Postgraduate Section */}
        <div className="education__item education__item-postgrad" ref={postgradRef}>
          <h3 className="education__heading">Postgraduate</h3>
          <div className="education__container">
            <div className="education__circle education__circle-postgrad right"></div>
            <div className="education__details">
              <h3 className="education__degree">Ontario College Graduate Certificate in Web Development</h3>
              <p className="education__institution">Conestoga College, Kitchener, Ontario, Canada</p>
              <p className="education__date">2023 - 2024</p>
              <p className="education__gpa">Grade: 3.31 GPA</p>
              <button
                className="education__button"
                onClick={() => openModal(ConestogaCertificate)}
              >
                View Certificate
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Divider for Mobile View */}
        <div className="education__divider"></div>

        {/* Undergraduate Section */}
        <div className="education__item education__item-undergrad" ref={undergradRef}>
          <h3 className="education__heading">Undergraduate</h3>
          <div className="education__container">
            <div className="education__circle education__circle-undergrad left"></div>
            <div className="education__details">
              <h3 className="education__degree">Bachelor of Technology in Computer Science & Engineering</h3>
              <p className="education__institution">Kerala Technological University, Kerala, India</p>
              <p className="education__date">2017 - 2021</p>
              <p className="education__gpa">Grade: 7.20 GPA</p>
              <button
                className="education__button"
                onClick={() => openModal(BTechCertificate)}
              >
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Certificate */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content">
            <img src={modalImage} alt="Certificate" className="modal__image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;