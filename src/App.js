import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import WelcomePage from './components/WelcomePage/WelcomePage';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
            });
          }
        });
      });
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setTimeout(() => setFadeIn(true), 100); // Slight delay for smoother transition
  };

  return (
    <Router>
      {showWelcome ? (
        <WelcomePage onWelcomeComplete={handleWelcomeComplete} />
      ) : (
        <div className={`main-content ${fadeIn ? 'fade-in' : ''}`}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <main className="main">
                  <Home />
                  <About />
                  <Skills />
                  <Education />
                  <Projects />
                  <Contact />
                </main>
              }
            />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;