// src\App.js

import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Projects from './components/projects/Projects'; // Import Projects component
import Contact from './components/contact/Contact';
// import Paper from './components/paper/Paper';

const App = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects /> {/* Add Projects section here */}
        <Contact />
        {/* <Paper /> */}
      </main>
    </>
  );
}

export default App;
