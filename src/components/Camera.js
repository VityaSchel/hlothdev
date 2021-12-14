import React from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { useRedux } from '../utils'

export default function Camera() {
  const { route } = useRedux(state => ({ route: state.route }))
  const { camera } = useThree()

  const defaultPosition = [0, 0, 5]
  const cameraPositions = {
    '': defaultPosition,

  }
  const { cameraPosition } = useSpring({
    cameraPosition: cameraPositions[route] ?? defaultPosition
  })

  useFrame(() => {
    const [x, y, z] = cameraPosition.get()
    Object.assign(camera.position, { x, y, z })
  })

  return (
    <></>
  )
}
