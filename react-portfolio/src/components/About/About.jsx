import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id="about"> 
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src={getImageUrl("about/aboutImage.png")} 
      alt="me sitting with laptop"
      className={styles.aboutImage}
      />
    </div>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")}alt="cursor Icon" />
          <div className={styles.aboutItemsText}>
           <h3>Frontend Developer</h3>
           <p>
            I'm a frontend developer with experience in building responsive and optimized sites
           </p>
          </div>
      </li>
       <li  className={styles.aboutItem}>
          <img src={getImageUrl("about\serverIcon.png")}alt="Server Icon"/>
           <div className={styles.aboutItemsText}>
          <h3>Backend Developer</h3>
          <p>
            I have experience in developing fast and optimised API's
          </p>
          </div>
      </li>
      <li  className={styles.aboutItem}>
          <img src={getImageUrl("about\serverIcon.png")}alt="UI Icon"/>
          <div className={styles.aboutItemsText}>
            <h3>UI/UX designer</h3>
            <p>
            I have designed multiple landing pages and have created systems as well
            </p>
          </div>
      </li>


    </ul>
  
  </section>
    
  
}
