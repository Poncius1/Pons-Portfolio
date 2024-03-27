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
          <h2>Experience:</h2>
          <ul>
            <li>2019 - 2024: Ingenieria en Tecnologias Interactivas y Animacion Digital, en UVM Campús Toluca.</li>
            <li>Agosto 2023 - Diciembre 2023: Practicas Profesionales en Macula Interactive en el juego: "Mexico,1921. A Deep Slumber."</li>
          </ul>
          <div className="container-with-border">

            <h2>About Me:</h2>
            <p>Hey there! I'm Angel Ponce, a lifelong gamer with a dream: to be part of the vibrant world of video game development. From console classics to cutting-edge web experiences, I've always been drawn to interactive adventures that spark the imagination.</p>
            <p>As a software developer, I've translated my love for gaming into creating immersive experiences that captivate and delight. Whether it's crafting a compelling storyline or fine-tuning the user experience, I'm all about bringing ideas to life in ways that leave a lasting impression.</p>

          </div>
          
          <h2>Skills:</h2>
          <ul>
            <li>C++</li>
            <li>C#</li>
            <li>JavaScript</li>
            <li>HTML + CSS</li>
          </ul>
          <button className="button-scifi"onClick={BackButton}>BACK</button>
        </Html>
      )}
    </>
  );
};

export default AboutMe;
