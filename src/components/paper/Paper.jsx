import React from 'react';
import './paper.css';

const Paper = () => {
  return (
    <section id="paper" className="paper-section">
      <div className="container">
        <h2 className="section-title">Presented Paper</h2>
        <p>
          I am pleased to share that I have presented a paper in an international journal called IJERT, as part of the ICCICDT 2k21 conference. 
          The paper focuses on an Automated Attendance System based on Face Recognition and Live Video Processing.
        </p>
        <p>
          You can read the full paper by clicking on the link below:
        </p>
        <a href="https://www.ijert.org/research/automated-attendance-system-based-on-face-recognition-live-video-processing-IJERTCONV9IS07001.pdf" target="_blank" rel="noopener noreferrer" className="paper-link">
          Automated Attendance System Based on Face Recognition and Live Video Processing
        </a>
      </div>
    </section>
  );
};

export default Paper;