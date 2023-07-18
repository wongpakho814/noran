import React from "react";
import InfiniteRotation from "../InfiniteRotation";
import heroImg from "../../images/hero-img-plant.png";
import treeIcon from "../../images/icons/🌲.svg";
import forkIcon from "../../images/icons/🍴.svg";
import waterDropIcon from "../../images/icons/💧.svg";
import heartIcon from "../../images/icons/💚.svg";

function SocialImpact() {
  return (
    <React.Fragment>
      <section className="social-impact-section-1" id="social-impact">
        <div className="home-section-3-content-wrapper">
          <InfiniteRotation />
          <div className="home-section-3-hero">
            <div className="home-section-3-hero-text">
              <h1>
                We strive for a better future<span>.</span>
              </h1>
              <p>
                We are committed to making a tangible difference by actively
                contributing to environmental conservation and supporting
                organisations that drive positive social change.
              </p>
              <button className="lets-talk-btn our-social-commitment">
                Our social commitment
              </button>
            </div>
            <div className="blob"></div>
            <div className="home-section-3-hero-img-wrapper">
              <img src={heroImg} alt="We strive for a better future"></img>
              <div className="blob2"></div>
            </div>
          </div>

          <div className="home-section-3-card">
            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={treeIcon} alt="25K+ trees planted"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>25K+ trees</h2>
                <p>planted</p>
              </div>
            </div>

            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={forkIcon} alt="25K+ trees planted"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>4K+ meals</h2>
                <p>shared</p>
              </div>
            </div>

            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={waterDropIcon} alt="25K+ trees planted"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>USD$1.3K+</h2>
                <p>donated for clean water</p>
              </div>
            </div>

            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={heartIcon} alt="25K+ trees planted"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>Charities</h2>
                <p>supporting for free</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SocialImpact;
