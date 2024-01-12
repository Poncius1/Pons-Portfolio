import * as THREE from 'three';
import { Canvas } from "@react-three/fiber"
import { Stats,OrbitControls } from "@react-three/drei"
import Camera from "./components/Camera"
import { BaseRoom } from "./components/BaseRoom"
import Light from "./components/Light"
import { AssetsRoom } from "./components/AssetsRoom" 
import './style.css'
import { MeScreens } from './components/MeScreens';
import { Arcade } from './components/Arcade';

const Experience = () => {

  return (
    <Canvas className='canvas-container'
    
      gl={{
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
      }}
    >

      <Camera/>
      <Light/>
      <BaseRoom/>
      <AssetsRoom/>
      <MeScreens/>
      <Arcade/>
      <axesHelper args={[5]} />

      <OrbitControls
         minAzimuthAngle={-Math.PI / 13}
         maxAzimuthAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 10}
         maxPolarAngle={Math.PI - Math.PI / 2}
      />


    </Canvas>
  )
}

export default Experience