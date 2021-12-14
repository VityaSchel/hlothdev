import PropTypes from 'prop-types'
import SFBlack from 'assets/fonts/SFBlack.blob'
import SFLight from 'assets/fonts/SFLight.blob'
import SFBold from 'assets/fonts/SFBold.blob'
import SFMedium from 'assets/fonts/SFMedium.blob'
import { useRedux } from '../../utils'
import { useSpring } from '@react-spring/three'
import Text from '../Text'

MeCardText.propTypes = { position: PropTypes.array }
export function MeCardText({ position }) {
  const { translation, locale, theme } = useRedux(state => ({ translation: state.translation, locale: state.locale, theme: state.theme }))
  const { textColor } = useSpring({ textColor: theme === 'light' ? '#272727' : '#a09f9f' })
  const textZ = -0.08

  return (
    <group position={[0, 0, textZ]}>
      <Text position={[2, 1.4, 0.05]} font={SFBlack} size={5.4} color={textColor}>
        {translation.CARD_ME_FIRST_NAME}
      </Text>
      <Text position={[2, 1.13, 0.05]} font={SFBlack} size={locale === 'en-US' ? 4.2 : 5.4} color={textColor}>
        {translation.CARD_ME_LAST_NAME}
      </Text>
      <Text position={[3.65, 0.87, 0.05]} font={SFBold} size={3.2} hAlign='left' color={textColor}>
        @hloth
      </Text>
      <Text position={[2, 0.63, 0.03]} font={SFMedium} size={3.6} color={textColor}>
        {translation.CARD_ME_SPECIALIZATION}
      </Text>
      <Text position={[3.18, 0.29, 0.065]} font={SFLight} size={2.4} color={textColor}>
        {translation.CARD_ME_CITY}
      </Text>
    </group>
  )
}
