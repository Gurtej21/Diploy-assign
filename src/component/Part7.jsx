import React from 'react';
import './Part7.css';

const testimonials = [
  {
    name: 'Robert A. Voltaire',
    role: 'Store link',
    rating: 5,
    review:
      'Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
    image: 'https://via.placeholder.com/150', // replace with actual image URL
  },
  {
    name: 'Quinten Barney',
    role: 'Etsy Merchant',
    rating: 5,
    review:
      'We chose Printify because of their offerings as well as their incredibly low prices. After several years, we\'ve come to find that their customer service is also top notch, and their platform just keeps getting better and better.',
    image: 'https://via.placeholder.com/150', // replace with actual image URL
  },
  {
    name: 'Bran',
    role: 'Store link',
    rating: 5,
    review:
      'Printify has been amazing as we grow our business. From the changes we can make for our customers to the amazing Customer Service team, it makes the whole process a breeze.',
    image: 'https://via.placeholder.com/150', // replace with actual image URL
  },
  {
    name: 'Rock',
    role: 'Store link',
    rating: 5,
    review:
      'Printify has been amazing as we grow our business. From the changes we can make for our customers to the amazing Customer Service team, it makes the whole process a breeze.',
    image: 'https://via.placeholder.com/150', // replace with actual image URL
  },
  {
    name: 'Hazel',
    role: 'Store link',
    rating: 5,
    review:
      'Printify has been amazing as we grow our business. From the changes we can make for our customers to the amazing Customer Service team, it makes the whole process a breeze.',
    image: 'https://via.placeholder.com/150', // replace with actual image URL
  },
];

const Part7 = () => {
  return (
    <div className="testimonials-section">
      <h2>Trusted by over 8M sellers around the world</h2>
      <p className="description">
        Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
      </p>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <div className="stars">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Part7;
