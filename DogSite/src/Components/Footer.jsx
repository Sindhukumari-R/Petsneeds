import React from 'react';
import footerlogo from '../assets/footer-logo.png'
import appstore from '../assets/appstore.jpeg'
import playstore from '../assets/playstore.jpeg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>Help</p>
          <p>Search</p>
          <p>Terms of Service</p>
          <p>Information</p>
          <p>Privacy Policy</p>
          <p>Shipping Details</p>
        </div>

        <div className="footer-column">
          <p>Support</p>
          <p>Contact us</p>
          <p>Careers</p>
          <p>Refunds & Returns</p>
          <p>Deliveries</p>
        </div>

        <div className="footer-column">
          <p>Pet Shop</p>
          <p>About us</p>
          <p>Blog</p>
          <p>Gift Cards</p>
        </div>

        <div className="footer-column">
          <p>Information</p>
          <p>Search Terms</p>
          <p>Advanced Search</p>
          <p>Help & Faq's</p>
          <p>Store Location</p>
          <p>Orders & Returns</p>
        </div>

        <div className="footer-subscribe">
          <input type="email" placeholder="Your E-mail Here" />
          <p>Join our list and get 15% off your first purchase!</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <img src={footerlogo} alt="Logo" />
          <span>All Rights Reserved 2024</span>
        </div>
        <div className="footer-apps">
          <img src={appstore} alt="App Store" />
          <img src={playstore} alt="Google Play" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
