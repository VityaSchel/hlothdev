import React, { Suspense } from 'react'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Camera, Object3D, Raycaster, SpotLight, Vector3 } from 'three'
import { applyMaterial, color } from '../utils'
import { animated, useSpring } from '@react-spring/three'
import { useAppSelector } from '@/store/hooks'
import { selectLayout } from '@/store/reducers/layout'
import { selectTheme } from '@/store/reducers/theme'
import { debug } from '@/App'
import { LightSource } from '@/components/Light'
import { store } from '@/store'

export const generateSwitches = () => [
  Math.round(Math.random()),
  Math.round(Math.random()),
  Math.round(Math.random()),
]

type BackgroundShapesProps = {
  render?: boolean;
};

export const backgroundShapes = {
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

function BackgroundShapes(props: BackgroundShapesProps) {
  const { state } = useAppSelector(selectLayout)

  return (
    Object.entries(backgroundShapes[state]).map(([url, position], i) =>
      <Shape 
        url={`/static/models/background/${url}.glb`} 
        position={position} 
        key={i} 
        render={props.render}
        lightConfig={lightsConfigs[url as keyof typeof lightsConfigs]}
      />
    )
  )
}

const Shape = (props: ShapeModelProps) => (
  <Suspense fallback={null}>
    <ShapeModel {...props} />
  </Suspense>
)

type ShapeModelProps = {
  position?: object;
  url?: string;
  render?: unknown;
  lightConfig: {
    offset: number;
    lightIntensity: number;
    darkIntensity: number;
    angle: number;
    distance?: number;
  };
};

const lightsConfigs = {
  icosphere: { offset: 7, lightIntensity: 100, darkIntensity: 10, angle: 0.3, distance: 15 },
  cube: { offset: 6, lightIntensity: 200, darkIntensity: 0, angle: 0.5, distance: 15 },
  palka: { offset: 5, lightIntensity: 200, darkIntensity: 10, angle: 0.5, distance: 15 },
  pyramid: { offset: 10, lightIntensity: 1200, darkIntensity: 0, angle: 0.6, distance: 15 },
  sphere: { offset: 5, lightIntensity: 200, darkIntensity: 0, angle: 0.5, distance: 15 },
  tetris: { offset: 5, lightIntensity: 200, darkIntensity: 20, angle: 0.5, distance: 15 },
}

function ShapeModel(props: ShapeModelProps) {
  const [accelerationSwitch, setAccelerationSwitch] = React.useState(generateSwitches())
  const [acceleration, setAcceleration] = React.useState([0, 0, 0])
  const object = React.useRef<any>()
  const shape = useLoader(GLTFLoader, props.url ?? '')
  const raycaster = React.useMemo(() => new Raycaster(), [])
  const { theme } = useAppSelector(selectTheme)
  const { shapeColor } = useSpring({ shapeColor: theme === 'light' ? 2.5 : 0.06 })
  const { shapeOpacity } = useSpring({ from: { shapeOpacity: 0 }, to: { shapeOpacity: 1 } })
  const lightObject = React.useRef<SpotLight>(null)
  const lightTargetObject = React.useRef<Object3D>(null)

  const {
    lightIntensity
  } = useSpring({
    lightIntensity: theme === 'light' ? props.lightConfig.lightIntensity : props.lightConfig.darkIntensity
  })

  const accelerationLimit = 0.001
  useFrame(({ camera }) => {
    if(store.getState().route.route !== '') return
    if (!props.render || !object.current) return

    // object.current.traverse((child: any) => {
    //   if (child.isMesh) {
    //     child.layers.set(2)
    //   }
    // })

    if (lightObject.current && lightTargetObject.current && object.current) {
      lightObject.current.position.set(...calculateStartingPos({ camera, objectPos: object.current.position }))
      lightTargetObject.current.position.set(object.current.position.x, object.current.position.y, object.current.position.z)
    }

    calculateBackgroundShapesPosition({
      camera,
      object,
      raycaster,
      position: props.position,
      acceleration,
      accelerationLimit,
      accelerationSwitch,
      setAcceleration,
      setAccelerationSwitch
    })
  })

  const calculateStartingPos = ({ camera, objectPos }: {
    camera: Camera
    objectPos: Vector3
  }): [number, number, number] => {
    const direction = camera.position.clone().sub(objectPos).normalize()
    const result = objectPos.clone().add(direction.multiplyScalar(props.lightConfig.offset))
    return [result.x, result.y, result.z]
  }

  const { camera } = useThree()

  React.useEffect(() => {
    if (lightObject.current && lightTargetObject.current && object.current) {
      lightObject.current.position.set(...calculateStartingPos({ camera, objectPos: object.current.position }))
      lightTargetObject.current.position.set(object.current.position.x, object.current.position.y, object.current.position.z)
    }
  }, [camera, lightObject.current, lightTargetObject.current, object.current])

  return (
    <>
      <animated.primitive
        ref={object}
        object={shape.scene}
        {...applyMaterial(shape.scene, {
          '': { opacity: shapeOpacity, ...color(shapeColor) }
        })}
        {...props}
      />
      {object.current && camera && (
        <LightSource
          innerRef={lightObject}
          targetInnerRef={lightTargetObject}
          from={calculateStartingPos({ camera: camera, objectPos: object.current.position })}
          to={object.current.position}
          angle={props.lightConfig.angle}
          distance={props.lightConfig.distance}
          intensity={lightIntensity}
          debugColor='red'
          layers={0}
          penumbra={undefined}
        />
      )}
    </>
  )
}

export const calculateBackgroundShapesPosition = ({ camera, acceleration, object, raycaster, position, accelerationSwitch, ...args }: {
  camera: Camera
  object: any
  raycaster: Raycaster
  acceleration?: number[]
  position: any
  accelerationLimit?: number
  setAcceleration?: (acceleration: number[]) => void
  accelerationSwitch?: number[]
  setAccelerationSwitch?: (accelerationSwitch: number[]) => void
}) => {
  if (debug) return
  raycaster.setFromCamera(position, camera)
  const corrections = { x: 0.5, y: 0, z: -2 }
  raycaster.ray.at(position.z ?? 20, object.current.position)

  object.current.position.x += corrections.x
  object.current.position.y += corrections.y
  object.current.position.z += corrections.z

  if (acceleration !== undefined && accelerationSwitch !== undefined && args.accelerationLimit !== undefined && args.setAcceleration !== undefined && args.setAccelerationSwitch !== undefined) {
    object.current.rotation.x += acceleration[0]
    object.current.rotation.y += acceleration[1]
    object.current.rotation.z += acceleration[2]

    accelerationSwitch.forEach((switchValue, i) => {
      const curAcceleration = Math.max(0, acceleration[i] * switchValue + args.accelerationLimit!)
      const maxAcceleration = args.accelerationLimit! * 2

      if (curAcceleration < maxAcceleration) acceleration[i] += 0.00001 * switchValue
      args.setAcceleration!(acceleration)
    })

    if (Math.random() < 0.001) { // 1/1000
      args.setAccelerationSwitch(generateSwitches())
    }
  }
}

export default BackgroundShapes