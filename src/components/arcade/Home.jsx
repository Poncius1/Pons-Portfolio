import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/gamelist">
        <div className="image-wrapper">
          <img src="./texture/homebg.gif" alt="Gif" />
        </div>
      </Link>
    </div>
  );
};

export default Home;
