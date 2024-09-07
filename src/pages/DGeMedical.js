import React from 'react';
import './DGeMedical.css';
import { FaUser, FaCapsules, FaTruck } from 'react-icons/fa'; // Import icons for services
import { FaGooglePlay, FaApple } from 'react-icons/fa'; // Import icons for app stores
import iphoneImage from '../assets/App opening Images.png'; // Import the iPhone image
import pharmacyIcon from '../assets/Pharmacy.jpg';
import deliveryIcon from '../assets/Delivery Partners.png';
import consumerIcon from '../assets/Consumers.png';

const DGeMedical = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dge-medical">
      <section className="hero">
        <div className="hero-content">
          <h1>DG eMedical Services</h1>
          <p>Providing innovative solutions in the healthcare sector.</p>
          <button className="hero-button" onClick={scrollToCTA}>
            Get The App
          </button>
        </div>
        <div className="iphone-frame">
          <div className="iphone-content">
            <img className="iphone-full-image" src={iphoneImage} alt="DG eMedical" />
          </div>
        </div>
      </section>

      <section className="overview">
        <h2>DG eMedical</h2>
        <p>
          DG e-medical is the first concern of DIPON Group in the Healthcare Sector. DIPON Group is a leading and prestigious business house originating in Bangladesh, which came into existence in 1970 with the formation of Dipon Gas Company Ltd. The specific objective was to provide end-to-end solutions in oil and gas pipeline construction works.
        </p>
        <p>
          Since its inception, DIPON has grown manifold, diversifying its business activities into Engineering and Construction, Project Investment and Developments, Shipping and Logistics, as well as IT and ITES. The group has ventured outside of Bangladesh and established its presence in India, Singapore, Malaysia, UAE, Saudi Arabia, and African countries through regional and project offices.
        </p>
        <p>
          DG e-Pharma is focused on creating a seamless digital medicine marketplace, providing genuine medicine with the aim of eliminating counterfeit medicine from the country.
        </p>
      </section>

      <section className="key-actors">
        <h2>Key Actors</h2>
        <div className="actors-container">
        <div className="actor-card">
            <img src={consumerIcon} alt="Consumers" />
            <h4>Consumers</h4>
          </div>
          <div className="actor-card">
            <img src={pharmacyIcon} alt="Pharmacy" />
            <h4>Pharmacy</h4>
          </div>
        <div className="actor-card">
            <img src={deliveryIcon} alt="Delivery Partner" />
            <h4>Delivery Partner</h4>
          </div>
        </div>
      </section>

      <section id="cta-section" className="cta">
        <div className="cta-content">
          <h2>Get Started with DG eMedical</h2>
          <p>Experience a seamless digital medicine marketplace with DG eMedical. Download our app now to get started.</p>
          <div className="download-buttons">
            <a href="#" className="download-button">
              <FaGooglePlay className="store-icon" /> Google Play
            </a>
            <a href="#" className="download-button">
              <FaApple className="store-icon" /> App Store
            </a>
          </div>
        </div>
        <div className="iphone-frame-cta">
          <div className="iphone-content-cta">
            <img className="iphone-full-image-cta" src={iphoneImage} alt="DG eMedical" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DGeMedical;
