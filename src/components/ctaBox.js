import React from "react";

function CtaBox() {
  return (
    <div className="cta-box">
      <div className="cta-box-column">
        <div className="cta-heading">
          Work with us<span>.</span>
        </div>
        <div className="cta-box-btn">
          <a className="lets-talk-btn" href="mailto: info@norandesign.com">
            Let's talk
          </a>
          <a
            className="join-community-btn"
            target="_blank"
            rel="noreferrer"
            href="https://join.slack.com/t/norandesign/shared_invite/zt-1uesdmq4g-hjHLW6Eh~mWPy6Ir611oSQ"
          >
            Join the community
          </a>
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

export default CtaBox;
