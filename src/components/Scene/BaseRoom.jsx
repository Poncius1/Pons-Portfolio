/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import * as THREE from 'three';
import { useGLTF, useTexture} from "@react-three/drei";


export function BaseRoom(props) {
  const { nodes, materials } = useGLTF("/models/BaseRoom.gltf");
  
  const createTexture = (path) => {
    const texture = useTexture(path);
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;
    return texture;
  };
  
  // Textures
  const baseTexture = createTexture("/texture/BaseRoom.png");
  const secondFloorTexture = createTexture("/texture/SegundoPiso.png");
  const desktopTexture = createTexture("/texture/Desktop.png");
  const terrariumTexture = createTexture("/texture/Peceras.png");


  // Change Materials
  materials.CuartoBase.map = baseTexture;
  materials.Desktop.map = desktopTexture;
  materials.SegundoPiso.map = secondFloorTexture;
  materials.Pecera.map = terrariumTexture;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.alacena.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cojin1.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cojin2.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cojin3.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.escaleras_puerta.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Manijas.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Marco_Puerta.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Marco_Ventana.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pared_D.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pared_izq.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Piso.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Puerta.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sillon.geometry}
        material={materials.CuartoBase}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.almohada.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.almohada1.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colchon.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cuarto.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.escaleras_cuarto.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.escaleras_pared.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.librero.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pared.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SegundoPiso.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TerrarioGrande.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tierra_A001.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo_Abajo.geometry}
        material={materials.SegundoPiso}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.escritorio.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata1.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata2.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata3.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata4.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata5.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata6.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata7.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata8.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lata9.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Marco_Monitores001.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouse001.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PC1001.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PC2001.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface133.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface136.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ps4001.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Refri_Marco.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Repisa_Grande002.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Repisa_Grande1.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Repisa_Grande2.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Silla002.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclado001.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Xbox360001.geometry}
        material={materials.Desktop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pecera1.geometry}
        material={materials.Pecera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tapas_G.geometry}
        material={materials.Pecera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tierra_G001.geometry}
        material={materials.Pecera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tierra_P001.geometry}
        material={materials.Pecera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trunks00001.geometry}
        material={materials.Pecera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trunks01002.geometry}
        material={materials.Pecera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trunks01003.geometry}
        material={materials.Pecera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trunks03002.geometry}
        material={materials.Pecera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trunks03003.geometry}
        material={materials.Pecera}
      /> 
    </group>
  );
}
 
useGLTF.preload("/models/BaseRoom.gltf");
