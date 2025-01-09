// src\components\projects\ProjectDetails.jsx

import React from 'react';
import './projects.css';

const ProjectDetails = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h4>Automated Attendance System</h4>
        <p>Details about the Automated Attendance System project...</p>
      </div>
    </div>
  );
};

export default ProjectDetails;