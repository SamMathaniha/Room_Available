import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="ContainerleftSide">
          <h1 className="HeroHeader">Discover Most suitable Room</h1>
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
