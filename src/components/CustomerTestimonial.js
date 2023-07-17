import React from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import avatarImg from "../images/Sam Gilbert.png";
import prevIconActivated from "../images/PreviousActivated.svg";
import prevIconUnactivated from "../images/PreviousUnactivated.svg";
import nextIconActivated from "../images/NextActivated.svg";
import nextIconUnactivated from "../images/NextUnactivated.svg";

function CustomerTestimonial({ text, name, position }) {
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button className="next-btn" onClick={() => swiper.slideNext()}>{children}</button>;
  };

  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button className="prev-btn" onClick={() => swiper.slidePrev()}>{children}</button>;
  };

  return (
    <React.Fragment>
      <p>{text}</p>
      <div className="home-section-4-card-client">
        <img src={avatarImg} alt="Sam Gilbert"></img>
        <div className="home-section-4-card-client-info">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
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

export default CustomerTestimonial;
