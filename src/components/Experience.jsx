
import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, } from "@react-three/fiber"
import { Stats,OrbitControls } from "@react-three/drei"
import Screens from './Screens';
import { Interactables } from './Interactables';
import Scene from './Scene';



const Experience = () => {
  

  return (
    <Canvas className='canvas-container'
      gl={{
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
      }}
    >
        <Scene />
        <Screens />
        <Interactables />

        <OrbitControls
          makeDefault
          target={[0,50,0]}
          enabled={true}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 10}
          maxPolarAngle={Math.PI - Math.PI / 2}
          enableZoom={true}
          enablePan={false} 
          zoomSpeed={0.3} />
        <Stats />
    </Canvas>
  )
}

export default Experience
