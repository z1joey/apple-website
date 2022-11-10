import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <header>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"} />
      </div>
      <div>
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <i className="fa fa-apple" />
        </Link>
      </div>

      <nav>
        <ul>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Only on Apple</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>
      </nav>
      <Link to="/" className="nav-search">
        <i class="fa fa-search"></i>
      </Link>
      <Link to="/" className="nav-cart">
        <i className="fa fa-shopping-cart" />
      </Link>
    </header>
  );
};

export default Navbar;
