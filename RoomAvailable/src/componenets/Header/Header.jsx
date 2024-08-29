import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src="./logo.png" alt="Logo" width={100} />

        <div className={`h-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Residencies</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">Services</a>
          <button className="h-btn">
            <a href="#">Get Started</a>
          </button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </section>
  );
};

export default Header;
