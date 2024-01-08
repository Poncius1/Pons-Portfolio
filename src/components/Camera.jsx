import React from 'react'
import {PerspectiveCamera} from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera
    makeDefault  
    position={[3,3,3]}
    fov={40}/>
  )
}

export default Camera