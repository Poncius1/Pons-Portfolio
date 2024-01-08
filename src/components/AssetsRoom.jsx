/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import * as THREE from 'three';
import { useGLTF, useTexture} from "@react-three/drei";

export function AssetsRoom(props) {
  const { nodes, materials } = useGLTF("public/models/AssetsRoom.gltf");
  
  
  //PropsTexture
  const propsTexture = useTexture("public/texture/Props.png")
  propsTexture.flipY = false;
  propsTexture.encoding = THREE.sRGBEncoding

  //PudTexture
  const pudTexture = useTexture("public/texture/Pud.png")
  pudTexture.flipY = false;
  pudTexture.encoding = THREE.sRGBEncoding

   //PudTexture
   const arcadeTexture = useTexture("public/texture/Arcade.png")
   arcadeTexture.flipY = false;
   arcadeTexture.encoding = THREE.sRGBEncoding
   
   //PostersTexture
   const postersTexture = useTexture("public/texture/Posters.png")
   postersTexture.flipY = false;
   postersTexture.encoding = THREE.sRGBEncoding

   //PlantsTexture
   const plantsTexture = useTexture("public/texture/Plants.png")
   plantsTexture.flipY = false;
   plantsTexture.encoding = THREE.sRGBEncoding

   //BuzzTexture
   const buzzTexture = useTexture("public/texture/Buzz.png")
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
        position={[-1.15, 0.673, -0.562]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circles.geometry}
        material={materials.Poster}
        position={[-0.27, 0.747, -1.183]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MF_Doom.geometry}
        material={materials.Poster}
        position={[-1.365, 2.106, 1.098]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Minecraft.geometry}
        material={materials.Poster}
        position={[-1.368, 1.807, -0.106]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Poster}
        position={[-0.637, 1.959, -1.291]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.Poster}
        position={[-0.769, 1.894, -1.291]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials.Poster}
        position={[-0.767, 2.001, -1.288]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials.Poster}
        position={[-0.894, 1.96, -1.291]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poster_Largo.geometry}
        material={materials.Poster}
        position={[0.227, 0.723, -1.294]}
        rotation={[Math.PI / 2, -0.006, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tablero_Basket.geometry}
        material={materials.Poster}
        position={[1.142, 2.203, -1.296]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TerarioPequeño.geometry}
        material={materials.Poster}
        position={[-1.263, 1.741, 0.192]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TerrarioGrande001.geometry}
        material={materials.Poster}
        position={[-1.32, 1.723, 0.866]}
        rotation={[1.581, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2"].geometry}
        material={materials.Plants}
        position={[-1.224, 0.479, -0.869]}
        rotation={[-1.735, -0.169, -2.587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2001"].geometry}
        material={materials.Plants}
        position={[-1.158, 0.556, -0.976]}
        rotation={[1.504, -1.418, 1.317]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2002"].geometry}
        material={materials.Plants}
        position={[-1.002, 0.554, -1.044]}
        rotation={[-1.249, -1.136, -1.815]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2003"].geometry}
        material={materials.Plants}
        position={[-0.903, 0.363, -1.21]}
        rotation={[-0.966, -0.589, -0.879]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2004"].geometry}
        material={materials.Plants}
        position={[-0.946, 0.334, -1.169]}
        rotation={[0.873, -0.25, -0.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2005"].geometry}
        material={materials.Plants}
        position={[-1.075, 0.347, -1.051]}
        rotation={[0.873, -0.25, -0.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A"].geometry}
        material={materials.Plants}
        position={[-1.218, 1.667, 1.016]}
        rotation={[-2.832, 0.24, -2.269]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A001"].geometry}
        material={materials.Plants}
        position={[-1.204, 1.655, 0.925]}
        rotation={[-2.832, 0.24, -2.269]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A002"].geometry}
        material={materials.Plants}
        position={[-1.264, 1.729, 0.87]}
        rotation={[2.645, 0.365, -2.582]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A003"].geometry}
        material={materials.Plants}
        position={[-1.279, 1.707, 0.783]}
        rotation={[2.391, 0.365, -2.582]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A004"].geometry}
        material={materials.Plants}
        position={[-1.249, 1.656, 0.803]}
        rotation={[2.759, -0.787, -3.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A005"].geometry}
        material={materials.Plants}
        position={[-1.242, 1.678, 0.883]}
        rotation={[2.759, -0.787, -3.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A006"].geometry}
        material={materials.Plants}
        position={[-1.235, 1.694, 0.958]}
        rotation={[-2.832, 0.24, -2.269]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A007"].geometry}
        material={materials.Plants}
        position={[-1.208, 1.701, 0.238]}
        rotation={[3.089, -0.509, -2.368]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A008"].geometry}
        material={materials.Plants}
        position={[-1.22, 1.777, 0.193]}
        rotation={[3.095, 0.128, -2.337]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A009"].geometry}
        material={materials.Plants}
        position={[-1.22, 1.743, 0.172]}
        rotation={[3.095, 0.128, -2.337]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A010"].geometry}
        material={materials.Plants}
        position={[-1.217, 1.705, 0.167]}
        rotation={[2.86, 0.132, -2.914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A011"].geometry}
        material={materials.Plants}
        position={[-1.203, 1.68, 0.159]}
        rotation={[2.018, 0.351, -2.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4A012"].geometry}
        material={materials.Plants}
        position={[-1.241, 1.71, 0.208]}
        rotation={[-3.112, 0.359, -2.691]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maceta.geometry}
        material={materials.Plants}
        position={[-0.487, 1.441, -1.13]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maceta1.geometry}
        material={materials.Plants}
        position={[0.798, 0.262, -0.455]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.maceta2.geometry}
        material={materials.Plants}
        position={[-1.226, 0.236, 1.408]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotonD.geometry}
        material={materials.Arcade}
        position={[1.164, 1.593, -0.844]}
        rotation={[Math.PI / 2, 0, -0.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotonD001.geometry}
        material={materials.Arcade}
        position={[1.164, 1.571, -0.844]}
        rotation={[Math.PI / 2, 0, -0.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BotonD002.geometry}
        material={materials.Arcade}
        position={[1.164, 1.55, -0.844]}
        rotation={[Math.PI / 2, 0, -0.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Botones.geometry}
        material={materials.Arcade}
        position={[1.121, 1.661, -0.888]}
        rotation={[1.704, -0.046, -0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Botones001.geometry}
        material={materials.Arcade}
        position={[1.252, 1.661, -0.935]}
        rotation={[1.704, -0.046, -0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monedas.geometry}
        material={materials.Arcade}
        position={[1.203, 1.577, -0.849]}
        rotation={[Math.PI / 2, 0, -0.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palanca.geometry}
        material={materials.Arcade}
        position={[1.072, 1.686, -0.869]}
        rotation={[Math.PI / 2, 0, -0.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palanca001.geometry}
        material={materials.Arcade}
        position={[1.202, 1.686, -0.915]}
        rotation={[Math.PI / 2, 0, -0.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arcade.geometry}
        material={materials.Arcade}
        position={[1.137, 1.681, -0.987]}
        rotation={[Math.PI / 2, 0, -0.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.PUD}
        position={[0.508, 0.347, 0.506]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder50001.geometry}
        material={materials.PUD}
        position={[-1.261, 1.754, -1.154]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder51001.geometry}
        material={materials.PUD}
        position={[-1.261, 1.754, -1.171]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder52001.geometry}
        material={materials.PUD}
        position={[-1.261, 1.754, -1.187]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder53001.geometry}
        material={materials.PUD}
        position={[-1.345, 1.622, -0.79]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder54001.geometry}
        material={materials.PUD}
        position={[-1.34, 1.622, -0.784]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder55001.geometry}
        material={materials.PUD}
        position={[-1.345, 1.622, -0.778]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder56001.geometry}
        material={materials.PUD}
        position={[-1.34, 1.622, -0.77]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder57001.geometry}
        material={materials.PUD}
        position={[-1.356, 1.794, -0.597]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder58001.geometry}
        material={materials.PUD}
        position={[-1.356, 1.794, -0.615]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder59001.geometry}
        material={materials.PUD}
        position={[-1.356, 1.794, -0.583]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder60001.geometry}
        material={materials.PUD}
        position={[-1.366, 1.794, -0.508]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder61001.geometry}
        material={materials.PUD}
        position={[-1.366, 1.794, -0.489]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder62001.geometry}
        material={materials.PUD}
        position={[-1.348, 1.813, -0.47]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder63001.geometry}
        material={materials.PUD}
        position={[-1.365, 1.698, -0.747]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder64001.geometry}
        material={materials.PUD}
        position={[-1.341, 1.698, -0.759]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder65002.geometry}
        material={materials.PUD}
        position={[-1.305, 1.667, -0.766]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder65003.geometry}
        material={materials.PUD}
        position={[-1.299, 1.671, -0.926]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plataforma.geometry}
        material={materials.PUD}
        position={[0.505, 0.172, 0.505]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface107.geometry}
        material={materials.PUD}
        position={[0.127, 0.221, 0.495]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tapa.geometry}
        material={materials.PUD}
        position={[0.523, 1.351, 0.511]}
        rotation={[Math.PI / 2, 0, -1.839]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Aro001.geometry}
        material={materials.Props}
        position={[1.154, 2.148, -1.212]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book004.geometry}
        material={materials.Props}
        position={[-1.285, 1.976, 0.618]}
        rotation={[0, 1.172, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book006.geometry}
        material={materials.Props}
        position={[-1.285, 2.005, 0.617]}
        rotation={[0, 1.172, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book007.geometry}
        material={materials.Props}
        position={[-1.284, 1.991, 0.611]}
        rotation={[Math.PI, 1.059, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book009.geometry}
        material={materials.Props}
        position={[-1.285, 2.041, 0.76]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book010.geometry}
        material={materials.Props}
        position={[-1.283, 2.039, 0.74]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book011.geometry}
        material={materials.Props}
        position={[-1.285, 2.043, 0.729]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book012.geometry}
        material={materials.Props}
        position={[-1.281, 2.042, 0.712]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CajaRadianita.geometry}
        material={materials.Props}
        position={[-1.29, 2.001, 0.445]}
        rotation={[Math.PI / 2, 0, 1.634]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Props}
        position={[-1.264, 2.097, 0.171]}
        rotation={[0, 0.703, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.Props}
        position={[-1.046, 1.672, -1.095]}
        rotation={[0, 0.32, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Espada3.geometry}
        material={materials.Props}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pizarron.geometry}
        material={materials.Props}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buzz_lightyear.geometry}
        material={materials.Buzz}
        position={[-1.297, 1.974, 0.922]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Esquina.geometry}
        material={glassMaterial}
        position={[-0.873, 0.691, -0.806]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Pecera_CH.geometry}
        material={glassMaterial}
        position={[-1.214, 1.74, 0.193]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Pecera_G.geometry}
        material={glassMaterial}
        position={[-1.191, 1.719, 0.868]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cristal_Pud.geometry}
        material={glassMaterial}
        position={[0.508, 0.805, 0.506]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Refrigerador_Cristal_.geometry}
        material={glassMaterial}
        position={[-1.154, 1.499, 0.204]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillo.geometry}
        material={materials.PUD}
        position={[0.587, 0.225, 0.153]}
        rotation={[Math.PI / 2, 0, -2.926]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillo001.geometry}
        material={materials.PUD}
        position={[0.196, 0.225, 0.323]}
        rotation={[Math.PI / 2, 0, 2.1]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillo002.geometry}
        material={materials.PUD}
        position={[0.867, 0.225, 0.465]}
        rotation={[Math.PI / 2, 0, -1.672]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillo003.geometry}
        material={materials.PUD}
        position={[0.654, 0.225, 0.836]}
        rotation={[Math.PI / 2, 0, -0.417]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tornillos.geometry}
        material={materials.PUD}
        position={[0.238, 0.225, 0.746]}
        rotation={[Math.PI / 2, 0, 0.835]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo001.geometry}
        material={materials.PUD}
        position={[0.351, 0.218, 0.151]}
        rotation={[Math.PI / 2, 0, 2.709]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo002.geometry}
        material={materials.PUD}
        position={[0.801, 0.218, 0.251]}
        rotation={[Math.PI / 2, 0, -2.305]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo003.geometry}
        material={materials.PUD}
        position={[0.842, 0.218, 0.704]}
        rotation={[Math.PI / 2, 0, -1.045]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo004.geometry}
        material={materials.PUD}
        position={[0.427, 0.218, 0.885]}
        rotation={[Math.PI / 2, 0, 0.209]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cables001.geometry}
        material={materials.PUD}
        position={[-0.251, 0.205, 0.007]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("public/models/AssetsRoom.gltf");
