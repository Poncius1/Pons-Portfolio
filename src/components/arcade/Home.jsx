import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Play Videogames</h1>
      <Link to="/gamelist">Press Start To Play</Link>
    </div>
  );
};

export default Home;
