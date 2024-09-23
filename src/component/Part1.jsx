
import React from 'react';
import "./Part1.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Part1 = () => {
  return (
    <div className="container">
    <div className="content">
      <h1>Create and sell custom products</h1>
      <ul className="features">
        <li>✔ 100% Free to use</li>
        <li>✔ 900+ High-Quality Products</li>
        <li>✔ Largest global print network</li>
      </ul>
      <div className="buttons">
        <button className="start-btn">Start for free</button>
        <button className="how-btn">
            <i className="fas fa-play play-icon"></i> How it works?
          </button>
          <p className='last-line'>Trusted by over 8M sellers around the world </p>
      </div>
    </div>
    <div className="image-section">
    <video
            src="https://printify.com/pfh/assets/hero/newbies-hero-horizontal.mp4"
            autoPlay
            loop
            muted
            className="product-image"
          />
    </div>
    
  </div>
);
};
    

export default Part1;