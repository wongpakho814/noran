import React from "react";
import logo from "../images/Noran logo.svg";
import CtaBox from "./CtaBox";

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-area-1">
          <div className="footer-column footer-column-1">
            <div className="logo-wrapper">
              <img className="logo" src={logo} alt="Noran Design"></img>
              <div className="logo-square"></div>
            </div>
            <div className="social-media">
              <a
                className="icon-wrapper"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/noranstudio/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                className="icon-wrapper"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/norandesign/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="icon-wrapper"
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCO44gy7NEBKebKovedrNPAQ"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <CtaBox />
        </div>

        <div className="footer-area-2">
          <div className="footer-column">
            <div className="footer-heading">
              Our Services<span>.</span>
            </div>
            <div className="footer-item">
              <a href="#">UX Design & DesignOps</a>
            </div>
            <div className="footer-item">
              <a href="#">Editorial & Print Design</a>
            </div>
            <div className="footer-item">
              <a href="#">Product Management</a>
            </div>
            <div className="footer-item">
              <a href="#">Website / UI Audit</a>
            </div>
            <div className="footer-item">
              <a href="#">Web Development & Hosting</a>
            </div>
            <div className="footer-item">
              <a href="#">Consulting</a>
            </div>
            <div className="footer-item">
              <a href="#">Design Workshops & Training</a>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-heading">
              Resources<span>.</span>
            </div>
            <div className="footer-item">
              <a href="#">Join Slack Community</a>
            </div>
            <div className="footer-item">
              <a href="#">Free DesignOps Course on Udemy</a>
            </div>
            <div className="footer-item">
              <a href="#">Industry Insights</a>
            </div>
            <div className="footer-item coming-soon">
              <a href="#">Referral Program</a>
              <span className="coming-soon-label">Coming Soon!</span>
            </div>
            <div className="footer-item">
              <a href="#">Corporate Case Studies</a>
            </div>
            <div className="footer-item coming-soon">
              <a href="#">Our Cultural Projects</a>
              <span className="coming-soon-label">Coming Soon!</span>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-heading">
              About<span>.</span>
            </div>
            <div className="footer-item">
              <a href="#">About Noran</a>
            </div>
            <div className="footer-item">
              <a href="#">Our Awards & Recognitions</a>
            </div>
            <div className="footer-item">
              <a href="#">Our Social Commitment</a>
            </div>
            <div className="footer-item">
              <a href="#">Our Charity Partners</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">
          © 2023 Noran Design. All rights reserved.
        </span>
        <span className="company">
          Company registration number: 14815400. Incorporated in England and
          Wales.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
