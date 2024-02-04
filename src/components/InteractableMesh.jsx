/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useLayoutEffect, useRef } from "react";
import * as THREE from 'three';
import { useGLTF, useTexture} from "@react-three/drei";
import {useThree} from "@react-three/fiber";
import gsap from "gsap/all";
import Annotation from "./Annotation";

export function InteractableMesh(props) {
  const { nodes, materials } = useGLTF("/models/AssetsRoom.gltf");
  
   //ArcadeTexture
   const arcadeTexture = useTexture("/texture/Arcade.png")
   arcadeTexture.flipY = false;
   arcadeTexture.encoding = THREE.sRGBEncoding
   
   
   const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#717482',
    transparent: true,
    opacity: 0.5,
    roughness: 0.0,
    metalness: 0.5,
    clearcoat: 1,
    ior: .25,
    clearcoatRoughness: 0.1,
   })

   //Change Materials 
  materials.Arcade.map = arcadeTexture
  



  const {camera} = useThree();
  const controls = useThree((state) => state.controls)
  const timeline = gsap.timeline();
   console.log(camera.position) 
   console.log(camera.rotation)    
   //controls.enabled = true
  const Arcade = () =>{
        controls.enabled = false
        timeline.to(camera.rotation,{
            x: Math.PI *  -0.043961,
            y: 0,
            z: 0

        })
        timeline.to(camera.position,{
            x: 64,
            y: 100,
            z: -37,
        });
        
    }

  const PUD = () =>{
    controls.enabled = false
        timeline.to(camera.rotation,{
            x: Math.PI *  -0.0393,
            y: 0,
            z: 0,

        })
        timeline.to(camera.position,{
            x: 5.40,
            y: 73.43,
            z: 173.09,
        });
    }

    const Pecera = () =>{
        timeline.to(camera.position,{
            x: -46,
            y: 96,
            z: 47,
        });
    }

  return (
    <group {...props} dispose={null}>
      
      <mesh
       castShadow
       receiveShadow
       geometry={nodes.Arcade.geometry}
       material={materials.Arcade}
      >
        <Annotation 
        position={[65, 120,-60]}
        onClick={Arcade}>
         <span style={{ fontSize: '1.5em' }}>🎮</span>
        </Annotation>
      </mesh>
       
      
      
      <mesh onClick={Pecera}
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Pecera_G.geometry}
        material={glassMaterial}
      />
      <mesh onClick={PUD}
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Pud.geometry}
        material={glassMaterial}
      />
      
    </group>
  ); 
}


useGLTF.preload("/models/AssetsRoom.gltf");
