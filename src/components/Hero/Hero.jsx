import React from 'react';
// import SplineAnimation from '../SplineAnimation'; // REMOVED
import styles from "./Hero.module.css";
// Assuming you have a path function for image assets, but using direct path for simplicity
// If your original code used an import like 'import heroImage from "..."', please restore that.

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
          <h1 className={styles.tittle}>
            Hi, I'm Jhalak
          </h1>

          <p className={styles.description}>
            A B.Tech student at MNNIT Allahabad, specializing in Electronics Engineering. I'm passionate about combining creativity with technology—currently exploring graphic design and diving into web development 
          </p>
          <a href="mailto:jhalak.20244086@mnnit.ac.in" className={styles.contactBtn}>Contact Me</a>
      </div>

      {/* RESTORED: The original static image tag */}
      <img
          src="assets/hero/heroImage.png" // RESTORED: Uses the path to your static image
          alt="Hero image of me"
          className={styles.heroImg} // RESTORED: Uses the class for styling and animation
      />


      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur} />
    </section>
  );

};