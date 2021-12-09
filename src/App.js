import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Canvas, useFrame } from '@react-three/fiber'
import BackgroundShapes from './BackgroundShapes'
import Light from './Light'
import Background from './Background'
import Menu from './Menu'
import { connect } from 'react-redux'
import { useHotkeys } from 'react-hotkeys-hook'

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
  cursor: PropTypes.object,
  dispatch: PropTypes.func,
}
function App(props) {
  const spotLightTarget = React.useRef()
  const lightRef = React.useRef()
  useHotkeys('space', () => props.dispatch({ type: 'theme/switch' }))

  React.useEffect(() => {
    if(!lightRef.current || !spotLightTarget.current) return
    lightRef.current.target = spotLightTarget.current
  }, [lightRef, spotLightTarget])

  React.useEffect(() => props.dispatch({ type: 'locale/update' }), [navigator.language])
  
  const raytracedCursor = Object.values(props.cursor).sort((a,b) => b.added - a.added)[0]?.cursor

  return (
    <Canvas camera={{ fov: 60 }} style={{ cursor: raytracedCursor ?? 'auto' }}>
      <Background theme={props.theme} />
      <Light />
      <BackgroundShapes />
      <Menu />
    </Canvas>
  )
}

export default connect(state => ({ theme: state.theme, cursor: state.cursor }))(App)
