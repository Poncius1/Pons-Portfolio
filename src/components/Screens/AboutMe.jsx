import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { useThree} from "@react-three/fiber";
import gsap from "gsap/all";


const AboutMe = ({ isVisible, setVisibility }) => {
  

  const BackPud = () => {
    setVisibility(!isVisible);
  };

  const {camera} = useThree();
  const controls = useThree((state) => state.controls)
  const timeline = gsap.timeline({
    defaults:{
      ease:"circ.out",
      duration: 3
    },
  });


 
  const BackButton = () =>{
    BackPud()
    controls.enableRotate = true

    timeline.to(camera.position,{
      x: 122, 
      y: 76,
      z: 124,
      
    });
      timeline.to(controls.target,{
        x:0,
        y:50,
        z:0
      },">-3")
    }

  return (
    <>
      {isVisible && (
        <Html
          className="pud-screen"
          position={[40, 48, 37.5]}
          rotation={[0, 1, 0]}
          transform
          occlude
        >
          <h1>Hola Mundo</h1>
          <button onClick={BackButton}>BACK</button>
        </Html>
      )}
    </>
  );
};

export default AboutMe;
