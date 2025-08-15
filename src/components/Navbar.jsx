import React, { useState, useEffect } from 'react';
import '../assets/Css/Navbar.css';
import Logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Set active link based on current URL path
  useEffect(() => {
    const path = window.location.pathname;
    const linkName = getLinkNameFromPath(path);
    setActiveLink(linkName);
  }, []);

  const getLinkNameFromPath = (path) => {
    if (path === '/') return 'Home';
    if (path === '/Type') return 'Type';
    if (path === '/Gallery') return 'Gallery';
    if (path === '/About') return 'About';
    if (path === '/Feedback') return 'Feedback';
    if (path === '/Contact') return 'Contact';
    return '';
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuActive(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="eAmbulance Logo" />
      </div>
      <nav className={`nav-links ${isMenuActive ? 'nav-active' : ''}`}>
        <ul>
          <li>
            <a 
              href="/" 
              className={activeLink === 'Home' ? 'active' : ''}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/Type" 
              className={activeLink === 'Type' ? 'active' : ''}
              onClick={() => handleLinkClick('Type')}
            >
              eAmbulance Types
            </a>
          </li>
          <li>
            <a 
              href="/Gallery" 
              className={activeLink === 'Gallery' ? 'active' : ''}
              onClick={() => handleLinkClick('Gallery')}
            >
              Gallery
            </a>
          </li>
          <li>
            <a 
              href="/About" 
              className={activeLink === 'About' ? 'active' : ''}
              onClick={() => handleLinkClick('About')}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="/Feedback" 
              className={activeLink === 'Feedback' ? 'active' : ''}
              onClick={() => handleLinkClick('Feedback')}
            >
              Feedback
            </a>
          </li>
          <li>
            <a 
              href="/Contact" 
              className={activeLink === 'Contact' ? 'active' : ''}
              onClick={() => handleLinkClick('Contact')}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <a href="/Emergency" className="emergency-btn b">
        <i className="fas fa-ambulance"></i> Emergency
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
