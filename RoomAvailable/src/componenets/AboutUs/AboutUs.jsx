import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./AboutUs.css";
import data from "../../assets/utils/accordion";

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
            <span className="orangeText">About Us</span>
            <br />
            <span className="primaryText">What we Provide to You</span>
            <br />

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText2">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
