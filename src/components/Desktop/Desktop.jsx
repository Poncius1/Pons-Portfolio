import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCard from "./ImageCard";


const Desktop = ({ onBackButtonClick }) => {
  const [selectedTab, setSelectedTab] = useState("one");
  const navigate = useNavigate(); 

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };
  const handleButtonClick = () => {
    onBackButtonClick()
    navigate("/");
    
  };

  return (
    
    <div className="warpper">
      <input
        className="radio"
        id="one"
        name="group"
        type="radio"
        checked={selectedTab === "one"}
        onChange={() => handleTabChange("one")}
      />
      <input
        className="radio"
        id="two"
        name="group"
        type="radio"
        checked={selectedTab === "two"}
        onChange={() => handleTabChange("two")}
      />
      <input
        className="radio"
        id="three"
        name="group"
        type="radio"
        checked={selectedTab === "three"}
        onChange={() => handleTabChange("three")}
      />
      <div className="tabs">
        <label className="tab" id="one-tab" htmlFor="one">
          Web
        </label>
        <label className="tab" id="two-tab" htmlFor="two">
          Graphics
        </label>
        <label className="tab" id="three-tab" htmlFor="three">
          Credits
        </label>
      </div>

      <div className="panels">
        <button className="back-button" onClick={handleButtonClick}>
          Back
        </button>
        <div
          className={`panel ${selectedTab === "one" ? "active" : ""}`}
          id="one-panel"
        >
          <div className="panel-title">Web Projects</div>
          <hr className="divider" />
          <ImageCard
            imageUrl="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Portfolio 2024"
            description="Portfolio web create with React, CSS, and R3F."
            link="https://github.com/Poncius1/Pons-Portfolio"
          />
        </div>
        <div
          className={`panel ${selectedTab === "two" ? "active" : ""}`}
          id="two-panel"
        >
          <div className="panel-title">Graphics Projects</div>
          <hr className="divider" />

        </div>
        <div
          className={`panel ${selectedTab === "three" ? "active" : ""}`}
          id="three-panel"
        >
          <div className="panel-title">Credits</div>
          <hr className="divider" />
          <div className="credit-section">
            <h4>Developed by:</h4>
            <p>Angel Ponce</p>
          </div>
          <div className="credit-section">
            <h4>Models and illustrations:</h4>
            <p>Denisse Colin</p>
            <p>Luis Rayon</p>
          </div>
          <div className="credit-section">
            <h4>Inspirations:</h4>
            <p>JesseZhou</p>
            <p>David Heckhoff</p>
            <p>Henry Heffernan</p>
          </div>
          <div className="credit-section">
            <h4>Acknowledgements:</h4>
            <p>
              I want to express my sincere thanks to all the people who were part of this project and collaborated, either by giving their opinion or contributing some assets to the portfolio.
              Especially, I want to thank my best friends for their collaboration in modeling and testing the page, as well as my girlfriend for her invaluable help with all the 2D aspects of the project.
              I cannot fail to thank my parents, who, despite not having any idea of what I was doing, always tried to show interest in what I was doing, just to see me happy.
              Last but not least, I want to express my gratitude to Duke, my faithful companion, who was by my side in those moments of frustration due to some bug. Thank you for always being willing to go for a walk with me and for being my company in those late-night hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
