import React from "react";
import logo from "../images/Noran logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column footer-column-1">
          <div className="logo-wrapper">
            <img className="logo" src={logo} alt="Noran Design"></img>
            <div className="logo-square"></div>
          </div>
          <div className="social-media">
            <div className="icon-wrapper">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="icon-wrapper">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="icon-wrapper">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-heading">Our Services.</div>
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
          <div className="footer-heading">Resources.</div>
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
          <div className="footer-heading">About.</div>
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

        <div className="footer-box">
          <div className="footer-box-column">
            <div className="footer-heading">Work with us.</div>
            <div className="footer-box-cta">
              <button className="lets-talk-btn">Let's talk</button>
              <button className="join-community-btn">Join the community</button>
            </div>
            <div className="footer-text">
              Are you a social enterprise or a charity? You’ll be able to get a
              positive impact discount as a thank you for all your hard work to
              the society!
            </div>
          </div>
          <div className="blob"></div>
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
