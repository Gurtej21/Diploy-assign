import React from 'react';
import './Part3.css';

const Part3 = () => {
  return (
    <div className="product-showcase">
      {/* Left side: Image Grid */}
      <div className="image-grid">
        <div className="product-item">
          <img src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="Product" />
          <div className="plus-icon">+</div>
        </div>
        <div className="product-item">
          <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/634012263e5f44a6d20296f7.jpg" alt="Product" />
          <div className="plus-icon">+</div>
        </div>
        <div className="product-item">
          <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/6654913277e82ae697051664.jpg" alt="Product" />
          <div className="plus-icon">+</div>
        </div>
        <div className="product-item">
          <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/65df03af7315699f5c061d14.jpg" alt="Product" />
          <div className="plus-icon">+</div>
        </div>
        <div className="product-item">
          <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/63beeb8c2d82d6771f009f61.jpg" alt="Product" />
          <div className="plus-icon">+</div>
        </div>
        <div className="product-item">
          <img src="https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/63fa10baed111a9dc10f0877.jpg" alt="Product" />
          <div className="plus-icon">+</div>
        </div>
      </div>

      {/* Right side: Text and product mockup */}
      <div className="text-section">
        <h1>Easily add your design to a wide range of products</h1>
        <p>
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a href="/products" className="products-link">All products →</a>

        {/* Mockup of the product */}
        <div className="mockup">
          <div className="mockup-header">
            <button className="edit-btn">Edit</button>
            <button className="preview-btn">Preview</button>
          </div>
          <div className="mockup-image">
            <img src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="T-shirt Mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
