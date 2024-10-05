import SFBlack from '@/assets/fonts/SFBlack.blob'
import SFLight from '@/assets/fonts/SFLight.blob'
import SFBold from '@/assets/fonts/SFBold.blob'
import SFMedium from '@/assets/fonts/SFMedium.blob'
import { useSpring } from '@react-spring/three'
import Text from '../Text'
import { useAppSelector } from '@/store/hooks'

export function MeCardText() {
  const { translation, locale, theme } = useAppSelector(state => ({ 
    translation: state.translation, 
    locale: state.locale.locale, 
    theme: state.theme.theme
  }))
  const { textColor } = useSpring({ textColor: theme === 'light' ? '#272727' : '#ffffff' })
  const textZ = -0.08

  return (
    <group position={[0, 0, textZ]} layers={1}>
      <Text position={[2, 1.4, 0.05]} font={SFBlack} size={5.4} color={textColor} layers={1}>
        {translation.CARD_ME_FIRST_NAME}
      </Text>
      <Text position={[2, 1.13, 0.05]} font={SFBlack} size={locale === 'en-US' ? 4.2 : 5.4} color={textColor} layers={1}>
        {translation.CARD_ME_LAST_NAME}
      </Text>
      <Text position={[3.65, 0.87, 0.05]} font={SFBold} size={3.2} hAlign='left' color={textColor} layers={1}>
        @hloth
      </Text>
      <Text position={[2, 0.63, 0.03]} font={SFMedium} size={3.6} color={textColor} layers={1}>
        {translation.CARD_ME_SPECIALIZATION}
      </Text>
      <Text position={[3.18, 0.29, 0.065]} font={SFLight} size={2.4} color={textColor} layers={1}>
        {translation.CARD_ME_CITY}
      </Text>
    </group>
  )
}
