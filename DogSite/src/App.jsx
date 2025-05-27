import React, { useState, useRef } from 'react';
import './App.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import PetOffers from './Components/PetOffers';
import Shopby from './Components/Shopby';
import Foods from './Components/Foods';
import AbtDog from './Components/AbtDog';
import Services from './Components/Services';
import Review from './Components/Review';
import Footer from './Components/Footer';
import LoginModal from './Components/LoginModal';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const heroRef = useRef(null);
  const serviceRef = useRef(null);
  const shopRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (section) => {
    section?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoginSuccess = (name) => {
    setUserName(name);
    setIsAuthenticated(true);
  };

  const handleCloseModal = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {!isAuthenticated ? (
        <LoginModal onClose={handleCloseModal} onSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Nav userName={userName} onNavigate={scrollToSection} refs={{ heroRef, serviceRef , shopRef, contactRef}} />
          <div ref={heroRef}><Hero /></div>
          <PetOffers />
          <Shopby />
       <div ref={shopRef}><Foods /></div>
         <div ref={contactRef}> <AbtDog />  </div>
          <div ref={serviceRef}><Services /></div>
          <Review />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
