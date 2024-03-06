import React from 'react'
import {PerspectiveCamera} from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera
    makeDefault  
    position={[136.21,48.97,134]} 
    fov={60}/>
    
  )

}

export default Camera