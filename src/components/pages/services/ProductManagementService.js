import React from "react";
import InfiniteRotation from "../../InfiniteRotation";
import lightBulbIcon from "../../../images/icons/lightbulb.svg";

function ProductManagementService() {
  return (
    <React.Fragment>
      <section
        className="udemy-course-section-1 mobile-section drop-in-3"
        id="product-management-service"
      >
        <InfiniteRotation />
        <div className="udemy-course-section-1-wrapper">
          <div className="udemy-course-section-1-left-column drop-in-4">
            <h1>
              Product Management<span>.</span>
            </h1>
            <p>
              With product experts from the artificial intelligence (AI) and
              data analytics fields, our user-centric and data-centric approach
              can guide your product lifecycle from ideation to launch.{" "}
              <br></br>
              <br></br> ⏰ Depends on scope | 💰 Minimum GBP£500
            </p>
            <button className="lets-talk-btn learn-to-optimise">
              Advance your product to the next level
            </button>
          </div>

          <div className="udemy-course-section-1-right-column drop-in-5">
            <h2>
              Key themes<span>.</span>
            </h2>
            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Product Strategy</h3>
                <p>
                  We’ll develop and refine your product vision, goals, and
                  roadmap to align with market needs and business objectives.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Feature Prioritisation</h3>
                <p>
                  We’ll evaluate and prioritise product features based on user
                  feedback, market research, and strategic considerations.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Product Development Coordination</h3>
                <p>
                  We’ll collaborate with cross-functional teams to manage
                  product development, ensuring timely and efficient progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ProductManagementService;
