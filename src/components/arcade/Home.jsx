import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/gamelist">
        <div>
          <img src="./texture/Arcade.png" alt="Imagen" />
          
        </div>
      </Link>
    </div>
  );
};

export default Home;
