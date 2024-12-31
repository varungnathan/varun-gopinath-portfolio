import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/about/About';

const App = () => {
  return (
    <>
    <Header />
    
  <main className='main'>
    <Home />
    <About />
  </main>
    </>
  )
}

export default App