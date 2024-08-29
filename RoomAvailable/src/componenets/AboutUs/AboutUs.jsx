import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <section className="About-wrapper">
        <div className="About-cantainer">
          <div className="About-left">
            <div className="image-container">
              <img src="./r3.png" alt="Hotel" />
            </div>
          </div>
          <div className="About-Right">
            <span className="orangeText">About US</span>
            <br />
            <span className="primaryText">What we Provide to You</span>
            <br />
            <span className="secondaryText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
