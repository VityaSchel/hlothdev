import { useAppSelector } from '@/store/hooks'
import { selectTheme } from '@/store/reducers/theme'
import { useSpring, animated } from '@react-spring/three'

export default function Background() {
  const { theme } = useAppSelector(selectTheme)
  const { bg } = useSpring({ bg: theme === 'light' ? 1 : 0 })

  return (
    <animated.color attach='background' r={bg} g={bg} b={bg} />
  )
}
