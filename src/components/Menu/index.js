import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Text from '../Text'
import { useRedux, transition } from 'utils'
import localization from '../../localization.json'
import store from '../../store'
import { useSpring, animated } from '@react-spring/three'

import MeCard from './MeCard'
import ProjectsCard from './ProjectsCard'

import SFBlack from 'assets/SFBlack.blob'
import SFHeavy from 'assets/SFHeavy.blob'
import SFLight from 'assets/SFLight.blob'
import SFBold from 'assets/SFBold.blob'
import SFMedium from 'assets/SFMedium.blob'

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
  const { locale, theme } = useRedux(state => ({ locale: state.locale, theme: state.theme }))
  const ref = React.useRef()
  const card = useLoader(GLTFLoader, `/models/cards/card_${props.cardID}.glb`)
  const wideCard = !['services', 'donate', 'about'].includes(props.cardID)
  const layout = 'wide'
  const position = layouts[layout][props.cardID].map((coord, i) => {
    coord *= 2
    const coordinate = ['x','y'][i]
    if(coordinate === 'x') coord -= 3
    else if(coordinate === 'y') coord -= 1
    return coord
  })

  const { textColor } = useSpring({ textColor: theme === 'light' ? '#8e8e8e' : '#626161' })

  React.useEffect(() => {
    const cube = card.materials.cube
    cube.roughness = 1
    const cubeColor = cube.color
    transition(cubeColor, ['r', 'g', 'b'], theme === 'light' ? 1.8 : 0.01)

    const iconBgColor = card.materials.iconbg?.color
    iconBgColor && transition(iconBgColor, ['r', 'g', 'b'], theme === 'light' ? 1.5 : 0.05)

    if(wideCard) {

    } else {
      const iconColor = card.materials[''].color
      transition(iconColor, ['r', 'g', 'b'], theme === 'light' ? 1.5 : 0.05)
    }
  }, [theme])

  const translation = localization[locale ?? '_DEFAULT_']
  const textZ = -3.06

  return (
    <Suspense fallback={null}>
      <animated.primitive
        ref={ref}
        object={card.scene}
        position={[...position, -3]}
        scale={new Array(3).fill(0.97)}
        onPointerOver={() => store.dispatch({ type: 'cursor/setCursor', id: props.cardID, cursor: 'pointer' })}
        onPointerOut={() => store.dispatch({ type: 'cursor/reset', id: props.cardID })}
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
            }[props.cardID]].toUpperCase()
          }
        </Text>
        : {
          me: <MeCard position={position} />,
          projects: <ProjectsCard position={position} />
        }[props.cardID]
      }
    </Suspense>
  )
}
