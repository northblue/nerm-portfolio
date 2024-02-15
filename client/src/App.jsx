import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

import { Analytics } from '@vercel/analytics/react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />

        <Analytics />
      </div>
    </>
  )
}

export default App
