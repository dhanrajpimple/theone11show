// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="button-bar">
      <div className="logo">
        <img src="/one_11_black.png" alt="Logo" />
      </div>

      {/* <div className="nav-buttons">
        <Link to="/about" className="btn">About</Link>
        <Link to="/" className="btn">Register</Link>
        <Link to="/gallery" className="btn">Gallery</Link>
      </div> */}

      <div className='nav-heading'>
         <h1>Welcome to The One11 Show</h1>
           <div className="buttton-link">
          <Link to="/gallery" className="bn">Gallery</Link>
        <a href="#register" className="bn">Register</a>
       
          <Link to="/about" className="bn">About</Link>
      </div>
      </div>

      <div className="right-space"></div>
    </div>
  );
}

export default Navbar;
