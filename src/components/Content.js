import React from "react";
import "./Content.css";

const Content = (props) => {
  return (
    <div className="content-container">
      <div className="content">
        <img src={props.img} alt="Background" className="content-image" />
        <div className="content-titles">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
          <div className="content-links">
            <a href="https://www.google.com/">Learn More</a>
            <a href="https://www.google.com/">Buy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
