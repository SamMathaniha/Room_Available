import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Rooms.css";
import data from "../../assets/utils/slider.json";
import { sliderSettings } from "../../assets/utils/common";

const Rooms = () => {
  return (
    <section className="Room-Wrapper">
      <div className="Room-Container">
        <div className="room-head">
          <span>Best Choices</span>
          <span>Popular Rooms</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="Room-card">
                <img src={card.image} alt="HomeImg" />

                <span className="secondaryText r-Price">
                  <br></br>
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <br></br>
                <span className="primaryText">{card.name}</span>
                <br></br>
                <span className="secondaryText">{card.detail}</span>
                <br></br>
                <span className="secondaryText">For Days: {card.Days}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Rooms;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
