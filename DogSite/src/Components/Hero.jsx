import React from 'react';

import dogCatImage from '../assets/Heroimg.png'; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>WE ARE ALWAYS HERE FOR ALL YOUR PET’S GOOD HEALTH</h1>
        <p>
          Welcome to Pet Shop, your one-stop destination for all your pet needs!
          From premium pet food to grooming essentials, we’ve got everything to
          keep your pets happy and healthy...
        </p>
        <div className="hero-buttons">
          <button className="shop-now">SHOP NOW</button>
          <button className="call-now">CALL NOW</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={dogCatImage} alt="Pets" />
      </div>
    </section>
  );
};

export default HeroSection;
