import React from "react";

function ctaBox() {
  return (
    <div className="cta-box">
      <div className="cta-box-column">
        <div className="cta-heading">Work with us.</div>
        <div className="cta-box-btn">
          <button className="lets-talk-btn">Let's talk</button>
          <button className="join-community-btn">Join the community</button>
        </div>
        <div className="cta-text">
          Are you a social enterprise or a charity? You’ll be able to get a
          positive impact discount as a thank you for all your hard work to the
          society!
        </div>
      </div>
      <div className="blob"></div>
    </div>
  );
}

export default ctaBox;
