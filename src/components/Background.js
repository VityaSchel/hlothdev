import React from 'react'
import PropTypes from 'prop-types'
import { useFrame } from '@react-three/fiber'
import { transitionReact } from 'utils'

Background.propTypes = {
  theme: PropTypes.string,
}
export default function Background(props) {
  const [bg, setBg] = React.useState(255)

  useFrame(() => {
    const newBgValue = transitionReact(bg, props.theme === 'light', 0, 255)
    bg !== newBgValue && setBg(Math.round(newBgValue))
  })

  return (
    <color attach='background' args={[`rgb(${bg}, ${bg}, ${bg})`]} />
  )
}
