// src\App.js

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Prodetail from './components/projects/Prodetail'; // New component
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

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
                <Education />
                <Prodetail /> {/* Replaces <Projects /> */}
                <Contact />
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