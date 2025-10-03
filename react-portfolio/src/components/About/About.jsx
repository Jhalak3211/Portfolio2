import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id="about"> 
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src= "/assets/about/aboutImage.png"
      alt="me sitting with laptop"
      className={styles.aboutImage}
      />
    </div>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src="/assets/about/cursorIcon.png" alt="cursor Icon" />
          <div className={styles.aboutItemsText}>
           <h3>Frontend </h3>
           <p>
              Built using React.js, Tailwind CSS, React Router, and JavaScript, with smooth navigation and modular components.
           </p>
          </div>
      </li>
       <li  className={styles.aboutItem}>
          <img src="/assets/about/serverIcon.png" alt="Server Icon"/>
           <div className={styles.aboutItemsText}>
          <h3>Backend</h3>
          <p>
             Focused purely on frontend — currently exploring backend integration for future improvements.
          </p>
          </div>
      </li>
      <li  className={styles.aboutItem}>
          <img src= "/assets/about/uiIcon.png" alt="UI Icon"/>
          <div className={styles.aboutItemsText}>
            <h3>Design</h3>
            <p>
             Designed using Figma for UI/UX planning, focusing on clean layouts and visual consistency.
            </p>
          </div>
      </li>


    </ul>
  
  </section>
    
  
}
