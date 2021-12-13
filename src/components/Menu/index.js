import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Text from '../Text'
import { useRedux, applyMaterial, rgbColor } from 'utils'
import store from '../../store'
import { useSpring, animated } from '@react-spring/three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import project1logo from 'assets/images/projectsLogos/aboba.png'
import project2logo from 'assets/images/projectsLogos/gadzas.png'
import project3logo from 'assets/images/projectsLogos/masha-simulator.png'
import project4logo from 'assets/images/projectsLogos/sipacker.png'

import SFBold from 'assets/fonts/SFBold.blob'

import { MeCardText } from './MeCard'
import { ProjectsCardText } from './ProjectsCard'

export default function Menu() {
  return (
    <Suspense fallback={null}>
      <MenuItem cardID='me' />
      <MenuItem cardID='projects' />
      <MenuItem cardID='services' />
      <MenuItem cardID='donate' />
      <MenuItem cardID='about' />
    </Suspense>
  )
}

const layouts = {
  wide: {
    me: [1, 1],
    projects: [0, 0],
    services: [1.97, 0],
    donate: [0, -1],
    about: [1, -1],
  },
  tall: {

  }
}
MenuItem.propTypes = {
  cardID: PropTypes.string,
}
function MenuItem(props) {
  const { translation, theme } = useRedux(state => ({ translation: state.translation, theme: state.theme }))
  const [isPointerOver, setIsPointerOver] = React.useState(false)

  const card = useLoader(GLTFLoader, `/models/cards/card_${props.cardID}.glb`)
  const project1ImageMap = useLoader(TextureLoader, project1logo)
  const project2ImageMap = useLoader(TextureLoader, project2logo)
  const project3ImageMap = useLoader(TextureLoader, project3logo)
  const project4ImageMap = useLoader(TextureLoader, project4logo)

  const wideCard = !['services', 'donate', 'about'].includes(props.cardID)
  const layout = 'wide'
  const position = layouts[layout][props.cardID].map((coord, i) => {
    coord *= 2
    const coordinate = ['x','y'][i]
    if(coordinate === 'x') coord -= 3
    else if(coordinate === 'y') coord -= 1
    return coord
  })
  const textZ = -3.06

  const { textColor, cubeColor, iconBgColor, iconColor, locationIconColor } = useSpring({
    textColor: theme === 'light' ? '#545454' : '#191919',
    cubeColor: theme === 'light' ? (isPointerOver ? 1.3 : 1.8) : (isPointerOver ? 0.02 : 0.012),
    iconBgColor: theme === 'light' ? 1.2 : 0.05,
    iconColor: theme === 'light' ? 1.4 : 0.05,
    locationIconColor: theme === 'light' ? 0.05 : 1.5
  })

  const materials = applyMaterial(card.scene, {
    cube: { roughness: 1, ...rgbColor(cubeColor) },
    iconbg: rgbColor(iconBgColor),
    '': rgbColor(iconColor),
    Location: rgbColor(locationIconColor),
    Project1Image: { map: project1ImageMap },
    Project2Image: { map: project2ImageMap },
    Project3Image: { map: project3ImageMap },
    Project4Image: { map: project4ImageMap },
  })

  const handlePointerOver = () => {
    store.dispatch({ type: 'cursor/setCursor', id: props.cardID, cursor: 'pointer' })
    setIsPointerOver(true)
  }

  const handlePointerOut = () => {
    store.dispatch({ type: 'cursor/reset', id: props.cardID })
    setIsPointerOver(false)
  }

  return (
    <Suspense fallback={null}>
      <animated.primitive
        object={card.scene}
        position={[...position, -3]}
        scale={new Array(3).fill(0.97)}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        {...materials}
        {...props}
      />
      {!wideCard
        ? <Text
          position={[position[0]+0.97, position[1]+0.3, textZ]}
          font={SFBold}
          size={5.5}
          hAlign='center'
          color={textColor}
          bevelEnabled
        >
          {
            translation[{
              about: 'CARD_ABOUT',
              donate: 'CARD_DONATE',
              services: 'CARD_SERVICES',
            }[props.cardID]]?.toUpperCase()
          }
        </Text>
        : {
          me: <MeCardText position={position} />,
          projects: <ProjectsCardText position={position} />
        }[props.cardID]
      }
    </Suspense>
  )
}