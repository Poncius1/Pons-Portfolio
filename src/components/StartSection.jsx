import {React,useState } from "react";

const StartSection = () => {
  const headerText = "Hi, I'm Angel Ponce";
  const smallText = "Software Developer from Mexico.";
  const buttonText = "Contact Me";
  const cvText = " Download CV";


  const startButton = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container">
      <h2 className="header">{headerText}</h2>
      <p className="text">{smallText}</p>
      <button className="cv-button" onClick={startButton}>
        {buttonText}
      </button>
      <button className="cv-button" onClick={startButton}>
        {cvText}
      </button>
    </div>
  );
};

export default StartSection;
