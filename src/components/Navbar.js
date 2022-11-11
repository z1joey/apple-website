import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav>
      {/* Menu Logo */}
      <div className="nav-icon menu-icon" onClick={handleClick}>
        <i className={click ? "fa fa-close" : "fa fa-bars"} />
      </div>
      {/* Side Menu */}
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <Link to="/store" className="nav-menu-item" onClick={closeMobileMenu}>
          Store
        </Link>
        <Link to="/mac" className="nav-menu-item" onClick={closeMobileMenu}>
          Mac
        </Link>
        <Link to="/ipad" className="nav-menu-item" onClick={closeMobileMenu}>
          iPad
        </Link>
        <Link to="/iphone" className="nav-menu-item" onClick={closeMobileMenu}>
          iPhone
        </Link>
        <Link to="/watch" className="nav-menu-item" onClick={closeMobileMenu}>
          Watch
        </Link>
        <Link to="/airpods" className="nav-menu-item" onClick={closeMobileMenu}>
          AirPods
        </Link>
        <Link to="/tv&home" className="nav-menu-item" onClick={closeMobileMenu}>
          TV & Home
        </Link>
        <Link
          to="/onlyonapple"
          className="nav-menu-item"
          onClick={closeMobileMenu}
        >
          Only on Apple
        </Link>
        <Link
          to="/accessories"
          className="nav-menu-item"
          onClick={closeMobileMenu}
        >
          Accessories
        </Link>
        <Link to="/support" className="nav-menu-item" onClick={closeMobileMenu}>
          Support
        </Link>
      </div>
      <div>
        <Link to="/" className="nav-icon" onClick={closeMobileMenu}>
          <i className="fa fa-apple" />
        </Link>
      </div>

      {/* Menu Items */}
      <Link to="/store" className="nav-text">
        Store
      </Link>
      <Link to="/mac" className="nav-text">
        Mac
      </Link>
      <Link to="/ipad" className="nav-text">
        iPad
      </Link>
      <Link to="/iphone" className="nav-text">
        iPhone
      </Link>
      <Link to="/watch" className="nav-text">
        Watch
      </Link>
      <Link to="/airpods" className="nav-text">
        AirPods
      </Link>
      <Link to="/tv&home" className="nav-text">
        TV & Home
      </Link>
      <Link to="/onlyonapple" className="nav-text">
        Only on Apple
      </Link>
      <Link to="/accessories" className="nav-text">
        Accessories
      </Link>
      <Link to="/support" className="nav-text">
        Support
      </Link>

      {/* Menu Buttons */}
      <Link to="/" className="nav-icon search-icon">
        <i class="fa fa-search"></i>
      </Link>
      <Link to="/" className="nav-icon">
        <i className="fa fa-shopping-cart" />
      </Link>
    </nav>
  );
};

export default Navbar;
