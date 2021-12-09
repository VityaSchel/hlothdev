import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Text from './Text'
import SFBlack from './assets/SFBlack.blob'
import { useRedux } from './utils'
import localization from './localization.json'

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
    services: [2, 0],
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
  const { locale } = useRedux(state => ({ locale: state.locale }))
  const ref = React.useRef()
  const card = useLoader(GLTFLoader, `/models/cards/card_${props.cardID}.glb`)
  const layout = 'wide'
  const position = layouts[layout][props.cardID].map((coord, i) => {
    coord *= 2
    const coordinate = ['x','y'][i]
    if(coordinate === 'x') coord -= 3
    else if(coordinate === 'y') coord -= 1
    return coord
  })

  return (
    <Suspense fallback={null}>
      <primitive
        ref={ref}
        object={card.scene}
        position={[...position, -3]}
        scale={new Array(3).fill(0.97)}
        {...props}
      />
      {['services', 'donate', 'about'].includes(props.cardID)
        ? <Text position={[...position, -3]} font={SFBlack} size={0.05}>{localization[locale ?? '_DEFAULT_'][{
          about: 'CARD_ABOUT',
          donate: 'CARD_DONATE',
          services: 'CARD_SERVICES',
        }[props.cardID]]}</Text>
        : <Text position={[...position, -3]} font={SFBlack} size={0.1}>THREE</Text>
      }
    </Suspense>
  )
}
