// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Ensure the correct path to your CSS file

// Import the icons from React Icons
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing Facebook and Instagram icons

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-heading">Reach Us</h1>

        <h3 className="contact-subheading">Headquarter:</h3>
        <p>
          Rangs FC Square (Level 11), Plot 6/A, Road 32 <br />
          Gulshan Avenue, Dhaka - 1212, Bangladesh
        </p>
 

        <h3 className="contact-subheading">Phone:</h3>
        <p>+880 1713335282</p>

        <h3 className="contact-subheading">Email:</h3>
        <p>
          <a 
            href="mailto:info@dgepay.net?subject=Inquiry about DG ePharma Services&body=Hello, I would like to know more about your services." 
            className="email-link"
          >
           dginfotechlimited@gmail.com
          </a>
        </p>

        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#3b5998" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#E4405F" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.913750128913!2d90.41404317391344!3d23.786085487408137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79f5a0c210f%3A0xae042755b99091e6!2sDG%20Infotech%20Ltd.!5e0!3m2!1sen!2sbd!4v1725114754438!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DG Infotech Ltd. Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
