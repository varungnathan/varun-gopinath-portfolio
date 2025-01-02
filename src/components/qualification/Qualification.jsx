// src\components\qualification\Qualification.jsx

import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journery   </span>

    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
               <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>

            <div className="qualification__button button--flex">
               <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div> 
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <h3 className="qualification__title">Web Development </h3>
              <span className="qualification__subtitle">Conestoga College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2023 - 2024
                </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
              <h3 className="qualification__title">Bachelors Degree in Computer Science & Engineering</h3>
              <span className="qualification__subtitle">Mangalam College of Engineering</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2021
                </div>
            </div>
          </div>
        </div>   
    </div>
    </section>
  )
}

export default Qualification