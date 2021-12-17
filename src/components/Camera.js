import { useThree, useFrame } from '@react-three/fiber'
import { useSpring } from '@react-spring/three'
import { useRedux } from '../utils'
import { layouts } from './Menu'

export default function Camera() {
  const { route, layout } = useRedux(state => ({
    route: state.route,
    layout: state.layout
  }))
  const { camera } = useThree()

  const defaultPosition = [0, 0, 5]
  const position = layouts[layout][route]
  const offset = layouts[layout].offset
  const wideCard = ['me', 'projects'].includes(route)
  const { cameraPosition } = useSpring({
    cameraPosition: position ? [
      (position[0] + offset[0])*2 + (wideCard ? -1 : -2),
      (position[1] + offset[1])*2,
      -2
    ] : defaultPosition
  })

  useFrame(() => {
    const [x, y, z] = cameraPosition.get()
    Object.assign(camera.position, { x, y, z })
  })

  return (
    <></>
  )
}
