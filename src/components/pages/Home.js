import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CustomerTestimonial from "../CustomerTestimonial";
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

function Home() {
  return (
    <React.Fragment>
      <section className="home-section-1 drop-in-2" id="home">
        <div className="home-section-1-content">
          <InfiniteRotation />
          <h1 className="drop-in-4">
            Your purpose-driven strategic partner<span>.</span>
          </h1>
          <p className="drop-in-4">
            Our philosophy is to create impactful design solutions for
            businesses while design a better tomorrow for our society. Trust
            me... we’re nothing like what you’ve seen before.
          </p>
          <div className="home-section-1-highlight-card drop-in-5">
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

        <div className="home-section-1-image-area drop-in-5">
          <img
            className="home-section-1-image-1"
            src={image1}
            alt="Your purpose-driven strategic partner"
          ></img>
          <img
            className="home-section-1-image-2"
            src={image2}
            alt="Your purpose-driven strategic partner"
          ></img>
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

      <section className="home-section-2 drop-in-5">
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
                <img src={forkIcon} alt="4K+ meals shared"></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>4K+ meals</h2>
                <p>shared</p>
              </div>
            </div>

            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img
                  src={waterDropIcon}
                  alt="USD$1.3K+ donated for clean water"
                ></img>
              </div>
              <div className="home-section-3-highlight-text">
                <h2>USD$1.3K+</h2>
                <p>donated for clean water</p>
              </div>
            </div>

            <div className="home-section-3-card-highlight">
              <div className="home-section-3-highlight-emoji">
                <img src={heartIcon} alt="Charities supporting for free"></img>
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
          <h1>
            Our clients stay with us<span>.</span>
          </h1>
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
        <Swiper
          className="home-section-4-card"
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide>
            <CustomerTestimonial
              text={
                "Nicole and her team are outstanding designers who also possess the eye of a fine proofreader and the communication skills of a Roman orator. They are dazzlingly fast, meticulous, cheerful, creative, and extremely smart. Their linguistic skills made them an invaluable asset on a project happening in over twenty languages. Highest possible marks."
              }
              name={"Sam Gilbert"}
              position={
                "Project Manager of Kcymaerxthaere | California, United States"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "Nicole is one of the best designers I have ever met. She is talented, creative, passionate and hard-working. I have worked with Nicole on several projects and she has continuously exceeded my expectations. Nicole's illustrations stand out for their modern and clean design style. Her designs are very relevant in nowadays context and are able to catch the attention of the audience. I wholeheartedly recommend Nicole to anyone looking to create new designs, websites and app prototypes."
              }
              name={"Giacomo Bottoli"}
              position={"Founder of The Startup Stories | Italy"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "Nicole provides well-thought-out ideas based on our business needs. She is detail-oriented in both design and corporate perspectives. It is extraordinary to have such a talented individual that is good at both in creativity and practicality. Besides, she continues to support our business after the project. I am impressed by her effectiveness and appreciates her hard work."
              }
              name={"Raymond Lee"}
              position={
                "Director of Hong Kong Financial Services Professionals Association | Hong Kong"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "I found Nicole to be absolutely professional and a pleasure to work with. Nothing was too much trouble, she was always quick to respond and we were also given lots of design options throughout. Absolute 5-star service and I look forward to working with her again in the future! Absolutely superb!"
              }
              name={"Catherine"}
              position={
                "Owner of Roberta Boutique | Bournemouth, United Kingdom"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "I really enjoyed working with Nicole and her team - the quality of their work and the attention to detail was excellent. We had some luxury booklets to create and they totally got it, and this showed in the way they put the booklets together. Highly recommended. Thanks!"
              }
              name={"Aidan Meller"}
              position={
                "Director of Aidan Meller Gallery | Oxford, United Kingdom"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "We hired Nicole to build a wireframe for our app, and she managed to produce an incredible design in a short space of time. Her creativity is second to none, thinking outside the box to enhance our user experience. We had a great understanding with Nicole, bouncing off ideas to design our final product. And on top of all this, she is a lovely, genuine person. Hats off to Nicole for what she has made for us, looking forward to working with her again in the future."
              }
              name={"Craig Stock"}
              position={"Co-founder of Malama | London, United Kingdom"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "Nicole is a creative genius, hands down one of the most talented graphic designers I have worked with. She is incredibly quick and has produced high-quality designs for The People's Backpack and World Innovation Challenge, looking forward to working with Nicole in the future! 100% recommend."
              }
              name={"Luke Netherclift"}
              position={
                "Founder of The People’s Backpack | Coventry, United Kingdom"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "Nicole is exceptional at what she does! She helped produce the logo for Advance Accelerator and the result is nothing short of incredible. This level of precision and talent is unheard of from such a young graphic designer and I look forward to a bright and illustrious career in the making. I recommend Nicole to any SME or startup looking for Logo, UI/UX, Website design amongst other services that Noran Design has to offer."
              }
              name={"Mehul Anand"}
              position={"Innovation Unit Director of Enactus | India"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "Nicole delivered great work on handling the graphic project. She exceeded my expectations and delivered a beautiful PDF eBook, she even corrected some copy that our copywriter didn't notice. I'm very happy with the work. thank you Nicole!"
              }
              name={"Alex Kahel"}
              position={"Founder of Organic Boost | Canada"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerTestimonial
              text={
                "Nicole helped us produce the logo for the first student led social accelerator in the U.K. She is truly amazing at what she does and is always open to meeting requirements. Additionally, the fast speed in which she can create high quality designs is impressive!"
              }
              name={"Wan Ying Liang Chen"}
              position={"Co-founder of Advanced Accelerator | Spain"}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </React.Fragment>
  );
}

export default Home;
