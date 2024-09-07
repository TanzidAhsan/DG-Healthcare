import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Importing Facebook and LinkedIn icons
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Footer.css'; // Ensure you have the correct path to your CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section about">
        <h3>DG Healthcare</h3>
        <p>
          DG Healthcare is a leading provider of digital healthcare services in Bangladesh. We aim to connect healthcare professionals, patients, and stakeholders through a seamless, innovative platform for enhanced care and service delivery.
        </p>
        <p>
          <strong>Headquarter:</strong><br />
          Rangs FC Square (Level 11), Plot 6/A, Road 32, Gulshan Avenue, Dhaka - 1212, Bangladesh
        </p>
        <p>
          <strong>Phone:</strong> +880 1713335282<br />
          <strong>Email:</strong> dginfotechlimited@gmail.com
        </p>
      </div>
      <div className="footer-section company">
        <h3>Company</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="D:\DG e-Medical website\dg-epharma\src\pages\Contact.js">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Policies</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Marketing</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Security</a></li>
          <li>
            {/* Use Link component for navigation to the Terms and Conditions page */}
            <Link to="/TermsAndCondition">Customer Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section social-connect">
        <h3>Social Connect</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="social-icon" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024. All Rights Reserved by DG Healthcare</p>
      </div>
    </footer>
  );
};

export default Footer;
