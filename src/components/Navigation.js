import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // If the current page is "Home", we set the current page to 'nav-link-active', otherwise 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Services <i className="fa-solid fa-chevron-down"></i>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#learn"
          onClick={() => handlePageChange("Learn")}
          className={currentPage === "Learn" ? "nav-link active" : "nav-link"}
        >
          Learn <i className="fa-solid fa-chevron-down"></i>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#social-impact"
          onClick={() => handlePageChange("SocialImpact")}
          className={
            currentPage === "SocialImpact" ? "nav-link active" : "nav-link"
          }
        >
          Social Impact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Noran
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
