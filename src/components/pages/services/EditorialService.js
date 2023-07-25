import React from "react";
import InfiniteRotation from "../../InfiniteRotation";
import lightBulbIcon from "../../../images/icons/lightbulb.svg";

function EditorialService() {
  return (
    <React.Fragment>
      <section
        className="udemy-course-section-1 mobile-section drop-in-3"
        id="editorial-service"
      >
        <InfiniteRotation />
        <div className="udemy-course-section-1-wrapper">
          <div className="udemy-course-section-1-left-column drop-in-4">
            <h1>
              Editorial & Print Design<span>.</span>
            </h1>
            <p>
              Our team will craft your publications carefully to captivate your
              readers and effectively communicate your message. We’ve supported
              organisations in creating pitch decks, white papers, lead magnets,
              books, art booklets, catalogues, and more! <br></br>
              <br></br> We also oversee the production process for printed
              publications by collaborating with eco-friendly printing
              companies. Guarantee the highest quality output while minimising
              the environmental impact. <br></br>
              <br></br> ⏰ 1-2 Weeks Delivery (Not including printing) | 💰
              Minimum GBP£500
            </p>
            <button className="lets-talk-btn learn-to-optimise">
              Get your crafted publication in a week
            </button>
          </div>

          <div className="udemy-course-section-1-right-column drop-in-5">
            <h2>
              Key themes<span>.</span>
            </h2>
            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Layout Design</h3>
                <p>
                  We craft visually appealing and functional layouts for print
                  and digital publications, ensuring an engaging reading
                  experience.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Typography</h3>
                <p>
                  We select and arrange typefaces, font sizes, line spacing, and
                  other typographic elements to enhance readability and visual
                  appeal.
                </p>
              </div>
            </div>

            <div className="udemy-course-section-1-card">
              <img src={lightBulbIcon} alt="Module 1: What’s DesignOps?"></img>
              <div className="udemy-course-section-1-card-text">
                <h3>Graphic Design</h3>
                <p>
                  We create and integrate custom graphics, illustrations, and
                  visual elements to support and elevate the content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default EditorialService;
