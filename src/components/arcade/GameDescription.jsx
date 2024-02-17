import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const GameDescription = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGoBack = () => {
    navigate("/gamelist");
  };

  return (
    <div>
      <h2>Game Description</h2>
      <p>Description for Game {id}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default GameDescription;
