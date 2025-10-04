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
           <h3>Logic & Algorithmic Foundations</h3>
           <p>
              Algorithmic Application: Proficient in applying fundamental Data Structures and Algorithms (DSA) principles to solve practical programming challenges and ensure basic system efficiency.
              Code Quality & Version Control: Commitment to writing modular, maintainable code and leveraging Git and GitHub for robust project tracking and collaborative workflows
              </p>
          </div>
      </li>
       <li  className={styles.aboutItem}>
          <img src="/assets/about/serverIcon.png" alt="Server Icon"/>
           <div className={styles.aboutItemsText}>
          <h3>Developpment</h3>
          <p>
            Engineered robust RESTful APIs with Node.js/Express.js, focusing on efficient routing, middleware, and secure user authentication (JWT/sessions).
            Built highly responsive user interfaces with React.js components and styling frameworks like Tailwind CSS.
          </p>
          </div>
      </li>
      <li  className={styles.aboutItem}>
          <img src= "/assets/about/uiIcon.png" alt="UI Icon"/>
          <div className={styles.aboutItemsText}>
            <h3>Design</h3>
            <p>
             Utilized Figma for comprehensive UI/UX planning, including wireframing and prototyping to ensure user-centric flows.

             Focused on implementing intuitive interactions, smooth animations, and clean navigation while maintaining web accessibility standards.

             Skilled at translating high-fidelity designs into pixel-perfect, component-based reality.
             </p>
          </div>
      </li>


    </ul>
  
  </section>
    
  
}
