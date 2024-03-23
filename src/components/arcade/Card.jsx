import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Card = ({ imagen, title, paragraph, linkPlay, linkCode }) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className="card" 
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>
        {paragraph}
      </p>
      <div className="btnn"> 
        {linkCode && <button className="btn" onClick={() => window.open(linkCode, "_blank")}>Code</button>}
        {linkPlay && <button className="btn" onClick={() => window.open(linkPlay, "_blank")}>Play</button>}
      </div>
    </animated.div>
  );
};

export default Card;
