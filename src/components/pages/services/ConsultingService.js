import React from "react";
import InfiniteRotation from "../../InfiniteRotation";
import lightBulbIcon from "../../../images/icons/lightbulb.svg";

function ConsultingService() {
  return (
    <React.Fragment>
      <section
        className="udemy-course-section-1 mobile-section drop-in-3"
        id="consulting-service"
      >
        <InfiniteRotation />
        <div className="udemy-course-section-1-wrapper">
          <div className="udemy-course-section-1-left-column drop-in-4">
            <h1>
              Consulting<span>.</span>
            </h1>
            <p>
              With 4 years of experience in design and management, our team can
              help you and your team create better design solutions, improve the
              design process and achieve greater results. <br></br>
              <br></br> A perfect fit for companies that need a design expert to
              consult with and make the right design decisions. <br></br>
              <br></br> Online or offline | 💰 GBP£120/h
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
                <h3>Frameworks & Resources</h3>
                <p>
                  We’ll provide the practical frameworks and resources to guide
                  the direction of your team.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Customised Solution</h3>
                <p>
                  Based on your key concerns and business goals, we’ll
                  customised a comprehensive action plan for you.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Organised Notes</h3>
                <p>
                  By the end of each session, we’ll share you the summary and
                  action items so you don’t missed any important topics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ConsultingService;
