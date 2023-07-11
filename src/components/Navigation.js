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

function Navigation({ currentPage, handlePageChange }) {
  const handleMouseOverAnchor = (event) => {
    event.currentTarget.parentElement.lastElementChild.style.cssText =
      "opacity: 1; visibility: visible;";
  };

  const handleMouseOverDiv = (event) => {
    event.currentTarget.style.cssText = "opacity: 1; visibility: visible;";
  };

  const handleMouseOutAnchor = (event) => {
    event.currentTarget.parentElement.lastElementChild.style.cssText =
      "opacity: 0; visibility: hidden;";
  };

  const handleMouseOutDiv = (event) => {
    event.currentTarget.style.cssText = "opacity: 0; visibility: hidden;";
  };

  return (
    <ul className="nav-list">
      <li className="nav-list-item">
        <a
          href="#home"
          // If the current page is "Home", we set the current page to 'nav-link-active', otherwise 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("Home")}
          onMouseOver={handleMouseOverAnchor}
          onMouseOut={handleMouseOutAnchor}
        >
          Services <i className="fa-solid fa-chevron-down"></i>
        </a>
        <div
          className="nav-dropdown-wrapper"
          onMouseOver={handleMouseOverDiv}
          onMouseOut={handleMouseOutDiv}
        >
          <ul className="nav-dropdown nav-dropdown-about-us">
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

      <li className="nav-list-item">
        <a
          href="#learn"
          className={currentPage === "Learn" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("Learn")}
          onMouseOver={handleMouseOverAnchor}
          onMouseOut={handleMouseOutAnchor}
        >
          Learn <i className="fa-solid fa-chevron-down"></i>
        </a>
        <div
          className="nav-dropdown-wrapper"
          onMouseOver={handleMouseOverDiv}
          onMouseOut={handleMouseOutDiv}
        >
          <div className="slack-box">
            <div className="slack-box-outer-wrapper">
              <div className="slack-box-inner-wrapper">
                <img
                  className="slack-logo"
                  src={slackLogo}
                  alt="Slack logo"
                ></img>
                <div className="slack-heading">
                  <h3>Join our community.</h3>
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
                <img
                  className="udemy-logo"
                  src={udemyLogo}
                  alt="Udemy logo"
                ></img>
                <div className="udemy-heading">
                  <h3>Free DesignOps course.</h3>
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
              <h3>
                Latest industry insights<span>.</span>
              </h3>
              <p>Comprehensive Guide to Inclusive UX Design</p>
              <p>Comprehensive Guide to Accessible UX Design</p>
              <p>Comprehensive Guide to Sustainable UX Design</p>
            </div>
          </div>
        </div>
      </li>

      <li className="nav-list-item">
        <a
          href="#social-impact"
          onClick={() => handlePageChange("SocialImpact")}
          className={
            currentPage === "SocialImpact" ? "nav-link active" : "nav-link"
          }
        >
          Social Impact
        </a>
      </li>

      <li className="nav-list-item">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>

      <li className="nav-list-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Noran
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
