import React from 'react';
import Book from '../assets/Appoinmentimg.png';

export default function AbtDog() {
  return (
      <div className='abtdog-section'>
  <div className='abtdog-text'>
    <h1>Book your First Slot & Get<br />Exclusive Offer On your <br />Service</h1>
    <p className='abtdog-sub-para'>
      Experience top-notch pet care with our expert team! Book your first appointment today and enjoy an exclusive discount
      on grooming, training, or boarding services. We ensure your pet receives the best care in a safe, friendly environment. 
      Take the first step toward a happier, healthier pet!
    </p>
    <button className='book'>BOOK APPOINTMENT</button>
  </div>
  <div className='abtdog-img-div'>
    <img src={Book} className='abt-img' alt="Dog with trainer" />
  </div>
</div>

  )
}
