import React from 'react'
import {PerspectiveCamera} from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera
    makeDefault  
    position={[163,150,157]}
    fov={75}/>
    
  )

}

export default Camera