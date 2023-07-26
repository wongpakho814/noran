import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import UXDesignService from "./pages/services/UXDesignService";
import EditorialService from "./pages/services/EditorialService";
import ProductManagementService from "./pages/services/ProductManagementService";
import UIAuditService from "./pages/services/UIAuditService";
import WebDevelopmentService from "./pages/services/WebDevelopmentService";
import ConsultingService from "./pages/services/ConsultingService";
import DesignWorkshopsService from "./pages/services/DesignWorkshopsService";
import UdemyCourse from "./pages/UdemyCourse";
import SocialImpact from "./pages/SocialImpact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import IndustryInsights from "./pages/IndustryInsights";

export default function PortfolioContainer() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uxdesign-service" element={<UXDesignService />} />
          <Route path="/editorial-service" element={<EditorialService />} />
          <Route
            path="/product-management-service"
            element={<ProductManagementService />}
          />
          <Route path="/UI-audit-service" element={<UIAuditService />} />
          <Route
            path="/web-development-service"
            element={<WebDevelopmentService />}
          />
          <Route path="/consulting-service" element={<ConsultingService />} />
          <Route
            path="/design-workshops-service"
            element={<DesignWorkshopsService />}
          />
          <Route path="/udemy-course" element={<UdemyCourse />} />
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/industry-insights" element={<IndustryInsights />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="custom-cursor"></div>
    </div>
  );
}
