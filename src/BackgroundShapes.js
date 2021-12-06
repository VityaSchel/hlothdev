import PropTypes from 'prop-types'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'

export default function BackgroundShapes() {
  return (
    <Suspense fallback={null}>
      <Shape url='/models/background/icosphere.glb' />
      {/*<Shape url='/models/background/cube.glb' />*/}
      {/*<Shape url='/models/background/palka.glb' />
      <Shape url='/models/background/pyramid.glb' />*/}
      <Shape url='/models/background/sphere.glb' />
      {/*<Shape url='/models/background/tetris.glb' />*/}
    </Suspense>
  )
}

Shape.propTypes = {
  url: PropTypes.string,
}
function Shape(props) {
  const gltf = useLoader(GLTFLoader, props.url)

  return (
    <primitive object={gltf.scene} />
  )
}
