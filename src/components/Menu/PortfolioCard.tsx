import { stringEnding, color } from '../../utils'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useSpring } from '@react-spring/three'
import { useLoader } from '@react-three/fiber'
import Text from '../Text'
import projects from '../../data/projects'

import project1logo from '@/assets/images/projectsLogos/aboba.png'
import project2logo from '@/assets/images/projectsLogos/gadzas.png'
import project3logo from '@/assets/images/projectsLogos/masha-simulator.png'
import project4logo from '@/assets/images/projectsLogos/sipacker.png'

import SFBlack from '@/assets/fonts/SFBlack.blob'
import SFBold from '@/assets/fonts/SFBold.blob'
import { useAppSelector } from '@/store/hooks'
import { MaterialJSON } from 'three'

export function PortfolioCardText() {
  const { translation, theme } = useAppSelector(state => ({ 
    translation: state.translation, 
    theme: state.theme.theme
  }))
  const { textColor } = useSpring({ textColor: theme === 'light' ? '#313131' : '#ffffff' })

  const textZ = -0.08
  const projectsNumber = projects.length

  const PROJECTS_LABEL = Array.isArray(translation.CARD_PORTFOLIO)
    ? translation.CARD_PORTFOLIO[stringEnding(projectsNumber)]
    : translation.CARD_PORTFOLIO

  return (
    <group position={[0, 0, textZ]} layers={1}>
      <Text position={[0.25, 1, 0]} font={SFBold} size={17} color={textColor}>
        {String(projectsNumber)}
      </Text>
      <Text position={[0.25, 0.5, 0]} font={SFBlack} size={5.4} color={textColor}>
        {PROJECTS_LABEL}
      </Text>
      <Text position={[0.25, 0.25, 0.05]} font={SFBold} size={3.2} color={textColor}>
        {translation.CARD_PORTFOLIO_IN_PORTFOLIO}
      </Text>
    </group>
  )
}

export function usePortfolioCardStyles(theme: string) {
  const project1ImageMap = useLoader(TextureLoader, project1logo)
  const project2ImageMap = useLoader(TextureLoader, project2logo)
  const project3ImageMap = useLoader(TextureLoader, project3logo)
  const project4ImageMap = useLoader(TextureLoader, project4logo)

  const { extrudingColor } = useSpring({ extrudingColor: theme === 'light' ? 1 : 0.05 })
  const extrudingMaterial: Partial<MaterialJSON> = { roughness: 1, ...color(extrudingColor) }

  return {
    Project1Image: { map: project1ImageMap },
    Project2Image: { map: project2ImageMap },
    Project3Image: { map: project3ImageMap },
    Project4Image: { map: project4ImageMap },
    Project1Mat: extrudingMaterial,
    Project2Mat: extrudingMaterial,
    Project3Mat: extrudingMaterial,
    Project4Mat: extrudingMaterial,
  }
}
