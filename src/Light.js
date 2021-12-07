import React from 'react'
import PropTypes from 'prop-types'
import { useThree } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three'

export default function Light() {
  return (
    <>
      <LightSource from={[0, 0, 0]} to={[0, 0, -10]} angle={10} />
      {/*<spotLight intensity={0.5} position={[-15, 10, -10]} angle={1.5} rotation={[90, 90, 90]} />
      <spotLight intensity={0.7} position={[15, -10, -10]} angle={1.5} rotation={[90, 90, 90]} />
      <spotLight intensity={0.5} position={[0, 20, -10]} angle={1.5} rotation={[90, 90, 90]} />
      <spotLight position={[0, 0, 0]} ref={lightRef} angle={180} intensity={0.5} />
      <object3D ref={spotLightTarget} position={[0, 0, -10]}/>
      <pointLight position={[-15, -15, -10]} intensity={0.2} />*/}
    </>
  )
}

LightSource.propTypes = {
  from: PropTypes.array,
  to: PropTypes.array,
  angle: PropTypes.number,
  distance: PropTypes.number,
}
function LightSource(props) {
  const lightRef = React.useRef()
  const targetRef = React.useRef()
  const { scene } = useThree()

  // React.useEffect(() => {
  //   if(!lightRef.current || !targetRef.current) return
  //   lightRef.current.target = targetRef.current
  // }, [lightRef, targetRef])

  React.useEffect(() => void (lightRef.current.target = targetRef.current), [scene])
  useHelper(lightRef, SpotLightHelper, 'teal')

  return (
    <>
      <spotLight position={props.from} ref={lightRef} angle={props.angle} distance={props.distance} />
      {/*{lightRef.current && <directionalLightHelper args={[lightRef.current]} />}*/}
      <object3D ref={targetRef} position={props.to}/>
      {/*<mesh ref={targetRef} position={[0, 2, 0]} castShadow>
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="lightblue" />
      </mesh>*/}
    </>
  )
}
