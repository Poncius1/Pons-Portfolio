import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeDesktop from "./Desktop/HomeDesktop";
import Desktop from "./Desktop/Desktop";
import "../styles/desktop.css"; 
const DesktopPage = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomeDesktop />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </Router>
  );
};

export default DesktopPage;
