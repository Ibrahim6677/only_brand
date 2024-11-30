import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa"; // استيراد الأيقونات
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img className="footer-logo" src="/images/logo/logo white.png" alt="Logo" />
        </div>

        <div className="footer-section">
          <h4>SHOP</h4>
          <ul>
            <li><Link to="/Home">New Arrival</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/Women">Woman</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>TOP BRANDS</h4>
          <ul>
            <li>Zara</li>
            <li>North Face</li>
            <li>Calvin Klein</li>
            <li>Adidas</li>
            <li>Tommy</li>
            <li>All Brands</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>TOP CATEGORIES</h4>
          <ul>
            <li>Men's Clothing</li>
            <li>Men's Shoes</li>
            <li>Women's Clothing</li>
            <li>Women's Shoes</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li>Order Tracking</li>
            <li>Order Returns</li>
            <li>FAQs</li>
            <li>Payment Methods</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.telegram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane />
            </a>
            <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
