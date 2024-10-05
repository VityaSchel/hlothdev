import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { GroupProps, MeshProps, extend, useLoader } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { animated } from '@react-spring/three'

extend({ TextGeometry })

export default function Text({
  children,
  vAlign = 'top',
  hAlign = 'right',
  color,
  size = 15,
  bevelEnabled = false,
  font,
  ...props
}: {
  children?: string
  vAlign?: string
  hAlign?: string
  size?: number
  color?: any
  font: string
  bevelEnabled?: boolean
} & GroupProps) {
  const textSize = size / 100
  const textFont = useLoader(FontLoader, font)
  
  const config = useMemo(
    () => ({
      font: textFont,
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8
    }),
    [textFont]
  )
  
  const mesh = useRef<MeshProps>(null)
  React.useEffect(() => {
    const size = new THREE.Vector3()
    // @ts-expect-error - no idea why this is not working
    mesh.current.geometry.computeBoundingBox()
    // @ts-expect-error - no idea why this is not working
    mesh.current.geometry.boundingBox.getSize(size)
    // @ts-expect-error - no idea why this is not working
    mesh.current.position.x = hAlign === 'center' 
      ? -size.x / 2 
      : hAlign === 'right' 
        ? 0 
        : -size.x
    // @ts-expect-error - no idea why this is not working
    mesh.current.position.y = vAlign === 'center' 
      ? -size.y / 2 
      : vAlign === 'top' 
        ? 0 
        : -size.y
  }, [children])

  return (
    <animated.group scale={[0.1 * textSize, 0.1 * textSize, 0.05 * textSize]} {...props}>
      {/** @ts-expect-error - no idea why this is not working  */}
      <animated.mesh ref={mesh} layers={1}>
        {/** @ts-expect-error - no idea why this is not working  */}
        <textGeometry args={[children ?? '', config]} />
        <animated.meshStandardMaterial color={color} metalness={0} roughness={1} />
      </animated.mesh>
    </animated.group>
  )
}
