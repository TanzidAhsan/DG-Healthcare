import React from 'react';
import './DGePharma.css';
import { FaUser, FaCapsules, FaTruck, FaHospitalAlt, FaStethoscope } from 'react-icons/fa'; // Import icons for services
import heroImage from '../assets/epharma.png'; // Import the hero image
import pharmacyIcon from '../assets/Pharmacy.jpg';
import deliveryIcon from '../assets/Delivery Partners.png';
import consumerIcon from '../assets/Consumers.png';
import doctorIcon from '../assets/Doctor.jpg'; // Import additional actor images
import hospitalIcon from '../assets/Hospital.jpg'; 

const DGePharma = () => {
  return (
    <div className="dge-pharma">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to DG ePharma</h1>
          <p>Your trusted Healthcare Partner </p>
          <button 
            className="hero-button" 
            onClick={() => window.location.href = 'http://ec2-65-2-33-13.ap-south-1.compute.amazonaws.com/login'}
          >
            Visit The Site
          </button>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src={heroImage} alt="DG ePharma" />
        </div>
      </section>

      <section className="overview">
        <h2>DG ePharma</h2>
        <p>
          DG e-Pharma is the first concern of DIPON Group in the Healthcare Sector. DIPON Group is a leading and prestigious business house originating in Bangladesh, which came into existence in 1970 with the formation of Dipon Gas Company Ltd. The specific objective was to provide end-to-end solutions in oil and gas pipeline construction works.
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
            <h3>Consumers</h3>
          </div>
          <div className="actor-card">
            <img src={hospitalIcon} alt="Hospital" />
            <h3>Hospital</h3>
          </div>
          <div className="actor-card">
            <img src={doctorIcon} alt="Doctor" />
            <h3>Doctor</h3>
          </div>
          <div className="actor-card">
            <img src={pharmacyIcon} alt="Pharmacy" />
            <h3>Pharmacy</h3>
          </div>
          <div className="actor-card">
            <img src={deliveryIcon} alt="Delivery Partner" />
            <h3>Delivery Partner</h3>
          </div>
          
         
        </div>
      </section>
    </div>
  );
};

export default DGePharma;