import React from "react";
import InfiniteRotation from "../InfiniteRotation";
import heroImg from "../../images/hero-img-plant.png";
import treeIcon from "../../images/icons/🌲.svg";
import forkIcon from "../../images/icons/🍴.svg";
import waterDropIcon from "../../images/icons/💧.svg";
import heartIcon from "../../images/icons/💚.svg";
import leafEmoji from "../../images/leaf highlight emoji.png";

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

      <section className="social-impact-section-2">
        <h1>
          Our commitment<span>.</span>
        </h1>
        <div className="social-impact-section-2-insights">
          <div className="social-impact-section-2-insight-card">
            <div className="social-impact-section-2-insight-card-emoji">
              <img
                src={leafEmoji}
                alt="We offer social enterprise discounts"
              ></img>
            </div>
            <div className="social-impact-section-2-insight-card-content">
              <h3>We offer social enterprise discounts</h3>
              <p>
                We offer exclusive discounts to non-profits and social
                enterprises, making our professional services more accessible.
              </p>
            </div>
          </div>

          <div className="social-impact-section-2-insight-card">
            <div className="social-impact-section-2-insight-card-emoji">
              <img
                src={leafEmoji}
                alt="We offer social enterprise discounts"
              ></img>
            </div>
            <div className="social-impact-section-2-insight-card-content">
              <h3>We support charities for free</h3>
              <p>
                We offer a free comprehensive service to a charity for every ten
                corporate brands we work with.
              </p>
            </div>
          </div>

          <div className="social-impact-section-2-insight-card">
            <div className="social-impact-section-2-insight-card-emoji">
              <img
                src={leafEmoji}
                alt="We offer social enterprise discounts"
              ></img>
            </div>
            <div className="social-impact-section-2-insight-card-content">
              <h3>We contribute back to the society.</h3>
              <p>
                We make regular contributions to a variety of causes, including
                environment, humanity, arts and culture, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SocialImpact;
