import React from 'react'
import PropTypes from 'prop-types'
import { useThree } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three'
import { useRedux } from '../utils'
import { useSpring, animated } from '@react-spring/three'

export default function Light() {
  const { theme } = useRedux(state => ({ theme: state.theme }))
  const { intensisty } = useSpring({ intensisty: theme === 'light' ? 0.3 : 1 })

  return (
    <>
      <LightSource from={[0, 0, 0]} to={[0, 0, -10]} intensity={intensisty} />
      <LightSource from={[10, 10, 0]} to={[0, 0, -10]} intensity={1.15} />
      <LightSource from={[-10, 10, 0]} to={[0, 0, -10]} intensity={1.25} />
      <LightSource from={[10, -10, 0]} to={[0, 0, -10]} intensity={1.15} />
      <LightSource from={[-10, -10, 0]} to={[0, 0, -10]} intensity={1.15} />
    </>
  )
}

LightSource.propTypes = {
  from: PropTypes.array,
  to: PropTypes.array,
  angle: PropTypes.number,
  distance: PropTypes.number,
  debug: PropTypes.bool,
  intensity: PropTypes.any,
}
function LightSource(props) {
  const lightRef = React.useRef()
  const targetRef = React.useRef()
  const { scene } = useThree()

  React.useEffect(() => void (lightRef.current.target = targetRef.current), [scene])
  props.debug && useHelper(lightRef, SpotLightHelper, 'teal')

  return (
    <>
      <animated.spotLight
        position={props.from}
        ref={lightRef}
        angle={props.angle ?? 10}
        distance={props.distance}
        intensity={props.intensity}
      />
      <object3D ref={targetRef} position={props.to}/>
    </>
  )
}
