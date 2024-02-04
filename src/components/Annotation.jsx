// Annotation.js
import React from 'react';
import {Html} from "@react-three/drei";

function Annotation({ children, onClick, ...props }) {
  const handleClick = () => {
    if (onClick) { 
      onClick();
    }
  };

  return (
    <Html
      {...props}
      transform
      occlude="blending"
      geometry>
      <div className="annotation" onClick={handleClick}>
        {children}
      </div>
    </Html>
  );
}

export default Annotation;
