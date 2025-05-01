import React from 'react';
import './Prodetail.css';
import PlanEatImage from '../../assets/PlanEat.png';
import { FaReact, FaNodeJs, FaFire, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiCss3, SiHtml5, SiRedux } from 'react-icons/si';

const Prodetail = () => {
  return (
    <section className="prodetail" id="projects">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">Some Of My Featured Works And Case Studies</span>

      <div className="prodetail__project">
        <div className="prodetail__image-container">
          <img 
            src={PlanEatImage} 
            alt="PlanEat App Screenshot" 
            className="prodetail__image"
          />
        </div>
        <div className="prodetail__content">
          <h2 className="prodetail__title">PlanEat</h2>
          <div className="prodetail__tags">
            <div className="prodetail__tag-box">
              <span className="prodetail__tag">Meal Planning</span>
            </div>
            <div className="prodetail__tag-box">
              <span className="prodetail__tag">Recipe Discovery</span>
            </div>
            <div className="prodetail__tag-box">
              <span className="prodetail__tag">Pantry Management</span>
            </div>
          </div>
          
          <div className="prodetail__description">
            <h3>Your Ultimate Meal Planning And Recipe Discovery Tool!</h3>
            <p>
              PlanEat is your one-stop platform for meal planning, recipe discovery, and managing your ready-to-cook meals. 
              Empowering users to plan healthy, organized, and delicious meals for themselves and their families.
            </p>

            <h4>Technologies Used:</h4>
            <div className="prodetail__tech-stack">
              <div className="tech-icon-container">
                <SiHtml5 className="tech-icon" color="#E34F26" />
                <span>HTML5</span>
              </div>
              <div className="tech-icon-container">
                <SiCss3 className="tech-icon" color="#2965f1" />
                <span>CSS3</span>
              </div>
              <div className="tech-icon-container">
                <SiJavascript className="tech-icon" color="#F7DF1E" />
                <span>JavaScript</span>
              </div>
              <div className="tech-icon-container">
                <FaReact className="tech-icon" color="#61DAFB" />
                <span>React</span>
              </div>
              <div className="tech-icon-container">
                <SiRedux className="tech-icon" color="#764ABC" />
                <span>Redux</span>
              </div>
              <div className="tech-icon-container">
                <FaNodeJs className="tech-icon" color="#68A063" />
                <span>Node.js</span>
              </div>
              <div className="tech-icon-container">
                <SiMongodb className="tech-icon" color="#47A248" />
                <span>MongoDB</span>
              </div>
              <div className="tech-icon-container">
                <FaFire className="tech-icon" color="#FFA611" />
                <span>Firebase</span>
              </div>
            </div>

            <div className="prodetail__live-link">
              <a 
                href="https://planeat-capstone.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="prodetail__link"
              >
                <FaExternalLinkAlt /> Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prodetail;