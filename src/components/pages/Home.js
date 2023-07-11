import React from "react";
import InfiniteRotation from "../InfiniteRotation";
import leafEmoji from "../../images/leaf highlight emoji.png";
import earthEmoji from "../../images/earth highlight emoji.png";
import image1 from "../../images/Frame 14177.png";
import image2 from "../../images/Frame 14176.png";

function Home() {
  return (
    <section className="home-section-1" id="home">
      <div className="home-section-1-content">
        <InfiniteRotation />
        <h1>
          Your purpose-driven strategic partner<span>.</span>
        </h1>
        <p>
          Our philosophy is to create impactful design solutions for businesses
          while design a better tomorrow for our society. Trust me... we’re
          nothing like what you’ve seen before.
        </p>
        <div className="home-section-1-highlight-card">
          <div className="home-section-1-highlight">
            <div className="home-section-1-highlight-emoji">
              <img src={leafEmoji} alt="Supported 90+ brands"></img>
            </div>
            <p>Supported 90+ brands</p>
          </div>
          <div className="home-section-1-highlight">
            <div className="home-section-1-highlight-emoji">
              <img src={earthEmoji} alt="Across 12 countries"></img>
            </div>
            <p>Across 12 countries</p>
          </div>
        </div>
      </div>

      <div className="home-section-1-image-area">
        <img className="home-section-1-image-1" src={image1} alt=""></img>
        <img className="home-section-1-image-2" src={image2} alt=""></img>
        <div className="home-section-1-waves">
          <div className="home-section-1-wave home-section-1-wave-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="355"
              height="22"
              viewBox="0 0 355 22"
              fill="none"
            >
              <path
                d="M0.000244141 2C17.7565 2 17.7565 20 35.5127 20C53.269 20 53.269 2 71.0252 2C88.7815 2 88.7815 20 106.496 20C124.253 20 124.253 2 141.967 2C159.724 2 159.724 20 177.438 20C195.194 20 195.194 2 212.95 2C230.706 2 230.706 20 248.463 20C266.218 20 266.218 2 283.975 2C301.732 2 301.732 20 319.488 20C337.244 20 337.244 2 355 2"
                stroke="#D6EBDC"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="home-section-1-wave home-section-1-wave-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="355"
              height="22"
              viewBox="0 0 355 22"
              fill="none"
            >
              <path
                d="M0.000244141 2C17.7565 2 17.7565 20 35.5127 20C53.269 20 53.269 2 71.0252 2C88.7815 2 88.7815 20 106.496 20C124.253 20 124.253 2 141.967 2C159.724 2 159.724 20 177.438 20C195.194 20 195.194 2 212.95 2C230.706 2 230.706 20 248.463 20C266.218 20 266.218 2 283.975 2C301.732 2 301.732 20 319.488 20C337.244 20 337.244 2 355 2"
                stroke="#D6EBDC"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="home-section-1-wave home-section-1-wave-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="355"
              height="22"
              viewBox="0 0 355 22"
              fill="none"
            >
              <path
                d="M0.000244141 2C17.7565 2 17.7565 20 35.5127 20C53.269 20 53.269 2 71.0252 2C88.7815 2 88.7815 20 106.496 20C124.253 20 124.253 2 141.967 2C159.724 2 159.724 20 177.438 20C195.194 20 195.194 2 212.95 2C230.706 2 230.706 20 248.463 20C266.218 20 266.218 2 283.975 2C301.732 2 301.732 20 319.488 20C337.244 20 337.244 2 355 2"
                stroke="#D6EBDC"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
