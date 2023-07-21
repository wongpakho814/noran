import React from "react";
import Navigation from "./Navigation";
import logo from "../images/Noran logo.svg";

function Header() {
  const handleOnClickMenu = () => {
    if (document.querySelector(".nav-list").classList.contains("change")) {
      document.querySelector(".nav-list").style.cssText =
        "display: none; animation: fade-out 0.3s forwards;";
      document.querySelector(".nav-list").classList.remove("change");
    } else {
      document.querySelector(".nav-list").style.cssText =
        "display: flex; animation: fade-in 0.3s forwards;";
      document.querySelector(".nav-list").classList.add("change");  
    }
  };

  return (
    <header className="drop-in">
      <a className="logo-wrapper" href="/">
        <img className="logo" src={logo} alt="Noran Design"></img>
        <div className="logo-square"></div>
      </a>
      <nav>
        <Navigation />
      </nav>
      <div className="header-btns">
        <a
          className="lets-talk-btn"
          href="mailto: mailto: info@norandesign.com"
        >
          Let's talk
        </a>
        <div className="hamburger-btn" onClick={handleOnClickMenu}></div>
      </div>
    </header>
  );
}

export default Header;
