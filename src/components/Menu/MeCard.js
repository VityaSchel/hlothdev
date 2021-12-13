import PropTypes from 'prop-types'
import SFBlack from 'assets/fonts/SFBlack.blob'
import SFLight from 'assets/fonts/SFLight.blob'
import SFBold from 'assets/fonts/SFBold.blob'
import SFMedium from 'assets/fonts/SFMedium.blob'
import localization from '../../localization.json'
import { useRedux } from '../../utils'
import { useSpring } from '@react-spring/three'
import Text from '../Text'

MeCardText.propTypes = { position: PropTypes.array }
export function MeCardText({ position }) {
  const { translation, theme } = useRedux(state => ({ translation: state.translation, theme: state.theme }))
  const { textColor } = useSpring({ textColor: theme === 'light' ? '#272727' : '#a09f9f' })
  const textZ = -3.08

  return (
    <>
      <Text position={[position[0]+2, position[1]+1.4, textZ]} font={SFBlack} size={5.4} color={textColor}>
        {translation.CARD_ME_FIRST_NAME}
      </Text>
      <Text position={[position[0]+2, position[1]+1.13, textZ]} font={SFBlack} size={5.4} color={textColor}>
        {translation.CARD_ME_LAST_NAME}
      </Text>
      <Text position={[position[0]+3.65, position[1]+0.87, textZ]} font={SFBold} size={3.2} hAlign='left' color={textColor}>
        @hloth
      </Text>
      <Text position={[position[0]+2, position[1]+0.63, textZ+0.03]} font={SFMedium} size={3.6} color={textColor}>
        {translation.CARD_ME_SPECIALIZATION}
      </Text>
      <Text position={[position[0]+3.18, position[1]+0.29, textZ+0.065]} font={SFLight} size={2.4} color={textColor}>
        {translation.CARD_ME_CITY}
      </Text>
    </>
  )
}
