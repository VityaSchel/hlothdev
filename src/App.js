import React from 'react'
import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import { connect } from 'react-redux'
import { useHotkeys } from 'react-hotkeys-hook'

import BackgroundShapes from './components/BackgroundShapes'
import Light from './components/Light'
import Background from './components/Background'
import Menu from './components/Menu'
import SiteSettings from './components/SiteSettings'

App.propTypes = {
  theme: PropTypes.string,
  cursor: PropTypes.object,
  dispatch: PropTypes.func,
  locale: PropTypes.string,
}
function App(props) {
  const spotLightTarget = React.useRef()
  const lightRef = React.useRef()
  useHotkeys('space', () => props.dispatch({ type: 'theme/switch' }))

  React.useEffect(() => {
    if(!lightRef.current || !spotLightTarget.current) return
    lightRef.current.target = spotLightTarget.current
  }, [lightRef, spotLightTarget])

  React.useEffect(() => props.locale === null && props.dispatch({ type: 'locale/update' }), [navigator.language])

  const raytracedCursor = Object.values(props.cursor).sort((a,b) => b.added - a.added)[0]?.cursor

  return (
    <>
      <Canvas camera={{ fov: 60 }} style={{ cursor: raytracedCursor ?? 'auto' }} id='canvas'>
        <Background theme={props.theme} />
        <Light />
        <BackgroundShapes />
        <Menu />
      </Canvas>
      <SiteSettings />
    </>
  )
}

export default connect(state => ({
  theme: state.theme,
  cursor: state.cursor,
  locale: state.locale
}))(App)
