import React, { Suspense } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Raycaster } from 'three'
import { useRedux, applyMaterial, color } from 'utils'
import { animated, useSpring } from '@react-spring/three'

const generateSwitches = () => [
  Math.round(Math.random()),
  Math.round(Math.random()),
  Math.round(Math.random()),
]

type BackgroundShapesProps = {
  render?: boolean;
};

function BackgroundShapes(props: BackgroundShapesProps) {
  const { layout } = useRedux(state => ({
    layout: state.layout
  }))

  const shapes = {
    wide: {
      icosphere: { x: 0.7, y: -0.6, z: 10 },
      cube: { x: 0.3, y: -0.8 },
      palka: { x: -0.3, y: 0.8 },
      pyramid: { x: 0.7, y: 0.6 },
      sphere: { x: -0.8, y: 0.5 },
      tetris: { x: -0.75, y: -0.8, z: 12 },
    },
    tall: {
      icosphere: { x: 0.65, y: -0.9, z: 12 },
      cube: { x: 0, y: -0.9 },
      palka: { x: 0, y: 0.9 },
      pyramid: { x: 0.65, y: 0.9 },
      sphere: { x: -0.8, y: 0.9 },
      tetris: { x: -1, y: -0.9, z: 12 },
    }
  }

  return (
    Object.entries(shapes[layout]).map(([url, position], i) =>
      <Shape url={`/static/models/background/${url}.glb`} position={position} key={i} render={props.render} />
    )
  )
}

const Shape = props => (
  <Suspense fallback={null}>
    <ShapeModel {...props} />
  </Suspense>
)

type ShapeModelProps = {
  position?: object;
  url?: string;
  render?: unknown;
};

function ShapeModel(props: ShapeModelProps) {
  const [accelerationSwitch, setAccelerationSwitch] = React.useState(generateSwitches())
  const [acceleration, setAcceleration] = React.useState([0, 0, 0])
  const object = React.useRef()
  const shape = useLoader(GLTFLoader, props.url)
  const raycaster = React.useMemo(() => new Raycaster(), [])
  const { theme } = useRedux(state => ({ theme: state.theme }))
  const { shapeColor } = useSpring({ shapeColor: theme === 'light' ? 2.5 : 0.06 })
  const { shapeOpacity } = useSpring({ from: { shapeOpacity: 0 }, to: { shapeOpacity: 1 } })

  const accelerationLimit = 0.001
  useFrame(({ camera }) => {
    if(!props.render) return

    raycaster.setFromCamera(props.position, camera)
    const corrections = { x: 0.5, y: 0, z: -2 }
    raycaster.ray.at(props.position.z ?? 20, object.current.position)
    object.current.position.x += corrections.x
    object.current.position.y += corrections.y
    object.current.position.z += corrections.z

    object.current.rotation.x += acceleration[0]
    object.current.rotation.y += acceleration[1]
    object.current.rotation.z += acceleration[2]

    accelerationSwitch.forEach((switchValue, i) => {
      const curAcceleration = Math.max(0, acceleration[i]*switchValue + accelerationLimit)
      const maxAcceleration = accelerationLimit*2

      if(curAcceleration < maxAcceleration) acceleration[i] += 0.00001*switchValue
      setAcceleration(acceleration)
    })

    if(Math.random() < 0.001) { // 1/1000
      setAccelerationSwitch(generateSwitches())
    }
  })

  return (
    <animated.primitive
      ref={object}
      object={shape.scene}
      {...applyMaterial(shape.scene, {
        '': { opacity: shapeOpacity, ...color(shapeColor) }
      })}
      {...props}
    />
  )
}

export default BackgroundShapes