import React, { useState } from "react";
import ImageCard from "./ImageCard";

const Desktop = () => {
  const [selectedTab, setSelectedTab] = useState("one");

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };
  const handleButtonClick = () => {
    // Lógica para manejar el click del botón
    console.log("Botón clickeado");
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
        </div>
        <div
          className={`panel ${selectedTab === "two" ? "active" : ""}`}
          id="two-panel"
        >
          <div className="panel-title">Graphics Projects</div>
          <hr className="divider" />

          <ImageCard
            imageUrl="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Pons Portfolio"
            description="Portfolio web create with React, CSS, and R3F."
            link="https://github.com/Poncius1/Pons-Portfolio"
          />
          <ImageCard
            imageUrl="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            title="Pons Portfolio"
            description="Portfolio web create with React, CSS, and R3F."
            link="https://github.com/Poncius1/Pons-Portfolio"
          />
        </div>
        <div
          className={`panel ${selectedTab === "three" ? "active" : ""}`}
          id="three-panel"
        >
          <div className="panel-title">Credits</div>
          <hr className="divider" />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
