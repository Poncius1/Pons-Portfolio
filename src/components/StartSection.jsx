import React from "react";

const StartSection = () => {
  const headerText = "Hi, I'm Angel Ponce";
  const smallText = "Software Developer from Mexico.";
  const buttonText = "Start";

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container">
      <h2 className="header">{headerText}</h2>
      <p className="text">{smallText}</p>
      <button className="start-button" onClick={handleButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default StartSection;
