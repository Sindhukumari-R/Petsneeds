import React from 'react';
import trainer from '../assets/trainerimg.png'

const Review = () => {
  return (
 <div className="review-container">
  <img src={trainer} alt="Trainer with dog" className="trainer-img" />

  <div className="content-section">
    <h2 className="section-title">
      Meet Our <span className="highlight">Best Dog</span><br />Trainers
    </h2>

    <div className="review-card">
      <p className="review-text">
        "Training my golden retriever with Dr. Jasmine was a wonderful experience. Her positive reinforcement methods
        and deep understanding of animal behavior made a huge difference. My dog is now more obedient, happy, and confident!"
      </p>

      <div className="reviewer">
        <img src={trainer} alt="Dr. Jasmine" className="profile-img" />
        <div className="reviewer-info">
          <p className="reviewer-name">Dr. Jasmine</p>
          <p className="reviewer-role">Animal Specialist</p>
        </div>
        <div className="stars">★★★★★</div>
      </div>

      <div className="controls">
        <button className="prev">&#x2F;</button>
        <button className="next">&#x25CF;</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Review;
