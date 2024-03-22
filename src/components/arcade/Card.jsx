import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Card = ({ imagen,title, paragraph }) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className="card" // Clase CSS para el contenedor principal del card
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>
        {paragraph}
      </p>
      <div className="btnn"> {/* Clase CSS para el contenedor de botones */}
        <button className="btn">&lt;/&gt;</button>
        <button className="btn">Play</button>
      </div>
    </animated.div>
  );
};

export default Card;
