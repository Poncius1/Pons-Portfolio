import {React,useState } from "react";

const StartSection = () => {
  const headerText = "Hi, I'm Angel Ponce";
  const smallText = "Software Developer from Mexico.";
  const buttonText = "Contact Me";
  const cvText = " Resume";


  const startButton = () => {
    alert("Button clicked!");
  };

  const downloadCV = () => {

    const pdfPath = "./Angel_Ponce_Resume.pdf";
    
    // Create 'a' element 
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "AngelPonce_Resume.pdf"; //Name Resume

    //Simulate Click 
    document.body.appendChild(link);
    link.click();

    // Delete element 'a' from DOM
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <h2 className="header">{headerText}</h2>
      <p className="text">{smallText}</p>
      <button className="cv-button" onClick={startButton}>
        {buttonText}
      </button>
      <button className="cv-button" onClick={downloadCV}>
        {cvText}
      </button>
    </div>
  );
};

export default StartSection;
