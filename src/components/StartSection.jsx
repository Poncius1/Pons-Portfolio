import {React,useState } from "react";

const StartSection = ({ contactButton }) => {
  

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
    <div className="start-section">
      <h2 className="section-header">Hi, I&rsquo;m Angel Ponce</h2>
      <p className="section-subtitle">Software Developer from Mexico</p>
      <div className="start-button-container">
        <button className="action-button" onClick={contactButton}>
          Contact Me
        </button>
        <button className="action-button" onClick={downloadCV}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default StartSection;
