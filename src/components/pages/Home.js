import React from "react";
import InfiniteRotation from "../InfiniteRotation";
import leafEmoji from "../../images/leaf highlight emoji.png";
import earthEmoji from "../../images/earth highlight emoji.png";
import image1 from "../../images/Frame 14177.png";
import image2 from "../../images/Frame 14176.png";
import searchIcon from "../../images/icons/🔍.svg";
import chatIcon from "../../images/icons/💬️.svg";
import bookIcon from "../../images/icons/📖.svg";
import globeIcon from "../../images/icons/🌐.svg";
import houseIcon from "../../images/icons/🏫.svg";
import lightBulbIcon from "../../images/icons/💡.svg";
import monitorIcon from "../../images/icons/🖥️.svg";
import heroImg from "../../images/hero-img-plant.png";
import treeIcon from "../../images/icons/🌲.svg";
import forkIcon from "../../images/icons/🍴.svg";
import waterDropIcon from "../../images/icons/💧.svg";
import heartIcon from "../../images/icons/💚.svg";

function Home() {
  return (
    <React.Fragment>
      <section className="home-section-1" id="home">
        <div className="home-section-1-content">
          <InfiniteRotation />
          <h1>
            Your purpose-driven strategic partner<span>.</span>
          </h1>
          <p>
            Our philosophy is to create impactful design solutions for
            businesses while design a better tomorrow for our society. Trust
            me... we’re nothing like what you’ve seen before.
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
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
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
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
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
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-2">
        <div className="home-section-2-content-wrapper">
          <div className="home-section-2-interactive">
            <div className="home-section-2-interactive-card home-section-2-interactive-card-1">
              <div className="home-section-2-interactive-card-emoji">
                <img src={searchIcon} alt="Website / UI Audit"></img>
              </div>
              <p>Website / UI Audit</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-2">
              <div className="home-section-2-interactive-card-emoji">
                <img src={houseIcon} alt="Design Workshops & Trainings"></img>
              </div>
              <p>Design Workshops & Trainings</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-3">
              <div className="home-section-2-interactive-card-emoji">
                <img src={chatIcon} alt="Consulting"></img>
              </div>
              <p>Consulting</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-4">
              <div className="home-section-2-interactive-card-emoji">
                <img src={lightBulbIcon} alt="Product Management"></img>
              </div>
              <p>Product Management</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-5">
              <div className="home-section-2-interactive-card-emoji">
                <img src={globeIcon} alt="Web Development & Hosting"></img>
              </div>
              <p>Web Development & Hosting</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-6">
              <div className="home-section-2-interactive-card-emoji">
                <img src={bookIcon} alt="Editorial & Print Design"></img>
              </div>
              <p>Editorial & Print Design</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-7">
              <div className="home-section-2-interactive-card-emoji">
                <img src={monitorIcon} alt="UX Design & DesignOps"></img>
              </div>
              <p>UX Design & DesignOps</p>
            </div>
          </div>

          <div className="home-section-2-text-content">
            <InfiniteRotation />
            <h1>
              Elevate your brand with heart<span>.</span>
            </h1>
            <p>
              Whether you’re seeking quick wins or a complete strategy makeover,
              we’re here for you. As a collaborative partner who listen, ask,
              learn, and gathers insights to put together plans with your
              success in mind.
            </p>
            <button className="lets-talk-btn our-services">Our Services</button>
          </div>
        </div>
      </section>

      <section className="home-section-3">
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

export default Home;
