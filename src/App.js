// src\App.js

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Projects from './components/projects/Projects'; // Import Projects component
import Resume from './components/resume/Resume'; // Import Resume component
import Contact from './components/contact/Contact';
// import Paper from './components/paper/Paper';

const App = () => {
  useEffect(() => {
    // Add smooth scrolling only on the Home page
    if (window.location.pathname === '/') {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href'); // Get the target ID (e.g., "#about")
          const targetElement = document.querySelector(targetId); // Find the target element

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
            });
          }
        });
      });
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page Route */}
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

        {/* Resume Page Route */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;