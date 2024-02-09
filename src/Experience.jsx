import * as THREE from 'three';
import { Suspense} from 'react';
import { Canvas, } from "@react-three/fiber"
import { Stats,OrbitControls, Loader } from "@react-three/drei"
import Camera from "./components/Camera"
import { BaseRoom } from "./components/BaseRoom"
import Light from "./components/Light"
import { AssetsRoom } from "./components/AssetsRoom" 
import './style.css'
import { MeScreens } from './components/MeScreens';
import { Arcade } from './components/Arcade';
import { PcScreen } from './components/PcScreen';
import LoadingScreen from './components/LoadingScreen';
import { Interactables } from './components/Interactables';
import AboutMe from './components/AboutMe';
const Experience = () => {
  
  return (
    <Canvas className='canvas-container'
    
      gl={{
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
      }}
    >
      <Suspense fallback={<LoadingScreen/>}>
      <Camera/>
      <Light/>
      <BaseRoom/>
      <AssetsRoom/>
      <Interactables/>
      <Arcade/>
      <MeScreens/>
      <PcScreen/>
      <AboutMe/>
      <OrbitControls
         makeDefault
         enabled = {true}
         minAzimuthAngle={0}
         maxAzimuthAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 10}
         maxPolarAngle={Math.PI - Math.PI / 2}
         enableZoom={true}
         enablePan={true}
         zoomSpeed={0.3}
        
      />
      
      </Suspense>
      
    </Canvas>
    
  )
}

export default Experience
