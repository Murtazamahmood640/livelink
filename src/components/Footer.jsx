import React from 'react'
import '../assets/Css/Navbar.css'
import Logo from "../assets/Images/logo.png";

const Footer = () => {
  return (
    <>
       <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-column brand-info">
          <div class="footer-logo">
            <img
              src={Logo}
              alt="eAmbulance Logo"
            />
          </div>
          <p>
            Providing reliable and professional emergency medical transport
            services 24/7. Your health and safety are our top priorities.
          </p>
          <div class="social-icons">
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div class="footer-column quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Type">eAmbulance Types</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/Contact">Contact Us</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>

        <div class="footer-column contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <i class="fas fa-phone-alt"></i> Emergency: <span>911</span>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i> Booking:
              <span>(555) 123-4567</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:info@eambulance.com">info@eambulance.com</a>
            </li>
            <li><i class="fas fa-map-marker-alt"></i> 123 Medical Center Dr</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          © 2024 eAmbulance. All rights reserved. | Emergency Medical Services
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer
