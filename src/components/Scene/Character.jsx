/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from 'react'
import * as THREE from 'three';
import { useGLTF, useAnimations,useTexture } from '@react-three/drei'


export function Character(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/Character.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(()=>{
    actions.idle.play()
  })

  const createTexture = (path) => {
    const texture = useTexture(path);
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;
    return texture;
  };
  const characterTexture = createTexture("/texture/Aclas.png");
  materials.Material.map = characterTexture;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Rig"
          position={[27.541, 26.973, 28.03]}
          rotation={[0, 0.783, 0]}
          scale={21.015}>
          <skinnedMesh
            name="BaseMesh"
            geometry={nodes.BaseMesh.geometry}
            material={materials.Material}
            skeleton={nodes.BaseMesh.skeleton}
          />
          <skinnedMesh
            name="Pantalon"
            geometry={nodes.Pantalon.geometry}
            material={materials.Material}
            skeleton={nodes.Pantalon.skeleton}
          />
          <skinnedMesh
            name="Playera"
            geometry={nodes.Playera.geometry}
            material={materials.Material}
            skeleton={nodes.Playera.skeleton}
          />
          <primitive object={nodes._rootJoint} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/Character.glb')