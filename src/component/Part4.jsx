import React from 'react';
import './Part4.css'; // External CSS file

// Component for individual feature card
const FeatureCard = ({ image, title, subtitle, description }) => {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <h3 className="feature-title">{title}</h3>
      <h4 className="feature-subtitle">{subtitle}</h4>
      <p className="feature-description">{description}</p>
    </div>
  );
};

// Main Features section component
const Part4 = () => {
  return (
    <div className="features-container">
      <FeatureCard
        image="https://printify.com/pfh/assets/legacy/custom-products.png" // Replace with your actual image URL
        title="CREATE"
        subtitle="custom products"
        description="Easily add your designs to a wide range of products using our free tools"
      />
      <FeatureCard
        image="https://printify.com/pfh/assets/legacy/your-products.png" // Replace with your actual image URL
        title="SELL"
        subtitle="on your terms"
        description="You choose the products, sale price, and where to sell"
      />
      <FeatureCard
        image="https://printify.com/pfh/assets/legacy/fullfillment.png" // Replace with your actual image URL
        title="WEHANDLE"
        subtitle="fulfillment"
        description="Once an order is placed, we automatically handle all the printing and delivery logistics"
      />
    </div>
  );
};

export default Part4;