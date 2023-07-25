import React from "react";
import InfiniteRotation from "../../InfiniteRotation";
import lightBulbIcon from "../../../images/icons/lightbulb.svg";

function UIAuditService() {
  return (
    <React.Fragment>
      <section
        className="udemy-course-section-1 mobile-section drop-in-3"
        id="UI-audit-service"
      >
        <InfiniteRotation />
        <div className="udemy-course-section-1-wrapper">
          <div className="udemy-course-section-1-left-column drop-in-4">
            <h1>
              Website / UI Audit<span>.</span>
            </h1>
            <p>
              Small changes could elevate your website performance massively
              without a complete redesign. We’ll audit your current UI and
              provide a practical list of improvement suggestions. <br></br>
              <br></br> Suitable for any organisation looking to enhance web
              traffic, conversion rate, retention rate, and improve
              accessibility. <br></br>
              <br></br> ⏰ 1 Week Delivery | 💰 GBP£1,500
            </p>
            <button className="lets-talk-btn learn-to-optimise">
              Audit your website with us
            </button>
          </div>

          <div className="udemy-course-section-1-right-column drop-in-5">
            <h2>
              Key themes<span>.</span>
            </h2>
            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>User Experience</h3>
                <p>Is the process smooth from your landing page to CTA?</p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Search Engine Optimisation (Website only)</h3>
                <p>
                  Can users easily find your site by typing keywords on search
                  engines?
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Accessibility</h3>
                <p>
                  Can users with accessible needs navigate your site easily?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default UIAuditService;
