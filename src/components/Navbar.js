// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaPrescriptionBottle, FaTruck, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../assets/DG Healthcare.png'; // Correct import path and filename
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-content">
          <span>Phone: +880 1713335282 | Email: dginfotechlimited@gmail.com</span>
          <div className="topbar-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
      <div className="navbar-logo">
  <img src={logo} alt="DG Healthcare" className="navbar-logo-img" />
  <span className="navbar-since">
    Dipon Group
    <br />
    <span className="navbar-since-small">Since 1970</span>
  </span>
</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li className="services-dropdown">
            <span className="dropdown-button">Services</span>
            <ul className="dropdown-menu">
              <li><Link to="/dg-emedical" onClick={toggleMenu}><FaStethoscope style={{ marginRight: '8px' }} /> DG eMedical</Link></li>
              <li><Link to="/dg-epharma" onClick={toggleMenu}><FaPrescriptionBottle style={{ marginRight: '8px' }} /> DG ePharma</Link></li>
              <li><Link to="/dg-edelivery" onClick={toggleMenu}><FaTruck style={{ marginRight: '8px' }} /> DG eDelivery</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
