// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import DGeMedical from './pages/DGeMedical'; // Import new page
import DGePharma from './pages/DGePharma'; // Import new page
import DGeDelivery from './pages/DGeDelivery';
import TermsAndConditions from './pages/TermsAndCondition'// Import new page
import './App.css';
 

const App = () => {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dg-emedical" element={<DGeMedical />} />
        <Route path="/dg-epharma" element={<DGePharma />} />
        <Route path="/dg-edelivery" element={<DGeDelivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> 
      </Routes>
    <Footer/>
    </Router>
  );
};

export default App;
