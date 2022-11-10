import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <h5>Shop and Learn</h5>
        <Link>Store</Link>
        <Link>Mac</Link>
        <Link>iPad</Link>
        <Link>iPhone</Link>
        <Link>Watch</Link>
        <Link>AirPods</Link>
        <Link>TV & Home</Link>
        <Link>AirTag</Link>
        <Link>Accessories</Link>
        <Link>Gift Cards</Link>
      </div>
      <div className="footer-items">
        <h5>Services</h5>
        <Link>Apple Music</Link>
        <Link>Apple TV+</Link>
        <Link>Apple Fitness+</Link>
        <Link>Apple News+</Link>
        <Link>Apple Arcade</Link>
        <Link>iCloud</Link>
        <Link>Apple iCloud</Link>
        <Link>Apple One</Link>
        <Link>Apple Card</Link>
        <Link>Apple Books</Link>
        <Link>Apple Podcasts</Link>
        <Link>Apple Store</Link>
      </div>
      <div className="footer-items">
        <h5>Apple Store</h5>
        <Link>Find a Store</Link>
        <Link>Genius Bar</Link>
        <Link>Today at Apple</Link>
        <Link>Apple Camp</Link>
        <Link>Apple Store App</Link>
        <Link>Refurbished and Clearance</Link>
        <Link>Financing</Link>
        <Link>Apple Trade In</Link>
        <Link>Order Status</Link>
        <Link>Shopping Help</Link>
      </div>
      <div className="footer-items">
        <h5>Apple Values</h5>
        <Link>Accessibility</Link>
        <Link>Education</Link>
        <Link>Environment</Link>
        <Link>Inclusion and Diversity</Link>
        <Link>Privacy</Link>
        <Link>Racial Equity and Justice</Link>
        <Link>Supplier Responsibility</Link>
      </div>
      <div className="footer-items">
        <h5>About Apple</h5>
        <Link>newsroom</Link>
        <Link>Apple Leadership</Link>
        <Link>Career Opportunities</Link>
        <Link>Investors</Link>
        <Link>Ethics & Compliance</Link>
        <Link>Events</Link>
        <Link>Contact Apple</Link>
      </div>
    </div>
  );
};

export default Footer;
