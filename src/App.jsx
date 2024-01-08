import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Camera from "./components/Camera"
import { BaseRoom } from "./components/BaseRoom"
import Light from "./components/Light"
import { AssetsRoom } from "./components/AssetsRoom" 
import './App.css'

const App = () => {

  const canvasStyle = {
    background: "#0c0d0d", //Canvas Color
  };

  return (
    <Canvas style={canvasStyle}>
      <Camera/>
      <Light/>
      <BaseRoom/>
      <AssetsRoom/>
      <OrbitControls/>

    </Canvas>
  )
}

export default App
