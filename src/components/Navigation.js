import React from "react";
import CtaBox from "./ctaBox";
import computerIcon from "../images/icons/🖥️.svg";
import searchIcon from "../images/icons/🔍.svg";
import chatIcon from "../images/icons/💬️.svg";
import bookIcon from "../images/icons/📖.svg";
import globeIcon from "../images/icons/🌐.svg";
import houseIcon from "../images/icons/🏫.svg";
import lightBulbIcon from "../images/icons/💡.svg";
import slackLogo from "../images/Slack-Logo-2019-present_1.png";

function Navigation({ currentPage, handlePageChange }) {
  const handleMouseOver = (event) => {
    event.currentTarget.parentElement.lastElementChild.style.cssText =
      "opacity: 1; visibility: visible;";
  };

  const handleMouseOut = (event) => {
    console.log(event.target.parentElement);
    event.currentTarget.parentElement.lastElementChild.style.cssText =
      "opacity: 0; visibility: hidden;";
  };

  return (
    <ul className="nav-list">
      <li className="nav-list-item">
        <a
          href="#home"
          // If the current page is "Home", we set the current page to 'nav-link-active', otherwise 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Services <i className="fa-solid fa-chevron-down"></i>
        </a>
        <div className="nav-dropdown-wrapper">
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
          //   onClick={() => showDropdown("learn")}
          className={currentPage === "Learn" ? "nav-link active" : "nav-link"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Learn <i className="fa-solid fa-chevron-down"></i>
        </a>
        <div className="nav-dropdown-wrapper">
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
                <button className="slack-btn">Let's talk</button>
              </div>
            </div>
            <div className="blob"></div>
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
