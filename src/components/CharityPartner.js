import React from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import * as avatars from "./charityPartnersAvatar";
import prevIconActivated from "../images/PreviousActivated.svg";
import prevIconUnactivated from "../images/PreviousUnactivated.svg";
import nextIconActivated from "../images/NextActivated.svg";
import nextIconUnactivated from "../images/NextUnactivated.svg";

function CharityPartner({ name, industry, text, index }) {
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
      <button className="next-btn" onClick={() => swiper.slideNext()}>
        {children}
      </button>
    );
  };

  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
      <button className="prev-btn" onClick={() => swiper.slidePrev()}>
        {children}
      </button>
    );
  };

  return (
    <React.Fragment>
      <div className="social-impact-section-3-client">
        {index === "avatar1" ? (
          <img src={avatars.avatar1} alt="ADHD Aware"></img>
        ) : (
          <img
            src={avatars.avatar2}
            alt="East and Central Brighton Primary Care Network"
          ></img>
        )}
        <div className="social-impact-section-3-client-info">
          <h3>{name}</h3>
          <p>{industry}</p>
        </div>
      </div>
      <p>{text}</p>
      <a href="#">Visit to learn more</a>
      <div className="home-section-4-arrows">
        <SwiperButtonPrev>
          <img
            src={prevIconUnactivated}
            onMouseOver={(e) => (e.currentTarget.src = prevIconActivated)}
            onMouseOut={(e) => (e.currentTarget.src = prevIconUnactivated)}
            alt="previous slide"
          ></img>
        </SwiperButtonPrev>
        <SwiperButtonNext>
          <img
            src={nextIconUnactivated}
            onMouseOver={(e) => (e.currentTarget.src = nextIconActivated)}
            onMouseOut={(e) => (e.currentTarget.src = nextIconUnactivated)}
            alt="next slide"
          ></img>
        </SwiperButtonNext>
      </div>
    </React.Fragment>
  );
}

export default CharityPartner;
