import React from "react";
import InfiniteRotation from "../../InfiniteRotation";
import lightBulbIcon from "../../../images/icons/lightbulb.svg";

function DesignWorkshopsService() {
  return (
    <React.Fragment>
      <section
        className="udemy-course-section-1 mobile-section drop-in-3"
        id="design-workshops-service"
      >
        <InfiniteRotation />
        <div className="udemy-course-section-1-wrapper">
          <div className="udemy-course-section-1-left-column drop-in-4">
            <h1>
              Design Workshops & Training<span>.</span>
            </h1>
            <p>
              By collaborating with stakeholders, you’ll have the most suitable
              design decision for the problem you’re trying to solve in a few
              days. <br></br>
              <br></br> Our team will craft a customised intensive collaborative
              session based on the stakeholder’s job families and knowledge, the
              key challenges, and the organisational goals you’re trying to
              achieve. <br></br>
              <br></br> ⏰ 1-2 Days | 💰 GBP£1,500
            </p>
            <button className="lets-talk-btn learn-to-optimise">
              Consult with us
            </button>
          </div>

          <div className="udemy-course-section-1-right-column drop-in-5">
            <h2>
              Key themes<span>.</span>
            </h2>
            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Customised Solution</h3>
                <p>
                  Based on your key concerns and business goals, we’ll
                  customised a comprehensive session for you.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Lifelong Access to Workshop & Training Materials</h3>
                <p>
                  You and your team will be able to access the materials
                  forever, including new version updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default DesignWorkshopsService;
