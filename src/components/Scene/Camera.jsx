import React from 'react'
import {PerspectiveCamera} from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera
    makeDefault
    far={500}
    zoom={1.2}
    position={[140.42,50,146]} 
    fov={60}/>
    
  )

}

export default Camera