// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={HeroSection} />
      </Routes>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
