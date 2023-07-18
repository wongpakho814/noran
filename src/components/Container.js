import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import SocialImpact from "./pages/SocialImpact";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function PortfolioContainer() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
