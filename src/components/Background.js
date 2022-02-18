import PropTypes from 'prop-types'
import { useSpring, animated } from '@react-spring/three'

Background.propTypes = {
  theme: PropTypes.string,
}
export default function Background(props) {
  const { bg } = useSpring({ bg: props.theme === 'light' ? 1 : 0 })

  return (
    <animated.color attach='background' r={bg} g={bg} b={bg} />
  )
}
