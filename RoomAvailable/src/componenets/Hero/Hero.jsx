import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="ContainerleftSide">
          <motion.h1
            className="HeroHeader"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              type: "spring",
            }}
          >
            Discover Most suitable Room
          </motion.h1>
          <h2 className="HeroDescription">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <table>
            <div className="tableheader">
              <th>2500+</th>
              <th>20+</th>
              <th>600+</th>
            </div>
            <div className="tablebody">
              <td>Rooms</td>
              <td>Countries</td>
              <td>Clients</td>
            </div>
          </table>
        </div>
        <div className="ContainerrightSide">
          <img src="./r3.png" alt="RoomFrontImg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
