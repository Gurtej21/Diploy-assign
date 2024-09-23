import React, { useEffect, useRef } from 'react';
import './Part5.css'; // CSS File

const platforms = [
  { name: 'Shopify', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s' }, // Replace with actual image URL
  { name: 'Wix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/2560px-Wix.com_website_logo.svg.png' },
  { name: 'Etsy', logo: 'https://static.cdnlogo.com/logos/e/35/etsy.png' },
  { name: 'Squarespace', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Squarespace_Logo.png' },
  { name: 'WooCommerce', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwtjG4CgqX-RhnJIFf8Z67XEDhgQlrs0CiA&s' },
  { name: 'API', logo: 'https://www.shutterstock.com/image-vector/api-application-interface-icon-black-260nw-2188624445.jpg' },
  { name: 'BigCommerce', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZyqmtqSYlC6DpFKfKYxy4bw_N8Itrv3wFg&s' },
//   { name: 'And More', logo: 'https://via.placeholder.com/100' },
];

const Part5 = () => {
  const containerRef = useRef(null);

  // Function to handle scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    const items = containerRef.current.querySelectorAll('.platform-card');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="store-connect-container" ref={containerRef}>
      <h2 className="section-title">Connect your store</h2>
      <p className="section-subtitle">Printify easily integrates with major e-commerce platforms and marketplaces</p>
      <div className="platforms-grid">
        {platforms.map((platform, index) => (
          <div className="platform-card" key={index}>
            <img src={platform.logo} alt={platform.name} className="platform-logo" />
            <p className="platform-name">{platform.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Part5;