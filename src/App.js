// src\App.js

import { useState, useEffect } from 'react';
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
  const [fadeInContent, setFadeInContent] = useState(false);

  useEffect(() => {
    if (!showWelcome) {
      setTimeout(() => setFadeInContent(true), 100);
    }
  }, [showWelcome]);

  return (
    <Router>
      {showWelcome ? (
        <WelcomePage onWelcomeComplete={() => setShowWelcome(false)} />
      ) : (
        <div className={`main-content ${fadeInContent ? 'fade-in' : ''}`}>
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