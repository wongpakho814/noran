import React from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import * as members from "./TeamMembersImg";
import prevIconActivated from "../images/PreviousActivated.svg";
import prevIconUnactivated from "../images/PreviousUnactivated.svg";
import nextIconActivated from "../images/NextActivated.svg";
import nextIconUnactivated from "../images/NextUnactivated.svg";

function TeamMember({ name, position, text, index }) {
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
        {index === "member1" ? (
          <img src={members.member1} alt="Nicole Fung"></img>
        ) : index === "member2" ? (
          <img src={members.member2} alt="Angie Ku"></img>
        ) : index === "member3" ? (
          <img src={members.member3} alt="Carmen Chan"></img>
        ) : index === "member4" ? (
          <img src={members.member4} alt="Aiden Lai"></img>
        ) : index === "member5" ? (
          <img src={members.member5} alt="Keerthi Rachamallu"></img>
        ) : (
          <img src={members.member6} alt="Ian Sze"></img>
        )}
        <div className="social-impact-section-3-client-info about-section-2-member-info">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
      <p>{text}</p>
      <a href="#">LinkedIn</a>
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

export default TeamMember;
