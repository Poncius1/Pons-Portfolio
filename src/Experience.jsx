import * as THREE from 'three';
import { Suspense} from 'react';
import { Canvas, } from "@react-three/fiber"
import { Stats,OrbitControls } from "@react-three/drei"
import LoadingScreen from './components/LoadingScreen';
import Screens from './components/Screens';
import { Interactables } from './components/Interactables';
import Scene from './components/Scene';
import './style.css'
import StartSection from './components/StartSection';



const Experience = () => {
  
  return (
    <><Canvas className='canvas-container'

      gl={{
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
      }}
    >
      <Suspense fallback={<LoadingScreen />}>
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
          enablePan={true}
          zoomSpeed={0.3} />
        <Stats />
      </Suspense>

    </Canvas><StartSection/></>
  )
}

export default Experience
