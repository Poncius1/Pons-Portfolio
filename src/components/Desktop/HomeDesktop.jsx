import React from "react";
import { Link } from "react-router-dom"; // Importa el componente Link de React Router Dom

const HomeDesktop = () => {
  return (
    <div className="home-desktop">
      <Link to="/desktop" className="home-link">
        <div className="background-image"></div>
        <div className="content"></div>
      </Link>
    </div>
  );
};

export default HomeDesktop;
