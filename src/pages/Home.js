// src/Pages/HomePage.js
import React from 'react';
import './Home.css'; // Import the CSS file
import { FaUser, FaCapsules, FaTruck,FaHospital } from 'react-icons/fa'; // Import icons for services
import { FaGooglePlay, FaApple } from 'react-icons/fa'; // Import icons for app stores
import iphoneImage from '../assets/App opening Image.png'; // Import the iPhone image
import hospitalIcon from '../assets/Hospital.jpg';
import pharmacyIcon from '../assets/Pharmacy.jpg';
import deliveryIcon from '../assets/Delivery Partners.png';
import consumerIcon from '../assets/Consumers.png';
import doctorIcon from '../assets/Doctor.jpg';
import diagnosticsIcon from '../assets/Diagnostics & Clinics.webp';
import { MdLocalPharmacy } from 'react-icons/md';
import Pharmacutical from '../assets/Phamraceutical.jpg'

const HomePage = () => {
  // Function to handle scroll to CTA section
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section'); // Get CTA section by ID
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to CTA
    }
  };

  return (
    <div className="homepage">
    {/* Hero Section */}
    <section className="hero">
      {/* Combined Brand Message with Typing Animation */}
      <div className="brand-message">
        "Your trusted digital HealthCare partner. <br />
         আপনার স্বাস্থ্য সুরক্ষার বিশ্বস্ত ডিজিটাল সঙ্গী."
      </div>

      <div className="hero-content">
        <h1>Welcome to DG HealthCare</h1>
        <p>Your trusted digital HealthCare partner.</p>
        <button className="hero-button" onClick={scrollToCTA}>Get The App Now</button>
      </div>

      {/* iPhone Screen inside Hero Section */}
      <div className="iphone-frame">
        <div className="iphone-notch"></div>
        <div className="iphone-content">
          <img src={iphoneImage} alt="iPhone App Preview" className="iphone-full-image" />
        </div>
        <div className="iphone-home-button"></div>
      </div>
    </section>


        

      {/* Our Services Section */}
      <section className="our-services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <FaHospital className="service-icon-hospital-icon" /> {/* Hospital icon for DG eMedical */}
          <h3>DG eMedical</h3>
          <p>Comprehensive online medical services for all your healthcare needs.</p>
        </div>
        <div className="service-card">
            <MdLocalPharmacy className="service-icon" /> {/* Mortar and Pestle icon for DG ePharma */}
            <h3>DG ePharma</h3>
            <p>Order genuine medicines and healthcare products online with ease.</p>
          </div>
        <div className="service-card">
          <FaTruck className="service-icon-delivery-icon" /> {/* Delivery icon for DG Delivery */}
          <h3>DG Delivery</h3>
          <p>Fast and reliable delivery services for medicines and medical products.</p>
        </div>
      </div>
    </section>

      {/* Overview Section */}
      <section className="overview">
        <h1>Introduction to DG HealthCare</h1>
        <p>
        DG HealthCare by Dipon Group is a comprehensive online healthcare platform designed to simplify and enhance the healthcare experience for users. It revolutionizes how people manage their health by offering a range of integrated services, including online doctor appointment scheduling, e-Prescription management, secure medical record storage, and diagnostic tracking from start to finish. Additionally, the platform provides on-demand medicine delivery and a B2B marketplace for pharmaceutical companies and pharmacies. By bridging the gap between local pharmacies and consumers, DG HealthCare makes healthcare more accessible, efficient, and seamless.
       </p>
      </section>

      {/* Key Actors Section */}
      <section className="key-actors">
        <h2>Key Actors</h2>
        <div className="actors-container">
        <div className="actor-card">
            <img src={consumerIcon} alt="Consumers" />
            <h4>Consumers</h4>
          </div>
        <div className="actor-card">
            <img src={hospitalIcon} alt="Hospitals" />
            <h4>Hospitals</h4>
          </div>
         
          <div className="actor-card">
            <img src={doctorIcon} alt="Doctors" />
            <h4>Doctors</h4>
          </div>
          <div className="actor-card">
            <img src={diagnosticsIcon} alt="Diagnostics & Clinics" />
            <h4>Diagnostics and Clinics</h4>
          </div>
          <div className="actor-card">
            <img src={pharmacyIcon} alt="Pharmacies" />
            <h4>Pharmacies</h4>
          </div>
          <div className="actor-card">
            <img src={Pharmacutical} alt="Delivery Partners" />
            <h4>Pharmaceutical Company</h4>
          </div>
       <div className="actor-card">
            <img src={deliveryIcon} alt="Delivery Partners" />
            <h4>Delivery Partner</h4>
          </div>
       
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta" id="cta-section">
        <h2>Join DG HealthCare Today</h2>
        {/* iPhone Frame with Image */}
        <div className="iphone-frame">
          <div className="iphone-notch"></div>
          <div className="iphone-content">
            <img src={iphoneImage} alt="iPhone App Preview" className="iphone-full-image" />
          </div>
          <div className="iphone-home-button"></div>
        </div>
        {/* Download Buttons */}
        <div className="download-buttons">
          <button className="download-button">
            <FaGooglePlay className="store-icon" /> Download from Playstore
          </button>
          <button className="download-button">
            <FaApple className="store-icon" /> Download from App Store
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
