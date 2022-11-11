import React from "react";
import "./HeroSection.css";

const HeroSection = (props) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={props.img} alt="Background" className="hero-image" />
        <div className="hero-titles">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
          <div className="hero-links">
            <a href="https://www.google.com/">Learn More</a>
            <a href="https://www.google.com/">Buy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
