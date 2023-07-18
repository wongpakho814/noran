import React from "react";
import Navigation from "./Navigation";
import logo from "../images/Noran logo.svg";

function Header() {
  const handleOnClickMenu = () => {
    if (document.querySelector(".nav-list").style.animationName === "fade-out")
      document.querySelector(".nav-list").style.cssText =
        "display: flex; animation: fade-in 0.3s forwards;";
    else {
      document.querySelector(".nav-list").style.cssText =
        "display: flex; animation: fade-out 0.3s forwards;";
    }
  };

  return (
    <header>
      <a className="logo-wrapper" href="/">
        <img className="logo" src={logo} alt="Noran Design"></img>
        <div className="logo-square"></div>
      </a>
      <nav>
        <Navigation />
      </nav>
      <div className="header-btns">
        <button className="lets-talk-btn">Let's talk</button>
        <div className="hamburger-btn" onClick={handleOnClickMenu}></div>
      </div>
    </header>
  );
}

export default Header;
