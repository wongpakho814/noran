import React from "react";
import InfiniteRotation from "../InfiniteRotation";
import lightBulbIcon from "../../images/icons/lightbulb.svg";

function UdemyCourse() {
  return (
    <React.Fragment>
      <section className="udemy-course-section-1 mobile-section drop-in-2" id="udemy-course">
        <InfiniteRotation />
        <div className="udemy-course-section-1-wrapper">
          <div className="udemy-course-section-1-left-column">
            <h1>
              Learn DesignOps for free on Udemy<span>.</span>
            </h1>
            <p>
              DesignOps is an industry-leading topic focuses on streamlining
              design processes, systems, and workflows in organisations that
              create digital products.<br></br>
              <br></br> This course is designed and taught by our founder,
              Nicole Fung — current product manager at Expedia Group leading the
              User Experience Center of Excellence for Data and Artificial
              Intelligence (AI) platforms. <br></br>
              <br></br>💡 You’ll get a free practical handbook to guide your
              process step-by-step!
            </p>
            <button className="lets-talk-btn learn-to-optimise">
              Learn to optimise your design process
            </button>
          </div>

          <div className="udemy-course-section-1-right-column">
            <h2>
              Modules<span>.</span>
            </h2>
            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Module 1: What’s DesignOps?</h3>
                <p>
                  Learn about DesignOps’ origin, benefits, and solutions.
                  Identify if your organisation is lacking DesignOps and the
                  importance to separate between DesignOps and designer roles.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Module 2: Implementing DesignOps</h3>
                <p>
                  Identify your organisation’s needs, define goals and
                  objectives, and create roadmap and initiatives. Learn from
                  industry-leading DesignOps case studies and design system
                  examples.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Module 3: Measuring DesignOps</h3>
                <p>
                  Set key performance indicators (KPIs) to measure the success
                  of implementing DesignOps in your organisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default UdemyCourse;
