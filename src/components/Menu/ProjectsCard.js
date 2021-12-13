import { useRedux, stringEnding } from '../../utils'
import { useSpring } from '@react-spring/three'
import Text from '../Text'

import PropTypes from 'prop-types'
import SFBlack from 'assets/fonts/SFBlack.blob'
import SFBold from 'assets/fonts/SFBold.blob'

ProjectsCardText.propTypes = { position: PropTypes.object }
export function ProjectsCardText({ position }) {
  const { translation, theme } = useRedux(state => ({ translation: state.translation, theme: state.theme }))
  const { textColor } = useSpring({ textColor: theme === 'light' ? '#313131' : '#565656' })

  const textZ = -3.08
  const projectsNumber = 123

  const PROJECTS_LABEL = Array.isArray(translation.CARD_PROJECTS)
    ? translation.CARD_PROJECTS[stringEnding(projectsNumber)]
    : translation.CARD_PROJECTS

  return (
    <group position={[position[0], position[1], textZ]}>
      <Text position={[0.25, 1, 0]} font={SFBold} size={17} color={textColor}>
        {String(projectsNumber)}
      </Text>
      <Text position={[0.25, 0.5, 0]} font={SFBlack} size={5.4} color={textColor}>
        {PROJECTS_LABEL}
      </Text>
      <Text position={[0.25, 0.25, 0.05]} font={SFBold} size={3.2} color={textColor}>
        {translation.CARD_PROJECTS_IN_PORTFOLIO}
      </Text>
      {/*<ProjectImage position={[0, 0]} texture={project1logo} />
      <ProjectImage position={[1, 0]} texture={project2logo} />
      <ProjectImage position={[0, 1]} texture={project3logo} />
      <ProjectImage position={[1, 1]} texture={project4logo} />*/}
    </group>
  )
}

// ProjectImage.propTypes = {
//   position: PropTypes.array,
//   texture: PropTypes.string,
// }
// function ProjectImage(props) {
//   const { nodes: { ProjectImage } } = useLoader(GLTFLoader, '/models/cards/card_projects_logo.glb')
//   const imageMap = useLoader(TextureLoader, props.texture)
//   const size = 0.2
//
//   return (
//     <group position={[...position, 0.09]} scale={[size, -size, size/100]} rotation={[0, 0, 1.55]}>
//       <mesh geometry={ProjectImage.geometry}>
//         <meshBasicMaterial map={imageMap} />
//       </mesh>
//     </group>
//   )
// }
