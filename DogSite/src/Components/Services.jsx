import React from "react";
import imgs from '../assets/Servicesimg.png'
import Partner1 from '../assets/partner1.png'
import Partner2 from '../assets/partner2.png'
import Partner3 from '../assets/partner3.png'
import Partner4 from '../assets/partner4.png'
import Groom from '../assets/Groom.png'
import PetFood from '../assets/PetFood.png'
import PetTraining from '../assets/PetTraining.png'
import Boarding from '../assets/Boarding.png'

// import { FaDog, FaCut, FaClipboardList, FaHome } from "react-icons/fa";

const Services = () => {
const services = [
  {
    img: Groom,
    title: "Pets Food",
    desc: "Nutritious and delicious pet food to keep your furry friends healthy and happy."
  },
  {
    img: PetFood,
    title: "Grooming Salon",
    desc: "Professional grooming services to keep your pets clean, stylish, and comfortable."
  },
  {
    img: PetTraining,
    title: "Pet's Training",
    desc: "Expert training programs to teach your pets good behavior and strengthen your bond."
  },
  {
    img: Boarding,
    title: "Boarding",
    desc: "Safe and comfortable boarding facilities for your pets while you're away."
  },
];

  return (
    <section className="services-section">
      <h2 className="services-title">
        What Services We Offer <span className="paw">🐾</span>
      </h2>

      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
       <div  className='offers-pet-parent'>
      
       <img src={imgs} className="service-img"/>
       </div>
       <div className="partners">
        <h1>Our Best Partners</h1>
         <div className="partners-imgs">
          <img src={Partner1}/>
          <img src={Partner2}/>
          <img src={Partner3}/>
          <img src={Partner4}/>
         </div>
       </div>
    </section>
  );
};

export default Services;
