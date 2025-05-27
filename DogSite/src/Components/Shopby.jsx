import React from 'react';
import shop1 from '../assets/Shop1.png';
import shop2 from '../assets/Shop2.png';
import shop3 from '../assets/Shop3.png';
import shop4 from '../assets/Shop4.png';
import shop5 from '../assets/Shop5.png';
import imgs from '../assets/oofers-blak.png';
import offerBadge from '../assets/offerimg.png';

import { motion } from 'framer-motion';

export default function Shopby() {
  return (
    <section className='shop-food'>
      <h1>
        Shop By <span className="paw">🐾</span> Category
      </h1>

      <div className='shopby-imgs'>
        <img src={shop1} alt="Shop Category 1" />
        <img src={shop2} alt="Shop Category 2" />
        <img src={shop3} alt="Shop Category 3" />
        <img src={shop4} alt="Shop Category 4" />
        <img src={shop5} alt="Shop Category 5" />
      </div>

    <div className="promo-container">
         <div className="promo-text">
           <h3>Give them best quality food</h3>
         </div>
   
         <div className="promo-images">
           <img src={imgs} alt="Product 1" />
           
         </div>
   
         <div className="promo-offer">
           <h4>Summer Sale Offer</h4>
           <p>Use Promo Code : <strong>WHITE</strong></p>
         </div>
   
         <div className="offer-badge-wrapper">
           <motion.img
             className="offer-badge"
             src={offerBadge}
             alt="25% Offer"
             animate={{ rotate: [0, 360] }}
             transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
           />
           <div className="offer-badge-text">
             <span className="main-text">Get 25%</span>
             <span className="sub-text">Offer</span>
           </div>
         </div>
       </div>
    </section>
  );
}
