import { useRedux, stringEnding } from '../../utils'
import { useSpring } from '@react-spring/three'
import Text from '../Text'

import SFBlack from 'assets/fonts/SFBlack.blob'
import SFBold from 'assets/fonts/SFBold.blob'

export function ProjectsCardText() {
  const { translation, theme } = useRedux(state => ({ translation: state.translation, theme: state.theme }))
  const { textColor } = useSpring({ textColor: theme === 'light' ? '#313131' : '#565656' })

  const textZ = -0.08
  const projectsNumber = 123

  const PROJECTS_LABEL = Array.isArray(translation.CARD_PROJECTS)
    ? translation.CARD_PROJECTS[stringEnding(projectsNumber)]
    : translation.CARD_PROJECTS

  return (
    <group position={[0, 0, textZ]}>
      <Text position={[0.25, 1, 0]} font={SFBold} size={17} color={textColor}>
        {String(projectsNumber)}
      </Text>
      <Text position={[0.25, 0.5, 0]} font={SFBlack} size={5.4} color={textColor}>
        {PROJECTS_LABEL}
      </Text>
      <Text position={[0.25, 0.25, 0.05]} font={SFBold} size={3.2} color={textColor}>
        {translation.CARD_PROJECTS_IN_PORTFOLIO}
      </Text>
    </group>
  )
}
