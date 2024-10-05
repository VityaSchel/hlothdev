import { useThree, useFrame } from '@react-three/fiber'
import { useSpring } from '@react-spring/three'
import { layouts } from './Menu'
import { useAppSelector } from '@/store/hooks'
import { selectRoute } from '@/store/reducers/route'
import { selectLayout } from '@/store/reducers/layout'
import { debug } from '@/App'
import React from 'react'

export default function Camera() {
  const { route } = useAppSelector(selectRoute)
  const { state: layout } = useAppSelector(selectLayout)
  const { camera } = useThree()

  const defaultPosition = [0, 0, 5]
  const position = layouts[layout][route as 'me' | 'portfolio']
  const offset = layouts[layout].offset
  const wideCard = ['me', 'portfolio'].includes(route)
  const { cameraPosition } = useSpring({
    cameraPosition: position ? [
      (position[0] + offset[0])*2 + (wideCard ? -1 : -2),
      (position[1] + offset[1])*2,
      -2
    ] : defaultPosition
  })

  useFrame(() => {
    const [x, y, z] = cameraPosition.get()
    if(debug) return
    Object.assign(camera.position, { x, y, z })
  })

  React.useEffect(() => {
    camera.layers.enable(1)
    camera.layers.enable(2)
  }, [])

  return (
    <></>
  )
}
