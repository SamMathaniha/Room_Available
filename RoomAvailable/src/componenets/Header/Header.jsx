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
          <a href="#">Home</a>
          <a href="#">Our Partners</a>
          <a href="#">Available Rooms</a>
          <a href="#">About us</a>
          <button className="h-btn">
            <a href="#">Contact us</a>
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
