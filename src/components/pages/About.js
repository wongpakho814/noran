import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import InfiniteRotation from "../InfiniteRotation";
import CharityPartner from "../CharityPartner";
import heroImg from "../../images/hero-img-plant.png";
import award1 from "../../images/Best Webflow Website Design.svg";
import award2 from "../../images/New-Business-Excellence-Awards.jpg";
import award3 from "../../images/Top Creative Agencies in the UK.svg";
import award4 from "../../images/UX Design Specialists of the Year.jpg";
import TeamMember from "../TeamMember";

function About() {
  return (
    <React.Fragment>
      <section className="about-section-1" id="about">
        <div className="home-section-3-content-wrapper about-section-1-content-wrapper">
          <InfiniteRotation />
          <div className="home-section-3-hero">
            <div className="home-section-3-hero-text">
              <h1>
                About Noran<span>.</span>
              </h1>
              <p>
                WNoran is derived from “諾” (promise) and “然” (a state of
                leisure). Our philosophy is to create impactful design solutions
                for businesses while design a better tomorrow for our society.
              </p>
            </div>
            <div className="blob"></div>
            <div className="home-section-3-hero-img-wrapper">
              <img src={heroImg} alt="We strive for a better future"></img>
              <div className="blob2"></div>
            </div>
          </div>

          <div className="about-section-1-cards">
            <h2>
              Our featured awards<span>.</span>
            </h2>
            <div className="about-section-1-highlight-wrapper">
              <div className="about-section-1-card-highlight">
                <div id="about-section-1-highlight-emoji-1">
                  <img src={award1} alt="Best Webflow Website Design"></img>
                </div>
                <div className="about-section-1-highlight-text">
                  <h2>Best Webflow Website Design</h2>
                  <p>2022</p>
                </div>
              </div>

              <div className="about-section-1-card-highlight">
                <div id="about-section-1-highlight-emoji-2">
                  <img
                    src={award2}
                    alt="Most Innovative UX/UI Design Agency"
                  ></img>
                </div>
                <div className="about-section-1-highlight-text">
                  <h2>Most Innovative UX/UI Design Agency</h2>
                  <p>2023</p>
                </div>
              </div>

              <div className="about-section-1-card-highlight">
                <div id="about-section-1-highlight-emoji-3">
                  <img src={award3} alt="Top Creative Agencies in the UK"></img>
                </div>
                <div className="about-section-1-highlight-text">
                  <h2>Top Creative Agencies in the UK</h2>
                  <p>2023</p>
                </div>
              </div>

              <div className="about-section-1-card-highlight">
                <div id="about-section-1-highlight-emoji-4">
                  <img
                    src={award4}
                    alt="UX Design Specialists of the Year"
                  ></img>
                </div>
                <div className="about-section-1-highlight-text">
                  <h2>UX Design Specialists of the Year</h2>
                  <p>2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-2">
        <div className="social-impact-section-3-left-column">
          <h1>Our Team.</h1>
          <p>
            It all starts from the solo design journey of our founder, Nicole.
            She soon realises in order to bring a greater impact, she has to
            bring more aspiring individuals together.
          </p>
        </div>
        <Swiper
          className="social-impact-section-3-right-column"
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide>
            <TeamMember
              name={"Nicole Fung (she/her)"}
              position={"Founder & Creative Director"}
              text={`Nicole brings her passion and experience in inclusive design and artificial intelligence to the creative process of our studio. She is a product manager at Expedia Group, leading the User Experience Center of Excellence for Data and Artificial Intelligence platforms.
                     She’s also a member of the International Society of Sustainability Professionals (ISSP), who actively drive sustainability in organisations and communities around the globe.
                     Outside of her professional pursuit, Nicole is a nature explorer, art enthusiast, and a compassionate volunteer to support a better future. Her travel blog, Noran Travel, documents her fascinating journeys and explorations.`}
              index={"member1"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember
              name={"Angie Ku (she/her)"}
              position={"Art Direction Consultant"}
              text={`Angie is an award-winning art director who has supported over 30 productions. Her strong background enables her to support the production of Hong Kong's top television stations.
                     Her work is dedicated to amplifying the voices of marginalised communities while fostering thoughtful discussions on topics such as life and death.`}
              index={"member2"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember
              name={"Carmen Chan (she/her)"}
              position={"Social Impact Director"}
              text={`Carmen is a compassionate individual who has been contributing back to the society for over 20 years. Her rich experience in social impact leads us to take action for our social commitment. 
                     She has been mentoring a wide range of individuals, including C-suite management and business owners, guiding her mentees to be the change makers for the world.`}
              index={"member3"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember
              name={"Aiden Lai (he/his)"}
              position={"Technology Consultant"}
              text={`Aiden is a driven cybersecurity expert who brings his extensive technical knowledge to the team. He’s a security consultant at NTT Data, supporting a number of DevSecOps and ISO 27001 assessment for industry-leading clients.
                     He’s also an accredited affiliate member of the Chartered Institute of Information Security and a SC-900 certified candidate, bringing the latest industry insights to the community.`}
              index={"member4"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember
              name={"Keerthi Rachamallu (she/her)"}
              position={"Diversity, Equity & Inclusion (DEI) Director"}
              text={`Keerthi brings her unique blend of technical and DEI expertise to the team. She is a product manager at Expedia Group, supporting the generative AI capabilities for the analytics platform.
                     With 3 years of experience at PwC and one of the winners of the Samsung #SolveForTomorrow competition in 2021, Keerthi brings valuable insights of the tech industry while supporting the local community to enable more Asian women to get into the tech industry.`}
              index={"member5"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamMember
              name={"Ian Sze (he/his)"}
              position={"Research Analyst"}
              text={`Ian is a business researcher with equity and financial experience in one of the world’s most trusted global capital sources, Sovereign Wealth Fund Institute (SWFI) and Internet Bull Report. 
                     He’ll join Deloitte to utilise his research skills and serve industry-leading clients with the latest insights. In his spare time, he also gives back to society by bringing the latest industry insights for struggling university students seeking job opportunities.`}
              index={"member6"}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </React.Fragment>
  );
}

export default About;
