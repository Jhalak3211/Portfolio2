import React from 'react';
import {Navbar} from "./components/Navbar/Navbar"; // adjust path if needed


import { Experience} from "./components/Experience/Experience";
import styles from "./App.module.css";
import { Hero } from './components/Hero/Hero';
import {About} from './components/About/About'
import { Projects } from "./components/Projects/Projects";

import {Contact} from "./components/Contact/Contact";
// REMOVED: import SplineAnimation from './components/SplineAnimation'; 

function App() {
  
  return (
    // RESTORED: Original simple wrapper, relying on App.module.css for styling
    <div className={styles.App}> 
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    
    </div>
  );
  
}

export default App;

