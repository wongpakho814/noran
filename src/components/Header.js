import React from "react";
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Pak Ho Wong</h1>
      <nav>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
    </header>
  );
}

export default Header;
