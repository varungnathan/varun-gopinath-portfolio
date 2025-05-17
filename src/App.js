// src\App.js

import { useState } from 'react';
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

const App = () => {
  const [fadeInContent] = useState(true);

  return (
    <Router>
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
    </Router>
  );
};

export default App;
