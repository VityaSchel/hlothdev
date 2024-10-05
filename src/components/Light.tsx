import React from 'react'
import { useThree } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { AmbientLight, ColorRepresentation, Object3D, Raycaster, SpotLight, SpotLightHelper } from 'three'
import { useSpring, animated } from '@react-spring/three'
import { useAppSelector } from '@/store/hooks'
import { selectTheme } from '@/store/reducers/theme'
import { debug } from '@/App'
import { backgroundShapes, calculateBackgroundShapesPosition } from '@/components/BackgroundShapes'
import { selectLayout } from '@/store/reducers/layout'
import { mergeRefs } from 'react-merge-refs'

const debugOtherLights = false
const debugDarkThemeLights = false
const debugLightThemeLights = false

export default function Light() {
  const { theme } = useAppSelector(selectTheme)
  const { state } = useAppSelector(selectLayout)
  const { 
    lightThemeSourceIntensisty,
    darkThemeSourceIntensisty,
    darkThemeBacklightIntensity,
    lightSupportingLightsIntensity,
    lightSupportingLightsIntensity2,
    darkThemeSupportingSourceIntensisty,
    darkThemeAroundLightIntensity
  } = useSpring({ 
    lightThemeSourceIntensisty: theme === 'light' ? 500 : 0,
    darkThemeSourceIntensisty: theme === 'light' ? 0 : 10,
    darkThemeBacklightIntensity: theme === 'light' ? 0 : 100,
    lightSupportingLightsIntensity: theme === 'light' ? 1000 : 0,
    lightSupportingLightsIntensity2: theme === 'light' ? 500 : 0,
    darkThemeSupportingSourceIntensisty: theme === 'light' ? 50 : 50,
    darkThemeAroundLightIntensity: theme === 'light' ? 0 : 300
  })

  // const {
  //   transitionEffectLightPosition
  // } = useSpring({
  //   transitionEffectLightPosition: theme === 'light' ? [0,0,5] : [0,0,0]
  // })

  // const {
  //   transitionEffectLightIntensity
  // } = useSpring({
  //   transitionEffectLightIntensity: theme === 'light' ? 4000 : 0
  // })

  return (
    <>
      {/* <hemisphereLight intensity={100} position={[0, 0, 1]} /> */}
      <LightSource
        from={[0, 0, 10]} 
        to={[0, 0, -10]} 
        angle={0.8}
        distance={50} 
        intensity={lightThemeSourceIntensisty} 
        debugColor='red'
        layers={0}
        debug={debugOtherLights}
      />
      <LightSource 
        from={[0, 0, 2]} 
        to={[0, 0, -10]} 
        angle={0.8}
        distance={15} 
        intensity={darkThemeSourceIntensisty} 
        debugColor='red'
        layers={0}
        debug={debugOtherLights}
      />
      <LightSource 
        from={[0, 0, -15]} 
        to={[0, 0, -10]} 
        angle={0.8}
        distance={15} 
        intensity={darkThemeBacklightIntensity} 
        debugColor='red'
        layers={0}
        debug={debugDarkThemeLights}
      />
      {/* <LightSource 
        from={transitionEffectLightPosition}
        to={[0, 0, -5]} 
        angle={0.7}
        distance={15} 
        intensity={transitionEffectLightIntensity} 
        debugColor='red'
        layers={0}
      /> */}
      {/* <LightSource 
        from={[2, 2, 0]}
        to={[2, 2, -5]} 
        angle={0.6}
        distance={5}
        intensity={darkThemeSupportingSourceIntensisty} 
        debugColor='orange'
        layers={0}
        debug={debugDarkThemeLights}
      /> */}
      <LightSource
        from={[0, -10, -15]} 
        to={[0, 0, 0]} 
        angle={0.5}
        distance={20} 
        intensity={lightSupportingLightsIntensity} 
        debugColor='teal'
        layers={0}
        debug={debugLightThemeLights}
      />
      <LightSource 
        from={[15, 0, -10]} 
        to={[0, 0, 0]} 
        angle={0.5}
        distance={20} 
        intensity={lightSupportingLightsIntensity} 
        debugColor='teal'
        layers={0}
        debug={debugLightThemeLights}
      />
      <LightSource 
        from={[0, 10, 10]} 
        to={[0, 0, 0]} 
        angle={0.5}
        distance={20} 
        intensity={lightSupportingLightsIntensity} 
        debugColor='teal'
        layers={0}
        debug={debugLightThemeLights}
      />
      <LightSource 
        from={[0, 10, -10]} 
        to={[0, 0, 0]} 
        angle={0.5}
        distance={20} 
        intensity={lightSupportingLightsIntensity2} 
        debugColor='teal'
        layers={0}
        debug={debugLightThemeLights}
      />
      <LightSource 
        from={[-15, 0, -10]} 
        to={[0, 0, 0]} 
        angle={0.5}
        distance={20} 
        intensity={lightSupportingLightsIntensity} 
        debugColor='teal'
        layers={0}
        debug={debugLightThemeLights}
      />
      <LightSource 
        from={[10, 10, 0]} 
        to={[0, 0, -10]} 
        intensity={darkThemeAroundLightIntensity}
        distance={15}
        debugColor='blue'
        layers={0}
        debug={debugDarkThemeLights}
      />
      <LightSource 
        from={[-10, 10, 0]} 
        to={[0, 0, -10]} 
        intensity={darkThemeAroundLightIntensity}
        distance={15}
        debugColor='blue'
        layers={0}
        debug={debugDarkThemeLights}
      />
      <LightSource 
        from={[10, -10, 0]} 
        to={[0, 0, -10]} 
        intensity={darkThemeAroundLightIntensity}
        distance={15}
        debugColor='blue'
        layers={0}
        debug={debugDarkThemeLights}
      />
      <LightSource 
        from={[-10, -10, 0]} 
        to={[0, 0, -10]} 
        intensity={darkThemeAroundLightIntensity}
        distance={15}
        debugColor='blue'
        layers={0}
        debug={debugDarkThemeLights}
      />
    </>
  )
}

type LightSourceProps = {
  from?: [number, number, number];
  to?: [number, number, number];
  angle?: number;
  distance?: number;
  intensity?: any;
  debugColor: ColorRepresentation
  debug?: boolean
  layers?: number
  penumbra?: number
};

export function LightSource(props: LightSourceProps & { innerRef?: React.Ref<SpotLight>, targetInnerRef?: React.Ref<Object3D> }) {
  const lightRef = React.useRef<SpotLight>(null)
  const targetRef = React.useRef()
  const { scene } = useThree()

  React.useEffect(() => void (lightRef.current.target = targetRef.current), [scene])
  props.debug && useHelper(lightRef, SpotLightHelper, props.debugColor)

  // React.useEffect(() => {
  //   if (lightRef.current) {
  //     lightRef.current.layers.disableAll()
  //     lightRef.current.layers.enable(props.layers ?? 0)
  //   }
  // }, [props.layers, lightRef])

  return (
    <>
      <animated.spotLight
        position={props.from}
        ref={props.innerRef ? mergeRefs([lightRef, props.innerRef]) : lightRef}
        angle={props.angle ?? 10}
        distance={props.distance}
        intensity={props.intensity}
        penumbra={props.penumbra ?? 1}
      />
      <object3D ref={props.targetInnerRef ? mergeRefs([targetRef, props.targetInnerRef]) : targetRef} position={props.to}/>
    </>
  )
}
  