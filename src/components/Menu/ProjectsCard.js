import PropTypes from 'prop-types'
import SFBlack from 'assets/SFBlack.blob'
import SFLight from 'assets/SFLight.blob'
import SFBold from 'assets/SFBold.blob'
import SFMedium from 'assets/SFMedium.blob'
import localization from '../../localization.json'
import { useRedux, stringEnding } from '../../utils'
import { useSpring } from '@react-spring/three'
import Text from '../Text'

ProjectsCard.propTypes = { position: PropTypes.object }
export default function ProjectsCard({ position }) {
  const { locale, theme } = useRedux(state => ({ locale: state.locale, theme: state.theme }))
  const { textColor } = useSpring({ textColor: theme === 'light' ? '#616161' : '#a09f9f' })
  const translation = localization[locale ?? '_DEFAULT_']
  const textZ = -3.08
  const projectsNumber = 123
  const PROJECTS_LABEL = Array.isArray(translation.CARD_PROJECTS)
    ? translation.CARD_PROJECTS[stringEnding(projectsNumber)]
    : translation.CARD_PROJECTS

  return (
    <>
      <Text position={[position[0]+0.25, position[1]+1, textZ]} font={SFBold} size={17} color={textColor}>
        {String(projectsNumber)}
      </Text>
      <Text position={[position[0]+0.25, position[1]+0.5, textZ]} font={SFBlack} size={5.4} color={textColor}>
        {PROJECTS_LABEL}
      </Text>
      <Text position={[position[0]+0.25, position[1]+0.25, textZ+0.05]} font={SFBold} size={3.2} color={textColor}>
        {translation.CARD_PROJECTS_IN_PORTFOLIO}
      </Text>
    </>
  )
}
