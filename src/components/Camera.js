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
  const { cameraPosition } = useSpring({
    cameraPosition: position ? [position[0]*2-1, position[1]*2, -1.5] : defaultPosition
  })

  useFrame(() => {
    const [x, y, z] = cameraPosition.get()
    Object.assign(camera.position, { x, y, z })
  })

  return (
    <></>
  )
}
