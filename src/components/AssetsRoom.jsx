/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import * as THREE from 'three';
import { useGLTF, useTexture} from "@react-three/drei";

export function AssetsRoom(props) {
  const { nodes, materials } = useGLTF("/models/AssetsRoom.gltf");
  
  
  //PropsTexture
  const propsTexture = useTexture("/texture/Props.png")
  propsTexture.flipY = false;
  propsTexture.encoding = THREE.sRGBEncoding

  //PudTexture
  const pudTexture = useTexture("/texture/Pud.png")
  pudTexture.flipY = false;
  pudTexture.encoding = THREE.sRGBEncoding

   //PudTexture
   const arcadeTexture = useTexture("/texture/Arcade.png")
   arcadeTexture.flipY = false;
   arcadeTexture.encoding = THREE.sRGBEncoding
   
   //PostersTexture
   const postersTexture = useTexture("/texture/Posters.png")
   postersTexture.flipY = false;
   postersTexture.encoding = THREE.sRGBEncoding

   //PlantsTexture
   const plantsTexture = useTexture("/texture/Plants.png")
   plantsTexture.flipY = false;
   plantsTexture.encoding = THREE.sRGBEncoding

   //BuzzTexture
   const buzzTexture = useTexture("/texture/Buzz.png")
   buzzTexture.flipY = false;
   buzzTexture.encoding = THREE.sRGBEncoding

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
  materials.Props.map = propsTexture
  materials.PUD.map = pudTexture
  materials.Arcade.map = arcadeTexture
  materials.Poster.map = postersTexture
  materials.Plants.map = plantsTexture
  materials.Buzz.map = buzzTexture

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blonde.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circles.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MF_Doom.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Minecraft.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poster_Largo.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tablero_Basket.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TerarioPequeño.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TerrarioGrande001.geometry}
        material={materials.Poster}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2001"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2002"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2003"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2004"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2005"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A001"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A002"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A003"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A004"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A005"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A006"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A007"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A008"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A009"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A010"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A011"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A012"].geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maceta.geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maceta1.geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maceta2.geometry}
        material={materials.Plants}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotonD.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotonD001.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotonD002.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Botones.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Botones001.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monedas.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palanca.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palanca001.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arcade.geometry}
        material={materials.Arcade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder50001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder51001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder52001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder53001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder54001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder55001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder56001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder57001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder58001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder59001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder60001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder61001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder62001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder63001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder64001.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder65002.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder65003.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plataforma.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface107.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tapa.geometry}
        material={materials.PUD}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Aro001.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book004.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book006.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book007.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book009.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book010.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book011.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book012.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CajaRadianita.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Espada3.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pizarron.geometry}
        material={materials.Props}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buzz_lightyear.geometry}
        material={materials.Buzz}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Esquina.geometry}
        material={glassMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Pecera_CH.geometry}
        material={glassMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Pecera_G.geometry}
        material={glassMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Pud.geometry}
        material={glassMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Refrigerador_Cristal_.geometry}
        material={glassMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillo.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillo001.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillo002.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillo003.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillos.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo001.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo002.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo003.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo004.geometry}
        material={materials.PUD}
        position={[0.204, -0.008, -0.08]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cables001.geometry}
        material={materials.PUD}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/AssetsRoom.gltf");
