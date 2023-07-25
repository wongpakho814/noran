import React from "react";
import CtaBox from "./CtaBox";
import computerIcon from "../images/icons/desktop.svg";
import searchIcon from "../images/icons/magnify.svg";
import chatIcon from "../images/icons/chat.svg";
import bookIcon from "../images/icons/book.svg";
import globeIcon from "../images/icons/web.svg";
import houseIcon from "../images/icons/school.svg";
import lightBulbIcon from "../images/icons/lightbulb.svg";
import slackLogo from "../images/Slack-Logo-2019-present_1.png";
import udemyLogo from "../images/Udemy_Logo_3280x1712-scaled_1.png";

function Navigation() {
  const handleMouseOverAnchor = (event) => {
    event.currentTarget.lastElementChild.style.cssText =
      "display: flex; animation: fade-in 0.3s forwards;";
    const arrow = event.currentTarget.firstElementChild.nextElementSibling;

    window.innerWidth > 1000
      ? (arrow.style.cssText =
          "transform: rotateX(180deg) translateY(-0.1rem); transition: transform 0.3s;")
      : window.innerWidth <= 1000 && window.innerWidth > 600
      ? (arrow.style.cssText =
          "transform: rotateX(180deg) translateY(-0.3rem); transition: transform 0.3s;")
      : window.innerWidth <= 600 && window.innerWidth > 500
      ? (arrow.style.cssText =
          "transform: rotateX(180deg) translateY(-0.7rem); transition: transform 0.3s;")
      : window.innerWidth <= 500 && window.innerWidth > 450
      ? (arrow.style.cssText =
          "transform: rotateX(180deg) translateY(-1rem); transition: transform 0.3s;")
      : (arrow.style.cssText =
          "transform: rotateX(180deg) translateY(-1.6rem); transition: transform 0.3s;");
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
      event.currentTarget.style.cssText = "padding-bottom: 2rem;";
      event.currentTarget.lastElementChild.style.cssText =
        "display: none; animation: fade-out 0.3s forwards;";
      event.currentTarget.firstElementChild.nextElementSibling.style.cssText =
        "transform: rotateX(0deg); transition: transform 0.3s;";
    } else {
      event.currentTarget.style.cssText = "padding-bottom: 0;";
      event.currentTarget.lastElementChild.style.cssText =
        "display: flex; animation: fade-in 0.3s forwards;";
      const arrow = event.currentTarget.firstElementChild.nextElementSibling;

      window.innerWidth > 1000
        ? (arrow.style.cssText =
            "transform: rotateX(180deg) translateY(-0.1rem); transition: transform 0.3s;")
        : window.innerWidth <= 1000 && window.innerWidth > 600
        ? (arrow.style.cssText =
            "transform: rotateX(180deg) translateY(-0.3rem); transition: transform 0.3s;")
        : window.innerWidth <= 600 && window.innerWidth > 500
        ? (arrow.style.cssText =
            "transform: rotateX(180deg) translateY(-0.7rem); transition: transform 0.3s;")
        : window.innerWidth <= 500 && window.innerWidth > 450
        ? (arrow.style.cssText =
            "transform: rotateX(180deg) translateY(-1rem); transition: transform 0.3s;")
        : (arrow.style.cssText =
            "transform: rotateX(180deg) translateY(-1.6rem); transition: transform 0.3s;");
    }
  };

  window.addEventListener("mouseup", function (event) {
    const navListItem = document.querySelectorAll(".nav-list-item");
    const navList = document.querySelector(".nav-list");

    if (
      this.window.innerWidth <= 1000 &&
      !Array.from(navListItem).includes(event.target) &&
      navList.style.display === "flex"
    ) {
      navList.style.cssText =
        "display: none; animation: fade-out 0.3s forwards;";
    }
  });

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

  return (
    <ul className="nav-list">
      <li
        className="nav-list-item"
        onMouseOver={window.innerWidth > 1000 ? handleMouseOverAnchor : null}
        onMouseOut={window.innerWidth > 1000 ? handleMouseOutAnchor : null}
        onClick={window.innerWidth <= 1000 ? handleOnClickAnchor : null}
      >
        <p className="nav-list-item-heading">Services</p>
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
                <a href="uxdesign-service">UX Design & DesignOps</a>
              </h3>
              <p>Drive the best experience to your users</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={searchIcon} alt="Website / UI Audit"></img>
                <span>Website / UI Audit</span>
              </h3>
              <p>Small improvements to create a great impact</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={chatIcon} alt="Consulting"></img>
                <span>Consulting</span>
              </h3>
              <p>Create the right solution based on your goals</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={bookIcon} alt="Editorial & Print Design"></img>
                <a href="editorial-service">Editorial & Print Design</a>
              </h3>
              <p>Well laid-out digital and print publications</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={globeIcon} alt="Web Development & Hosting"></img>
                <span>Web Development & Hosting</span>
              </h3>
              <p>Communicate your vision with an eye-catching website</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={houseIcon} alt="Design Workshops & Training"></img>
                <span>Design Workshops & Training</span>
              </h3>
              <p>Improve your team’s design knowledge</p>
            </li>
            <li className="nav-dropdown-item">
              <h3>
                <img src={lightBulbIcon} alt="Product Management"></img>
                <span>Product Management</span>
              </h3>
              <p>Launch industry-leading features strategically</p>
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
        <p className="nav-list-item-heading">Learn</p>
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
                <a
                  className="slack-btn"
                  href="https://join.slack.com/t/norandesign/shared_invite/zt-1uesdmq4g-hjHLW6Eh~mWPy6Ir611oSQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Meet the network
                </a>
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
                <a href="udemy-course" className="udemy-btn">
                  Start learning
                </a>
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
        <a href="social-impact" className="nav-list-item-heading nav-link">
          Social Impact
        </a>
      </li>

      <li className="nav-list-item">
        <p className="nav-list-item-heading">Projects</p>
      </li>

      <li className="nav-list-item">
        <a href="about" className="nav-list-item-heading nav-link">
          About Noran
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
