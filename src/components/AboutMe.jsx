import React from 'react';
import { Html } from '@react-three/drei';

const AboutMe = () => {

 

  return (
    <Html
    className="pc-screen"
        position={[0,50,35]}
        rotation={[0,0,0]}
        transform
        occlude
      >
          <h1>
              Hola Mundo
          </h1>
          <button>BACK</button>
      
    </Html>
  );
};

export default AboutMe;
