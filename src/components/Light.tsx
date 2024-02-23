import React from 'react'
import { useThree } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three'
import { useSpring, animated } from '@react-spring/three'
import { useAppSelector } from '@/store/hooks'
import { selectTheme } from '@/store/reducers/theme'

export default function Light() {
  const { theme } = useAppSelector(selectTheme)
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

type LightSourceProps = {
  from?: unknown[];
  to?: unknown[];
  angle?: number;
  distance?: number;
  debug?: boolean;
  intensity?: any;
};

function LightSource(props: LightSourceProps) {
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
