import React, { useState } from "react";
import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils"; // Assuming this is not needed for the form
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  // State to manage form submission status
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);
    
    // Replace with your actual Formspree endpoint URL
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xanpbwba";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Clear the form fields on success
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>I'd love to hear from you! Please fill out the form or use the links below.</p>
      </div>

      <div className={styles.formSection}>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            {/* _replyto is used by Formspree to know which email to reply to */}
            <input type="email" id="email" name="_replyto" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {/* Display feedback messages */}
          {status === 'success' && <p className={styles.successMessage}>Message sent successfully! I'll get back to you soon.</p>}
          {status === 'error' && <p className={styles.errorMessage}>Oops! Something went wrong. Please try again or use the links below.</p>}
        </form>
        
        {/* Existing Contact Links */}
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
      </div>
    </footer>
  );
};