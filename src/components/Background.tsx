import { useSpring, animated } from '@react-spring/three'

type BackgroundProps = {
  theme?: string;
};

export default function Background(props: BackgroundProps) {
  const { bg } = useSpring({ bg: props.theme === 'light' ? 1 : 0 })

  return (
    <animated.color attach='background' r={bg} g={bg} b={bg} />
  )
}
