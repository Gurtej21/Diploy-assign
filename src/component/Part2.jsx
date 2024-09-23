import React from 'react';
import "./Part2.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Part2 = () => {

    const features =[
        {
            icon: <i className='piggy'><img src='https://printify.com/pfh/assets/legacy/higher-profits.svg'/></i>,
            title: "Higher Profits",
            description: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
        },
        {
            icon: <i className="roc"> <img src='https://printify.com/pfh/assets/legacy/robust-scaling.svg'/> </i>,
            title: "Robust Scaling",
            description: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
        },
        {
            icon: <i className='t-shirt'> <img src='https://printify.com/pfh/assets/legacy/best-selection.svg'/></i>,
            title: "Best Selection",
            description: "With 900+ products and top quality brands, you can choose the best products for your business.",
        },
    ];

  return (
    <div className="features-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Part2;