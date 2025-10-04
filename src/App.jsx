import React from 'react';
import { Navbar } from "./components/Navbar/Navbar"; 
import { Experience } from "./components/Experience/Experience";
import styles from "./App.module.css";
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

// 🛑 NEW: Import the Spline Component 🛑
import SplineAnimation from './components/SplineAnimation'; 

function App() {
  return (
    // The main container needs 'position: relative' for the layering context
    <div style={{ position: 'relative' }}> 
      
      {/* 1. ANIMATION LAYER (Fixed Background) */}
      {/* This layer sits behind everything (zIndex: 0) and stays put while content scrolls */}
      <div 
        className="Spline-Background" 
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}
      >
        <SplineAnimation />
      </div>

      {/* 2. CONTENT LAYER (Foreground) */}
      {/* The existing content wrapper should be here. Use the App.module.css class 
          but ensure its background is transparent or semi-transparent where needed. */}
      <div className={styles.App} style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}> 
        <Navbar />
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    
    </div>
  );
}

export default App;
