/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF,Html } from "@react-three/drei";

export function PcScreen(props) {
  const { nodes, materials } = useGLTF("/models/PcScreen.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PcScreen.geometry}
        material={materials["Screen.001"]}
      >  
      <Html 
      transform
      position={[-74.5,97.5,-60]}
      rotation={[0.,1.6,0]}
      className="arcade-screen" >
          <h1>
              Hola Mundo
          </h1>
      </Html>

      </mesh>
    </group>
  ); 
}

useGLTF.preload("/models/PcScreen.gltf");
