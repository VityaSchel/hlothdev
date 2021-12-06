import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import BackgroundShapes from './BackgroundShapes'
// import Cards from './Cards'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas camera={{ fov: 60 }}>
      <spotLight intensity={0.5} position={[-15, 10, -10]} angle={1.5} rotation={[90, 90, 90]} />
      <spotLight intensity={0.5} position={[15, -10, -10]} angle={1.5} rotation={[90, 90, 90]} />
      <spotLight intensity={0.5} position={[0, 20, -10]} angle={1.5} rotation={[90, 90, 90]} />
      <pointLight position={[0, 0, 0]} />
      <BackgroundShapes />
    </Canvas>
  )
}

export default App
