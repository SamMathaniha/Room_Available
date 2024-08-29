import React, { useState } from "react";
import "./header.css";
import ContactModal from "../ContactModal/ContactModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src="./logo1.PNG" alt="Logo" width={130} />

        <div className={`h-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Our Partners</a>
          <a href="#">Available Rooms</a>
          <a href="#">About us</a>
          <button
            className="h-btn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Contact us
          </button>
          {openModal && <ContactModal closeModal={setOpenModal} />}
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
