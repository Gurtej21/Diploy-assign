import React from 'react';
import "./Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    
    <nav className='navbar'>
    <div className='logo'>
      <img src='https://i.pinimg.com/originals/95/e2/f3/95e2f3f9bfa4f9ac5b61fa7f4f8ef0d1.png' alt='logo'/>
    </div>
    <div className='items'>
      <ul className='nav-items'>
        <a href='#'> Catalog</a>
        <li><Dropdown title="How it works">
          <a href="#"> s1</a>
          <a href="#"> s1</a>
          <a href="#"> s1</a>
          </Dropdown>
        </li>
        <a href='#'> pricing </a>
        <a href='#'> Blog </a>
        
        {/* <a href='#'> Services</a> */}
        <li><Dropdown title="Services">
          <a href="#"> s1</a>
          <a href="#"> s1</a>
          <a href="#"> s1</a>
          </Dropdown>
        </li>

        {/* <a href='#'> use cases</a> */}
        <li><Dropdown title="Use cases">
          <a href="#"> s1</a>
          <a href="#"> s1</a>
          <a href="#"> s1</a>
          </Dropdown>
        </li>
        {/* <a href='#'> NeedHelp? </a> */}
        <li><Dropdown title="Need Help">
          <a href="#"> s1</a>
          <a href="#"> s1</a>
          <a href="#"> s1</a>
          </Dropdown>
        </li>
      </ul>
  </div>
    
<div class="button-group">
  <button class="login-btn">Log in</button>
  <button class="signup-btn">Sign up</button>
</div>
</nav>


  )
}

export default Navbar