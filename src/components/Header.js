import React from "react";
import Navigation from "./Navigation";
import logo from "../images/Noran logo.svg";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="Noran Design"></img>
        <div className="logo-square"></div>
      </div>
      <nav>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
      <button className="lets-talk-btn">Let's talk</button>
    </header>
  );
}

export default Header;
