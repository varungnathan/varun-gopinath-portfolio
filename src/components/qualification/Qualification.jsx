import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journery   </span>

    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button button--flex">
               <i className="uil uil-graduation-cap qualification__icon"></i>Education
            </div>

            <div className="qualification__button button--flex">
               <i className="uil uil- qualification__icon"></i> 
            </div> 
        </div>
    </div>
    </section>
  )
}

export default Qualification