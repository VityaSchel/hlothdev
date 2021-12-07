import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Canvas, useFrame } from '@react-three/fiber'
import BackgroundShapes from './BackgroundShapes'
import Light from './Light'
import { connect } from 'react-redux'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = React.useRef()
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
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

App.propTypes = {
  theme: PropTypes.string,
}
function App(props) {
  const spotLightTarget = React.useRef()
  const lightRef = React.useRef()

  React.useEffect(() => {
    if(!lightRef.current || !spotLightTarget.current) return
    lightRef.current.target = spotLightTarget.current
  }, [lightRef, spotLightTarget])

  return (
    <Canvas camera={{ fov: 60 }}>
      {props.theme === 'dark' && <color attach='background' args={['black']} />}
      <Light />
      <BackgroundShapes />
    </Canvas>
  )
}

export default connect(state => ({ theme: state.theme }))(App)
