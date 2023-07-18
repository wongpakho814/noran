import React from "react";
import CtaBox from "./CtaBox";
import computerIcon from "../images/icons/🖥️.svg";
import searchIcon from "../images/icons/🔍.svg";
import chatIcon from "../images/icons/💬️.svg";
import bookIcon from "../images/icons/📖.svg";
import globeIcon from "../images/icons/🌐.svg";
import houseIcon from "../images/icons/🏫.svg";
import lightBulbIcon from "../images/icons/💡.svg";
import slackLogo from "../images/Slack-Logo-2019-present_1.png";
import udemyLogo from "../images/Udemy_Logo_3280x1712-scaled_1.png";

function Navigation() {
  const handleMouseOverAnchor = (event) => {
    event.currentTarget.lastElementChild.style.cssText =
      "display: flex; animation: fade-in 0.3s forwards;";
    event.currentTarget.firstElementChild.nextElementSibling.style.cssText =
      "transform: rotateX(180deg); transition: transform 0.3s;";
  };

  const handleMouseOverDiv = (event) => {
    event.currentTarget.style.cssText =
      "display: flex; animation: fade-in 0.3s forwards;";
  };

  const handleMouseOutAnchor = (event) => {
    event.currentTarget.lastElementChild.style.cssText =
      "display: flex; animation: fade-out 0.3s forwards;";
    event.currentTarget.firstElementChild.nextElementSibling.style.cssText =
      "transform: rotateX(0deg); transition: transform 0.3s;";
  };

  const handleMouseOutDiv = (event) => {
    event.currentTarget.style.cssText =
      "display: flex; animation: fade-out 0.3s forwards;";
  };

  const handleOnClickAnchor = (event) => {
    if (event.currentTarget.lastElementChild.style.display === "flex") {
      event.currentTarget.lastElementChild.style.cssText =
        "display: none; animation: fade-out 0.3s forwards;";
      event.currentTarget.firstElementChild.nextElementSibling.style.cssText =
        "transform: rotateX(0deg); transition: transform 0.3s;";
    } else {
      event.currentTarget.lastElementChild.style.cssText =
        "display: flex; animation: fade-in 0.3s forwards;";
      event.currentTarget.firstElementChild.nextElementSibling.style.cssText =
        "transform: rotateX(180deg); transition: transform 0.3s;";
    }
  };

  document.addEventListener("animationstart", function (e) {
    if (e.animationName === "fade-in") {
      e.target.classList.add("did-fade-in");
    }
  });

  document.addEventListener("animationend", function (e) {
    if (e.animationName === "fade-out") {
      e.target.classList.remove("did-fade-in");
    }
  });

  window.addEventListener("resize", () => {
    window.location.reload(false);
  });

  return (
    <ul className="nav-list">
      <li
        className="nav-list-item"
        onMouseOver={window.innerWidth > 1000 ? handleMouseOverAnchor : null}
        onMouseOut={window.innerWidth > 1000 ? handleMouseOutAnchor : null}
        onClick={window.innerWidth <= 1000 ? handleOnClickAnchor : null}
      >
        <p>Services</p>
        <i className="fa-solid fa-chevron-down"></i>

        <div
          className="nav-dropdown-wrapper"
          onMouseOver={window.innerWidth > 1000 ? handleMouseOverDiv : null}
          onMouseOut={window.innerWidth > 1000 ? handleMouseOutDiv : null}
        >
          <ul className="nav-dropdown nav-dropdown-services">
            <li className="nav-dropdown-item">
              <h3>
                <img src={computerIcon} alt="UX Design & DesignOps"></img>
                <span>UX Design & DesignOps</span>
              </h3>
              <p>Tagline</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={searchIcon} alt="Website / UI Audit"></img>
                <span>Website / UI Audit</span>
              </h3>
              <p>Tagline</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={chatIcon} alt="Consulting"></img>
                <span>Consulting</span>
              </h3>
              <p>Tagline</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={bookIcon} alt="Editorial & Print Design"></img>
                <span>Editorial & Print Design</span>
              </h3>
              <p>Tagline</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={globeIcon} alt="Web Development & Hosting"></img>
                <span>Web Development & Hosting</span>
              </h3>
              <p>Tagline</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={houseIcon} alt="Design Workshops & Training"></img>
                <span>Design Workshops & Training</span>
              </h3>
              <p>Tagline</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={lightBulbIcon} alt="Product Management"></img>
                <span>Product Management</span>
              </h3>
              <p>Tagline</p>
            </li>
          </ul>
          <CtaBox />
        </div>
      </li>

      <li
        className="nav-list-item"
        onMouseOver={window.innerWidth > 1000 ? handleMouseOverAnchor : null}
        onMouseOut={window.innerWidth > 1000 ? handleMouseOutAnchor : null}
        onClick={window.innerWidth <= 1000 ? handleOnClickAnchor : null}
      >
        <p>Learn</p>
        <i className="fa-solid fa-chevron-down"></i>

        <div
          className="nav-dropdown-wrapper nav-dropdown-wrapper-learn"
          onMouseOver={window.innerWidth > 1000 ? handleMouseOverDiv : null}
          onMouseOut={window.innerWidth > 1000 ? handleMouseOutDiv : null}
        >
          <div className="slack-box">
            <div className="slack-box-outer-wrapper">
              <div className="slack-box-inner-wrapper">
                <div className="slack-box-header">
                  <img
                    className="slack-logo"
                    src={slackLogo}
                    alt="Slack logo"
                  ></img>
                  <div className="slack-heading">
                    <h3>
                      Join our community<span>.</span>
                    </h3>
                  </div>
                </div>

                <div className="slack-text">
                  <p>
                    Meet aspiring individuals in the tech industry around the
                    world, and stay updated to the industry trends while
                    learning important topics like Generative AI and UX
                    Inclusivity!
                  </p>
                </div>
                <button className="slack-btn">Meet the network</button>
              </div>
            </div>
            <div className="blob"></div>
          </div>

          <div className="udemy-box">
            <div className="udemy-box-outer-wrapper">
              <div className="udemy-box-inner-wrapper">
                <div className="udemy-box-header">
                  <img
                    className="udemy-logo"
                    src={udemyLogo}
                    alt="Udemy logo"
                  ></img>
                  <div className="udemy-heading">
                    <h3>
                      Free DesignOps course<span>.</span>
                    </h3>
                  </div>
                </div>

                <div className="udemy-text">
                  <p>
                    Learn from Expedia Group’s product leader to enhance your
                    team’s design workflow under an hour! You’ll even get a free
                    practical handbook to guide your process step-by-step!
                  </p>
                </div>
                <button className="udemy-btn">Start learning</button>
              </div>
            </div>
            <div className="blob"></div>
          </div>

          <div className="latest-industry-insights">
            <div className="latest-industry-insights-wrapper">
              <div className="latest-industry-insights-header">
                <h3>
                  Latest industry insights<span>.</span>
                </h3>
              </div>
              <p>Comprehensive Guide to Inclusive UX Design</p>
              <p>Comprehensive Guide to Accessible UX Design</p>
              <p>Comprehensive Guide to Sustainable UX Design</p>
            </div>
          </div>
        </div>
      </li>

      <li className="nav-list-item">
        <a href="social-impact" className="nav-link">
          Social Impact
        </a>
      </li>

      <li className="nav-list-item">
        <p>Projects</p>
      </li>

      <li className="nav-list-item">
        <p>About Noran</p>
      </li>
    </ul>
  );
}

export default Navigation;
