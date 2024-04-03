import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { useThree } from "@react-three/fiber";
import gsap from "gsap/all";

const AboutMe = ({ isVisible, setVisibility,setShowStartSection }) => {
  
 

  const { camera } = useThree();
  const controls = useThree((state) => state.controls);
  const timeline = gsap.timeline({
    defaults:{
      ease:"circ.out",
      duration: 3
    },
  });

  const BackButton = () =>{
    setVisibility(!isVisible);
    setShowStartSection(true);
    controls.enableRotate = true;

    timeline.to(camera.position,{
      x: 122, 
      y: 76,
      z: 124,
    });
    
    timeline.to(controls.target,{
      x: 0,
      y: 50,
      z: 0
    },">-3");
  };

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
          <button className="btn-class-name" onClick={BackButton}>
            <span>Back</span>
            <svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
              </path>
            </svg>
          </button>
        </Html>
      )}
    </>
  );
};

export default AboutMe;
