import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";





export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
         
                 
          <a href="mailto:jhalak.20244086@mnnit.ac.in"><FaEnvelope/> Email</a>
        </li>
        <li className={styles.link}>
            <a href="https://www.linkedin.com/in/jhalak-yadav-1a5118320/"><FaLinkedin /> LinkedIn</a>
          
        </li>
        <li className={styles.link}>
          
         <a href="https://github.com/Jhalak3211"><FaGithub /> GitHub</a>
        </li>
      </ul>
    </footer>
  );
};
