import React from 'react';
import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.tittle}>
          Hi,I'm Jhalak
          </h1>
        <p className={styles.description}>a 2nd-year B.Tech student at MNNIT Allahabad, specializing in Electronics Engineering. I'm passionate about combining creativity with technology—currently exploring graphic design and diving into web development 

        </p>
        <a href="mailto:jhalak.20244086@mnnit.ac.in" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src= {getImageUrl("hero/heroImage.png")}alt="hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur} />
  </section>
  );

};
