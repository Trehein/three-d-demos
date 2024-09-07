// import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'

const FirstScene: React.FC = () => {
  // const cameraPosition = {
  //   fov: 75, 
  //   near: 0.1, 
  //   far: 1000,
  //   postion: [1000, 50, 5]
  // }

  const [active, setActive] = useState(false)

  return (
    <div id='canvas-container'>
      <Canvas
        // camera={cameraPosition}
      >
        <mesh scale={active ? 1.5 : 1} onClick={() => setActive(!active)}>
          {/* <boxGeometry args={[2,2,2]} /> */}
          {/* <octahedronGeometry args={[2,4]} /> */}
          <sphereGeometry />
          <meshPhongMaterial color="royalblue" />        
        </mesh>
        <ambientLight intensity={0.2} />
        <directionalLight color="white" position={[0, 50, 25]} />
      </Canvas>
    </div>
  )
}

export default FirstScene