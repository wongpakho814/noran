import React from "react";
import InfiniteRotation from "../../InfiniteRotation";
import lightBulbIcon from "../../../images/icons/lightbulb.svg";

function UXDesignService() {
  return (
    <React.Fragment>
      <section
        className="udemy-course-section-1 mobile-section drop-in-3"
        id="uxdesign-service"
      >
        <InfiniteRotation />
        <div className="udemy-course-section-1-wrapper">
          <div className="udemy-course-section-1-left-column drop-in-4">
            <h1>
              UX Design & DesignOps<span>.</span>
            </h1>
            <p>
              We create user experiences that are intuitive, accessible, and
              engaging, with our unique design process that follows the best
              practices of design operations. Our team ensures your projects run
              smoothly from ideation to delivery, allowing you to focus on your
              core mission while we handle the operational complexities.
              <br></br>
              <br></br> ⏰ Depends on scope | 💰 Minimum GBP£500
            </p>
            <button className="lets-talk-btn learn-to-optimise">
              Enhance your user experience with us
            </button>
          </div>

          <div className="udemy-course-section-1-right-column drop-in-5">
            <h2>
              Key themes<span>.</span>
            </h2>
            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Design System Development</h3>
                <p>
                  We create and maintain a cohesive design system to promote
                  consistency and reusability for your team.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Information Architecture</h3>
                <p>
                  We organise and structure every content in a logical and
                  user-friendly manner, ensuring you deliver your message
                  clearly.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Accessibility & Inclusivity</h3>
                <p>
                  We ensure your product adheres to accessibility guidelines to
                  provide a seamless experience for users of all abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default UXDesignService;
