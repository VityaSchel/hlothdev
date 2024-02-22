import React, { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Text from '../Text'
import { useRedux, applyMaterial, color } from 'utils'
import store from '../../store'
import { useSpring, animated } from '@react-spring/three'

import { MeCardText } from './MeCard'
import { PortfolioCardText, usePortfolioCardStyles } from './PortfolioCard'

import SFBold from 'assets/fonts/SFBold.blob'

export default function Menu() {
  return (
    <>
      <Suspense fallback={null}>
        <MenuItem cardID='me' />
      </Suspense>
      <Suspense fallback={null}>
        <MenuItem cardID='portfolio' />
        <MenuItem cardID='services' />
      </Suspense>
      <Suspense fallback={null}>
        <MenuItem cardID='donate' />
        <MenuItem cardID='about' />
        <MenuItem cardID='archiveLink' />
      </Suspense>
    </>
  )
}

export const layouts = {
  wide: {
    me: [1, 1],
    portfolio: [0, 0],
    services: [1.97, 0],
    donate: [0, -1],
    about: [1, -1],
    archiveLink: [2, -1],
    offset: [0, 0],
  },
  tall: {
    me: [0, 1],
    portfolio: [0, 0],
    services: [1, -1],
    donate: [0, -1],
    about: [0, -2],
    archiveLink: [1, -2],
    offset: [0.525, 0.5]
  }
}

const linkCards = {
  'archiveLink': 'https://archive.hloth.dev/', 
  'blogLink': 'https://blog.hloth.dev/'
}

type MenuItemProps = {
  cardID?: string;
};

function MenuItem(props: MenuItemProps) {
  const fileID = Object.keys(linkCards).includes(props.cardID) ? 'external' : props.cardID
  const card = useLoader(GLTFLoader, `/static/models/cards/card_${fileID}.glb`)
  const [isPointerOver, setIsPointerOver] = React.useState(false)
  const { translation, theme, route, layout } = useRedux(state => ({
    translation: state.translation,
    theme: state.theme,
    route: state.route,
    layout: state.layout
  }))

  const portfolioCardStyles = usePortfolioCardStyles(theme)
  const { rotation } = useSpring({
    to: { rotation: route === props.cardID ? 3.16 : 0 },
    config: { friction: 60 }
  })

  const { textColor, cubeColor, iconBgColor, iconColor, locationIconColor } = useSpring({
    textColor: theme === 'light' ? '#545454' : '#191919',
    cubeColor: theme === 'light' ? (isPointerOver ? 1.3 : 1.8) : (isPointerOver ? 0.02 : 0.012),
    iconBgColor: theme === 'light' ? 1.2 : 0.05,
    iconColor: theme === 'light' ? 1.4 : 0.05,
    locationIconColor: theme === 'light' ? 0.05 : 1.5
  })

  const wideCard = ['me', 'portfolio'].includes(props.cardID)
  let position = layouts[layout][props.cardID],
    offset = layouts[layout].offset
  position = [(position[0] + offset[0])*2 - 3, (position[1] + offset[1])*2 - 0.5]
  const textZ = -0.06

  const materials = applyMaterial(card.scene, {
    cube: { roughness: 1, ...color(cubeColor) },
    iconbg: color(iconBgColor),
    '': color(iconColor),
    Location: color(locationIconColor),
    ...portfolioCardStyles
  })

  const handlePointerOver = () => {
    store.dispatch({ type: 'cursor/setCursor', id: props.cardID, cursor: 'pointer' })
    setIsPointerOver(true)
  }

  const handlePointerOut = () => {
    store.dispatch({ type: 'cursor/reset', id: props.cardID })
    setIsPointerOver(false)
  }

  const handleClick = () => {
    if (Object.keys(linkCards).includes(props.cardID)) {
      window.open(linkCards[props.cardID], '_blank').focus()
    } else {
      store.dispatch({ type: 'route/set', route: props.cardID })
    }
  }

  return (
    <group position={[...position, -4.5]}>
      <animated.group position={[0, 0.5, 0.5]} rotation-x={rotation}>
        <group position={[0, -1, 1]}>
          <animated.primitive
            object={card.scene}
            scale={new Array(3).fill(0.97)}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClick}
            {...materials}
            {...props}
          />
          {!wideCard
            ? <Text
              position={[0.97, 0.3, textZ]}
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
                  archiveLink: 'CARD_ARCHIVE_LINK'
                }[props.cardID]]?.toUpperCase()
              }
            </Text>
            : {
              me: <MeCardText position={position} />,
              portfolio: <PortfolioCardText position={position} />
            }[props.cardID]
          }
        </group>
      </animated.group>
    </group>
  )
}
