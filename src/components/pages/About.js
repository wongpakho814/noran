import React from "react";
import InfiniteRotation from "../InfiniteRotation";
import heroImg from "../../images/hero-img-plant.png";
import award1 from "../../images/Best Webflow Website Design.svg";
import award2 from "../../images/New-Business-Excellence-Awards.jpg";
import award3 from "../../images/Top Creative Agencies in the UK.svg";
import award4 from "../../images/UX Design Specialists of the Year.jpg";

function About() {
  return (
    <React.Fragment>
      <section className="about-section-1" id="about">
        <div className="home-section-3-content-wrapper about-section-1-content-wrapper">
          <InfiniteRotation />
          <div className="home-section-3-hero">
            <div className="home-section-3-hero-text">
              <h1>
                About Noran<span>.</span>
              </h1>
              <p>
                WNoran is derived from “諾” (promise) and “然” (a state of
                leisure). Our philosophy is to create impactful design solutions
                for businesses while design a better tomorrow for our society.
              </p>
            </div>
            <div className="blob"></div>
            <div className="home-section-3-hero-img-wrapper">
              <img src={heroImg} alt="We strive for a better future"></img>
              <div className="blob2"></div>
            </div>
          </div>

          <div className="about-section-1-cards">
            <h2>
              Our featured awards<span>.</span>
            </h2>
            <div className="about-section-1-highlight-wrapper">
              <div className="about-section-1-card-highlight">
                <div id="about-section-1-highlight-emoji-1">
                  <img src={award1} alt="Best Webflow Website Design"></img>
                </div>
                <div className="about-section-1-highlight-text">
                  <h2>Best Webflow Website Design</h2>
                  <p>2022</p>
                </div>
              </div>

              <div className="about-section-1-card-highlight">
                <div id="about-section-1-highlight-emoji-2">
                  <img
                    src={award2}
                    alt="Most Innovative UX/UI Design Agency"
                  ></img>
                </div>
                <div className="about-section-1-highlight-text">
                  <h2>Most Innovative UX/UI Design Agency</h2>
                  <p>2023</p>
                </div>
              </div>

              <div className="about-section-1-card-highlight">
                <div id="about-section-1-highlight-emoji-3">
                  <img src={award3} alt="Top Creative Agencies in the UK"></img>
                </div>
                <div className="about-section-1-highlight-text">
                  <h2>Top Creative Agencies in the UK</h2>
                  <p>2023</p>
                </div>
              </div>

              <div className="about-section-1-card-highlight">
                <div id="about-section-1-highlight-emoji-4">
                  <img
                    src={award4}
                    alt="UX Design Specialists of the Year"
                  ></img>
                </div>
                <div className="about-section-1-highlight-text">
                  <h2>UX Design Specialists of the Year</h2>
                  <p>2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
