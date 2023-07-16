import React from "react";
import InfiniteRotation from "../InfiniteRotation";
import leafEmoji from "../../images/leaf highlight emoji.png";
import earthEmoji from "../../images/earth highlight emoji.png";
import image1 from "../../images/Frame 14177.png";
import image2 from "../../images/Frame 14176.png";
import searchIcon from "../../images/icons/🔍.svg";
import chatIcon from "../../images/icons/💬️.svg";
import bookIcon from "../../images/icons/📖.svg";
import globeIcon from "../../images/icons/🌐.svg";
import houseIcon from "../../images/icons/🏫.svg";
import lightBulbIcon from "../../images/icons/💡.svg";
import monitorIcon from "../../images/icons/🖥️.svg";
import heroImg from "../../images/hero-img-plant.png";
import treeIcon from "../../images/icons/🌲.svg";
import forkIcon from "../../images/icons/🍴.svg";
import waterDropIcon from "../../images/icons/💧.svg";
import heartIcon from "../../images/icons/💚.svg";
import avatarImg from "../../images/Sam Gilbert.png";

function Home() {
  return (
    <React.Fragment>
      <section className="home-section-1" id="home">
        <div className="home-section-1-content">
          <InfiniteRotation />
          <h1>
            Your purpose-driven strategic partner<span>.</span>
          </h1>
          <p>
            Our philosophy is to create impactful design solutions for
            businesses while design a better tomorrow for our society. Trust
            me... we’re nothing like what you’ve seen before.
          </p>
          <div className="home-section-1-highlight-card">
            <div className="home-section-1-highlight">
              <div className="home-section-1-highlight-emoji">
                <img src={leafEmoji} alt="Supported 90+ brands"></img>
              </div>
              <p>Supported 90+ brands</p>
            </div>
            <div className="home-section-1-highlight">
              <div className="home-section-1-highlight-emoji">
                <img src={earthEmoji} alt="Across 12 countries"></img>
              </div>
              <p>Across 12 countries</p>
            </div>
          </div>
        </div>

        <div className="home-section-1-image-area">
          <img className="home-section-1-image-1" src={image1} alt=""></img>
          <img className="home-section-1-image-2" src={image2} alt=""></img>
          <div className="home-section-1-waves">
            <div className="home-section-1-wave home-section-1-wave-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="355"
                height="22"
                viewBox="0 0 355 22"
                fill="none"
              >
                <path
                  d="M0.000244141 2C17.7565 2 17.7565 20 35.5127 20C53.269 20 53.269 2 71.0252 2C88.7815 2 88.7815 20 106.496 20C124.253 20 124.253 2 141.967 2C159.724 2 159.724 20 177.438 20C195.194 20 195.194 2 212.95 2C230.706 2 230.706 20 248.463 20C266.218 20 266.218 2 283.975 2C301.732 2 301.732 20 319.488 20C337.244 20 337.244 2 355 2"
                  stroke="#D6EBDC"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="home-section-1-wave home-section-1-wave-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="355"
                height="22"
                viewBox="0 0 355 22"
                fill="none"
              >
                <path
                  d="M0.000244141 2C17.7565 2 17.7565 20 35.5127 20C53.269 20 53.269 2 71.0252 2C88.7815 2 88.7815 20 106.496 20C124.253 20 124.253 2 141.967 2C159.724 2 159.724 20 177.438 20C195.194 20 195.194 2 212.95 2C230.706 2 230.706 20 248.463 20C266.218 20 266.218 2 283.975 2C301.732 2 301.732 20 319.488 20C337.244 20 337.244 2 355 2"
                  stroke="#D6EBDC"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="home-section-1-wave home-section-1-wave-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="355"
                height="22"
                viewBox="0 0 355 22"
                fill="none"
              >
                <path
                  d="M0.000244141 2C17.7565 2 17.7565 20 35.5127 20C53.269 20 53.269 2 71.0252 2C88.7815 2 88.7815 20 106.496 20C124.253 20 124.253 2 141.967 2C159.724 2 159.724 20 177.438 20C195.194 20 195.194 2 212.95 2C230.706 2 230.706 20 248.463 20C266.218 20 266.218 2 283.975 2C301.732 2 301.732 20 319.488 20C337.244 20 337.244 2 355 2"
                  stroke="#D6EBDC"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-2">
        <div className="home-section-2-content-wrapper">
          <div className="home-section-2-interactive">
            <div className="home-section-2-interactive-card home-section-2-interactive-card-1">
              <div className="home-section-2-interactive-card-emoji">
                <img src={searchIcon} alt="Website / UI Audit"></img>
              </div>
              <p>Website / UI Audit</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-2">
              <div className="home-section-2-interactive-card-emoji">
                <img src={houseIcon} alt="Design Workshops & Trainings"></img>
              </div>
              <p>Design Workshops & Trainings</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-3">
              <div className="home-section-2-interactive-card-emoji">
                <img src={chatIcon} alt="Consulting"></img>
              </div>
              <p>Consulting</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-4">
              <div className="home-section-2-interactive-card-emoji">
                <img src={lightBulbIcon} alt="Product Management"></img>
              </div>
              <p>Product Management</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-5">
              <div className="home-section-2-interactive-card-emoji">
                <img src={globeIcon} alt="Web Development & Hosting"></img>
              </div>
              <p>Web Development & Hosting</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-6">
              <div className="home-section-2-interactive-card-emoji">
                <img src={bookIcon} alt="Editorial & Print Design"></img>
              </div>
              <p>Editorial & Print Design</p>
            </div>

            <div className="home-section-2-interactive-card home-section-2-interactive-card-7">
              <div className="home-section-2-interactive-card-emoji">
                <img src={monitorIcon} alt="UX Design & DesignOps"></img>
              </div>
              <p>UX Design & DesignOps</p>
            </div>
          </div>

          <div className="home-section-2-text-content">
            <InfiniteRotation />
            <h1>
              Elevate your brand with heart<span>.</span>
            </h1>
            <p>
              Whether you’re seeking quick wins or a complete strategy makeover,
              we’re here for you. As a collaborative partner who listen, ask,
              learn, and gathers insights to put together plans with your
              success in mind.
            </p>
            <button className="lets-talk-btn our-services">Our Services</button>
          </div>
        </div>
      </section>

      <section className="home-section-3">
        <div className="home-section-3-content-wrapper">
          <InfiniteRotation />
          <div className="home-section-3-hero">
            <div className="home-section-3-hero-text">
              <h1>
                We strive for a better future<span>.</span>
              </h1>
              <p>
                We are committed to making a tangible difference by actively
                contributing to environmental conservation and supporting
                organisations that drive positive social change.
              </p>
              <button className="lets-talk-btn our-social-commitment">
                Our social commitment
              </button>
            </div>
            <div className="blob"></div>
            <div className="home-section-3-hero-img-wrapper">
              <img src={heroImg} alt="We strive for a better future"></img>
              <div className="blob2"></div>
            </div>
          </div>

          <div className="home-section-3-card">
            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={treeIcon} alt="25K+ trees planted"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>25K+ trees</h2>
                <p>planted</p>
              </div>
            </div>

            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={forkIcon} alt="25K+ trees planted"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>4K+ meals</h2>
                <p>shared</p>
              </div>
            </div>

            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={waterDropIcon} alt="25K+ trees planted"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>USD$1.3K+</h2>
                <p>donated for clean water</p>
              </div>
            </div>

            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={heartIcon} alt="25K+ trees planted"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>Charities</h2>
                <p>supporting for free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-4">
        <div className="home-section-4-text">
          <h1>Our clients stay with us<span>.</span></h1>
          <p>
            We’ve worked (and still working!) with an AI-driven virtual
            assistant platform for NHS hospitals, the world’s first AI
            ultra-realistic robot, the world’s largest public art project, and
            more amazing brands!
          </p>
          <button className="lets-talk-btn our-case-studies">
            Our case studies
          </button>
        </div>

        <div className="home-section-4-card">
          <p>
            Nicole and her team are outstanding designers who also possess the
            eye of a fine proofreader and the communication skills of a Roman
            orator. They are dazzlingly fast, meticulous, cheerful, creative,
            and extremely smart. Their linguistic skills made them an invaluable
            asset on a project happening in over twenty languages. Highest
            possible marks.
          </p>
          <div className="home-section-4-card-client">
            <img src={avatarImg} alt="Sam Gilbert"></img>
            <div className="home-section-4-card-client-info">
              <h3>Sam Gilbert</h3>
              <p>
                Project Manager of Kcymaerxthaere | California, United States
              </p>
            </div>
          </div>
          <div className="home-section-4-arrows">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="42"
              viewBox="0 0 92 42"
              fill="none"
            >
              <circle cx="71.5002" cy="20.9648" r="20.5" fill="#457D61" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M63.4212 20.9648C63.4212 21.2327 63.5276 21.4895 63.717 21.6789C63.9064 21.8683 64.1632 21.9747 64.4311 21.9747H76.1321L71.7955 26.3093C71.7016 26.4032 71.6271 26.5147 71.5763 26.6374C71.5254 26.7601 71.4993 26.8916 71.4993 27.0244C71.4993 27.1572 71.5254 27.2886 71.5763 27.4113C71.6271 27.534 71.7016 27.6455 71.7955 27.7394C71.8894 27.8333 72.0008 27.9078 72.1235 27.9586C72.2462 28.0094 72.3777 28.0356 72.5105 28.0356C72.6433 28.0356 72.7748 28.0094 72.8975 27.9586C73.0202 27.9078 73.1316 27.8333 73.2255 27.7394L79.2851 21.6798C79.3791 21.586 79.4538 21.4746 79.5047 21.3519C79.5556 21.2292 79.5818 21.0976 79.5818 20.9648C79.5818 20.832 79.5556 20.7004 79.5047 20.5777C79.4538 20.455 79.3791 20.3436 79.2851 20.2498L73.2255 14.1902C73.0359 14.0006 72.7787 13.894 72.5105 13.894C72.2423 13.894 71.9851 14.0006 71.7955 14.1902C71.6058 14.3799 71.4993 14.6371 71.4993 14.9052C71.4993 15.1734 71.6058 15.4306 71.7955 15.6203L76.1321 19.9549H64.4311C64.1632 19.9549 63.9064 20.0613 63.717 20.2507C63.5276 20.4401 63.4212 20.697 63.4212 20.9648Z"
                fill="white"
              />
              <circle cx="20.8533" cy="20.9648" r="20.5" fill="#FCFCFC" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.9324 20.9648C28.9324 21.2327 28.826 21.4895 28.6366 21.6789C28.4472 21.8683 28.1903 21.9747 27.9224 21.9747H16.2214L20.558 26.3093C20.6519 26.4032 20.7264 26.5147 20.7772 26.6374C20.8281 26.7601 20.8542 26.8916 20.8542 27.0244C20.8542 27.1572 20.8281 27.2886 20.7772 27.4113C20.7264 27.534 20.6519 27.6455 20.558 27.7394C20.4641 27.8333 20.3527 27.9078 20.23 27.9586C20.1073 28.0094 19.9758 28.0356 19.843 28.0356C19.7102 28.0356 19.5787 28.0094 19.456 27.9586C19.3334 27.9078 19.2219 27.8333 19.128 27.7394L13.0684 21.6798C12.9744 21.586 12.8998 21.4746 12.8488 21.3519C12.7979 21.2292 12.7717 21.0976 12.7717 20.9648C12.7717 20.832 12.7979 20.7004 12.8488 20.5777C12.8998 20.455 12.9744 20.3436 13.0684 20.2498L19.128 14.1902C19.3176 14.0006 19.5748 13.894 19.843 13.894C20.1112 13.894 20.3684 14.0006 20.558 14.1902C20.7477 14.3799 20.8542 14.6371 20.8542 14.9052C20.8542 15.1734 20.7477 15.4306 20.558 15.6203L16.2214 19.9549H27.9224C28.1903 19.9549 28.4472 20.0613 28.6366 20.2507C28.826 20.4401 28.9324 20.697 28.9324 20.9648Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
