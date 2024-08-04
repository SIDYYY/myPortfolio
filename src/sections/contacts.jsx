import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../style/portfolio.css';

function Contact() {
  return (
    <div className="contact-form-container" id='con'>
      <form id="contact-form">
        <h1>Contact Me</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button className='submit' type="submit">Submit</button>
      </form>
      <div className="social-media-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
    </div>
  );
}

export default Contact;

