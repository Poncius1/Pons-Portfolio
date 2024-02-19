
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF,Html } from "@react-three/drei";
import { useThree} from "@react-three/fiber";
import gsap from "gsap/all";
import ArcadePage from "../ArcadePage";

export function Arcade(props) {
  const { nodes, materials } = useGLTF("/models/S_Arcade.gltf");


  const {camera} = useThree();
  const controls = useThree((state) => state.controls)
  const timeline = gsap.timeline({
    defaults:{
      ease:"circ.out",
      duration: 8
    },
  });


 
  const BackButton = () =>{
    controls.enablePan = true
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
      },">-7")
    }
    


  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        //geometry={nodes.Arcade_Screen.geometry}
        //material={materials.Screen}
          >
            <Html
            className="arcade-screen"
            rotation={[-0.1,0,0]}
            position={[63,99.6,-56]}
            transform
            occlude
             >
              <ArcadePage/>
                <button onClick={BackButton}>BACK</button>
            </Html>
          </mesh>
      
    </group>
  );
}
 

useGLTF.preload("/models/S_Arcade.gltf");





