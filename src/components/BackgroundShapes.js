import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Raycaster } from 'three'
import { useRedux, transition } from 'utils'

const generateSwitches = () => [
  Math.round(Math.random()),
  Math.round(Math.random()),
  Math.round(Math.random()),
]

export default function BackgroundShapes() {
  return (
    <Suspense fallback={null}>
      <Shape url='/models/background/icosphere.glb' position={{ x: 0.6, y: -0.6, z: 10 }} />
      <Shape url='/models/background/cube.glb' position={{ x: 0.2, y: -0.8 }} />
      <Shape url='/models/background/palka.glb' position={{ x: -0.3, y: 0.8 }} />
      <Shape url='/models/background/pyramid.glb' position={{ x: 0.7, y: 0.6 }} />
      <Shape url='/models/background/sphere.glb' position={{ x: -0.75, y: 0.5 }} />
      <Shape url='/models/background/tetris.glb' position={{ x: -0.7, y: -0.8, z: 12 }} />
    </Suspense>
  )
}

Shape.propTypes = {
  position: PropTypes.object,
  url: PropTypes.string,
}
function Shape(props) {
  const [accelerationSwitch, setAccelerationSwitch] = React.useState(generateSwitches())
  const [acceleration, setAcceleration] = React.useState([0, 0, 0])
  const object = React.useRef()
  const shape = useLoader(GLTFLoader, props.url)
  const raycaster = React.useMemo(() => new Raycaster(), [])
  const { theme } = useRedux(state => ({ theme: state.theme }))

  const material = Object.values(shape.materials)[0]
  React.useEffect(() => {
    const colors = material.color
    transition(colors, ['r', 'g', 'b'], theme === 'light' ? 2.5 : 0.05)
  }, [theme])

  React.useEffect(() => {
    material.opacity = 0
    const interval = setInterval(() => {
      material.opacity += 0.01
      if(material.opacity >= 1) clearInterval(interval)
    }, 10)
  }, [])

  const accelerationLimit = 0.001
  useFrame(({ camera }) => {
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
    <primitive
      ref={object}
      object={shape.scene}
      {...props}
    />
  )
}
