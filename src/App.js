// src\App.js

import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/service/Service';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Prodetail from './components/projects/Prodetail';
import Resume from './components/resume/Resume';
import Connect from './components/connect/Connect';
import WelcomePage from './components/WelcomePage/WelcomePage';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setTimeout(() => setShowMainContent(true), 50); // Delay helps trigger fade-in CSS
  };

  return (
    <Router>
      {showWelcome && <WelcomePage onWelcomeComplete={handleWelcomeComplete} />}

      {!showWelcome && (
        <div className={`main-content ${showMainContent ? 'fade-in' : ''}`}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <main className="main">
                  <Home />
                  <About />
                  <Skills />
                  <Service />
                  <Experience />
                  <Education />
                  <Prodetail />
                  <Connect />
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
