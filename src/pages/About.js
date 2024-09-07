// src/pages/About.js
import React from 'react';
import './About.css'; // Ensure the correct path to your CSS file

// Import images for mission, vision, and brand message sections
import MissionImage from '../assets/Mission.webp'; // Replace with actual image path
import VisionImage from '../assets/Vision.avif'; // Replace with actual image path
import BrandMessageImage from '../assets/BrandMessage.jpg'; // Replace with actual image path

// Import images for key people
import RashedImg from '../assets/Rashed.jpg'; // Replace with actual image path
import JobayerImg from '../assets/Jobayer.jpg'; // Replace with actual image path
import RifaImg from '../assets/Rifa.jpg'; // Replace with actual image path
import NaveedImg from '../assets/Naved.jpg';
// Import icons from react-icons or any other library
import { FaBullseye, FaEye, FaRegHeart } from 'react-icons/fa'; // Icons for mission, vision, brand message

const About = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <div className="about-us-section">
        <h1 className="about-us-heading">About Us</h1>
        <p className="about-us-text">
        DIPON Group, a leading and prestigious business house came into existence in 1970 with the formation of Dipon Gas Company Ltd with the specific objective of providing end-to-end solutions in oil and gas pipeline construction works. Since then, DIPON has grown manifolds, and diversified in varied fields like Engineering & Construction, Project Investment & Development, Shipping & Logistics and IT & ITES. DIPON has also ventured into the global arena and established its presence in Bangladesh, India, Singapore, Malaysia, UAE, Saudi Arabia and African Countries by opening regional or project offices.

DIPON, since its inception, has been at the forefront for the use of internationally practiced construction techniques, latest construction equipment, computer-aided techniques for design and project management. Over last 50 years, DIPON Group is known for complying with its commitments. It has completed projects for varied clients within time and budget following internationally accepted quality standards and safety practices. We, at DIPON Group, care for our commitment to our client, vendor, employees, their families and society.
         </p>
      </div>

      {/* Mission Section */}
      <div className="mission-section section">
        <div className="section-icon">
          <FaBullseye size={60} color="#FC6514" />
        </div>
        <div className="section-text">
          <h2>Mission</h2>
          <p>
          "DG Healthcare is dedicated to redefining healthcare accessibility in Bangladesh by providing a holistic, user-friendly healthcare platform that caters to every medical need. We connect communities to trusted healthcare professionals, advanced diagnostic services, andefficient medicine delivery. By leveraging cutting-edge technology we maintain exceptional standards to improve and enhance the quality of healthcare across the nation."
          </p>
        </div>
        <div className="section-image">
          <img src={MissionImage} alt="Mission Illustration" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="vision-section section">
        <div className="section-icon">
          <FaEye size={60} color="#FC6514" />
        </div>
        <div className="section-image">
          <img src={VisionImage} alt="Vision Illustration" />
        </div>
        <div className="section-text">
          <h2>Vision</h2>
          <p>
          "DG Healthcare envisions a future where every person in Bangladesh can access top-tier healthcare services, regardless of location or circumstance. Our goal is to lead the transformation of the healthcare landscape by delivering a unified platform that connects patients with all aspects of their health needs, from doctor appointment to Delivery. Through our relentless pursuit of innovation and excellence, we strive to build a healthier, more connected community."
          </p>
        </div>
      </div>

      {/* Brand Message Section 
      <div className="brand-message-section section">
        <div className="section-icon">
          <FaRegHeart size={60} color="#FC6514" />
        </div>
        <div className="section-text">
          <h2>Brand Message</h2>
          <p>
    "Your trusted digital HealthCare partner."<br />
    "আপনার স্বাস্থ্য সুরক্ষার বিশ্বস্ত ডিজিটাল সঙ্গী."
  </p>
        </div>
        <div className="section-image">
          <img src={BrandMessageImage} alt="Brand Message Illustration" />
        </div>
      </div>
      */}

      {/* Key People Section */}
      <div className="key-people-section section">
        <h2>Key People</h2>
        <div className="key-people-grid">
          <div className="person">
            <img src={RashedImg} alt="Rashed Mahmud" className="person-image" />
            <h3>Rashed Mahmud</h3>
            <p>Founder</p>
          </div>
          <div className="person">
            <img src={JobayerImg} alt="Abdullah Al Jobayar" className="person-image" />
            <h3>Abdullah Al Jobayar</h3>
            <p>Co-Founder & CEO</p>
          </div>
        <div className="person">
            <img src={NaveedImg} alt="Naved Akhtaruzzaman" className="person-image"/>
            <h3>Naved Akhtaruzzaman</h3>
            <p>Head of Business</p>
          </div>
          <div className="person">
            <img src={RifaImg} alt="Rifa Sunjidah Khan" className="person-image" />
            <h3>Rifa Sunjidah Khan</h3>
            <p>Business Analyst</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
