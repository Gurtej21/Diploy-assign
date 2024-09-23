import React from 'react';
import './Part8.css';

const Part8 = () => {
  return (
    <div className="profit-section">
      <div className="content1">
        <h2>Make Money, Risk-Free</h2>
        <p className="subtitle">You pay for fulfillment only when you make a sale</p>
        <div className="profit-box">
          <p className="item">You sell a t-shirt <span className="price">$30</span></p>
          <p className="item">You pay for its production <span className="price">$12</span></p>
          <hr />
          <p className="profit">Your profit <span className="profit-amount">$18</span></p>
        </div>
        <button className="start-selling">Start selling</button>
        <p className="footer">100% Free to use · 900+ Products · Largest print network</p>
      </div>
      <div className="image">
        <img src="https://img.freepik.com/premium-vector/hand-with-can-watering-money-tree-financial-growth-concept-vectot-illustration_194782-1569.jpg?w=740" alt="Profit illustration" /> {/* Replace with actual image URL */}
      </div>
    </div>
  );
};

export default Part8;