import React from 'react'
import Camera from "./Scene/Camera"
import { BaseRoom } from "./Scene/BaseRoom"
import Light from "./Scene/Light"
import { AssetsRoom } from "./Scene/AssetsRoom" 
const Scene = () => {
  

  return (
    <>
    <Camera />
    <Light />
    <BaseRoom />
    <AssetsRoom />
    </>
  )
}

export default Scene