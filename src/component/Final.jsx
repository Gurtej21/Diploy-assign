import React from 'react';
import './Final.css'; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaTiktok, FaReddit } from 'react-icons/fa';

const Final = () => {
  return (
    <div className="footer-container">
      <div className="logo">
        <img src="https://yt3.ggpht.com/a/AATXAJynDNMWYgy6DvRcus-4qTgt130Tt8pdytVdZA=s900-c-k-c0xffffffff-no-rj-mo" alt="Printify Logo" className="logo-image" />
        <span>Printify</span>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="icon" />
        </a>
        <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
          <FaReddit className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Final;
