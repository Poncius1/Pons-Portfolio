import React from 'react'
import {PerspectiveCamera} from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera
    makeDefault  
    position={[122,76,124]} 
    fov={60}/>
    
  )

}

export default Camera