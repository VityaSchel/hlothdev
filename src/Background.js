import React from 'react'
import PropTypes from 'prop-types'
import { useFrame } from '@react-three/fiber'
import { transitionReact } from './utils.js'

Background.propTypes = {
  theme: PropTypes.string,
}
export default function Background(props) {
  const [bg, setBg] = React.useState(255)

  useFrame(() => {
    const newBgValue = transitionReact(bg, props.theme === 'dark' ? 255 : 0, props.theme === 'light' ? 255 : 0)
    bg !== newBgValue && setBg(Math.round(newBgValue))
  })

  return (
    <color attach='background' args={[`rgb(${bg}, ${bg}, ${bg})`]} />
  )
}
