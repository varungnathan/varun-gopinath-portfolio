// src\App.js

import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Project from './components/projects/Projects';

const App = () => {
  return (
    <>
      <Header />
    
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Education />
        <Project />
      </main>
    </>
  );
}

export default App;
