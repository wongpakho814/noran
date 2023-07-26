import React from "react";
import InfiniteRotation from "../../InfiniteRotation";
import lightBulbIcon from "../../../images/icons/lightbulb.svg";

function WebDevelopmentService() {
  return (
    <React.Fragment>
      <section
        className="udemy-course-section-1 mobile-section drop-in-3"
        id="web-development-service"
      >
        <InfiniteRotation />
        <div className="udemy-course-section-1-wrapper">
          <div className="udemy-course-section-1-left-column drop-in-4">
            <h1>
              Web Development & Hosting<span>.</span>
            </h1>
            <p>
              Do you want a professional team to manage all your content updates
              and keep you hassle-free? Or do you want to be self-sustain and
              manage your website but don’t know where to start? <br></br>
              <br></br> We’re here to support both scenarios. Our team aims to
              give you direct control and transparency of your website for
              strategic planning and drive growth with our unique web
              development and hosting plan. <br></br>
              <br></br> ⏰ Depends on scope | 💰 Minimum GBP£1,000
            </p>
            <button className="lets-talk-btn learn-to-optimise">
              Get a professional website
            </button>
          </div>

          <div className="udemy-course-section-1-right-column drop-in-5">
            <h2>
              Key themes<span>.</span>
            </h2>
            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Domain Privacy & Security</h3>
                <p>
                  We manage your domain renewal, WHOIS identity protection,
                  malware scan, and scam prevention.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Data Analytics</h3>
                <p>
                  We’ll create an analytics dashboard to view your website
                  metrics and craft your web strategy based on the analysis.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>24/7 Support & Trainings</h3>
                <p>
                  A dedicated channel will be created for instant support to
                  your team and customised video tutorials to guide your need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default WebDevelopmentService;
