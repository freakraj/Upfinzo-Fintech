import React from 'react';
import './Section5.css';
// Import the background image
import trailsImage from '../../assets/image/section5-image.png'; // Make sure the path is correct
// my-app/src/assets/image/section5-image.png

export const Section5 = () => {
  return (
    <section className="api-hero-section">
      {/* This div holds the background image. 
        It is layered below the content using z-index.
      */}
      <div 
        className="background-trails"
        style={{ backgroundImage: `url(${trailsImage})` }}
      ></div>

      <div className="api-hero-container">
        <h1 className="api-hero-title">
          Build Faster with Our <span className="gradient-text">Powerful API’s</span>
        </h1>
        <p className="api-hero-subtitle">
          Plug into secure, developer-friendly financial API’s and launch in days, not months
        </p>
        <button className="api-hero-button">
          START BUILDING <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

// export default Section5;