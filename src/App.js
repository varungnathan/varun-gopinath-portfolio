import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';

const App = () => {
  return (
    <>
    <Header />
    
  <main className='main'>
    <Home />
    <About />
    <Skills />
    <Services />
  </main>
    </>
  )
}

export default App