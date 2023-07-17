import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import SocialImpact from "./pages/SocialImpact";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Renders the page according to which currentPage (state) we are currently in
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Learn") {
      return <Learn />;
    }
    if (currentPage === "SocialImpact") {
      return <SocialImpact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
