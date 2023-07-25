import React from "react";
import logo from "../images/Noran logo.svg";
import CtaBox from "./CtaBox";

function Footer() {
  return (
    <footer>
      <div className="footer-columns mobile-section">
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
              <a href="uxdesign-service">UX Design & DesignOps</a>
            </div>
            <div className="footer-item">
              <a href="editorial-service">Editorial & Print Design</a>
            </div>
            <div className="footer-item">
              <a href="product-management-service">Product Management</a>
            </div>
            <div className="footer-item">
              <a href="UI-audit-service">Website / UI Audit</a>
            </div>
            <div className="footer-item">
              <a href="web-development-service">Web Development & Hosting</a>
            </div>
            <div className="footer-item">
              <a href="consulting-service">Consulting</a>
            </div>
            <div className="footer-item">
              <a href="design-workshops-service">Design Workshops & Training</a>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-heading">
              Resources<span>.</span>
            </div>
            <div className="footer-item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://join.slack.com/t/norandesign/shared_invite/zt-1uesdmq4g-hjHLW6Eh~mWPy6Ir611oSQ"
              >
                Join Slack Community
              </a>
            </div>
            <div className="footer-item">
              <a href="udemy-course">Free DesignOps Course on Udemy</a>
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
              <a href="/about">About Noran</a>
            </div>
            <div className="footer-item">
              <a href="/about#about-noran-awards">Our Awards & Recognitions</a>
            </div>
            <div className="footer-item">
              <a href="/social-impact#social-commitment">
                Our Social Commitment
              </a>
            </div>
            <div className="footer-item">
              <a href="/social-impact#charity-partners">Our Charity Partners</a>
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
