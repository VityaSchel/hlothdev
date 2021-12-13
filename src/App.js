import React from 'react'
import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import { connect } from 'react-redux'
import { useHotkeys } from 'react-hotkeys-hook'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import localization from './localization.json'

import BackgroundShapes from './components/BackgroundShapes'
import Light from './components/Light'
import Background from './components/Background'
import Menu from './components/Menu'
import SiteSettings from './components/SiteSettings'

const lightTheme = createTheme({ palette: { mode: 'light' } })
const darkTheme = createTheme({ palette: { mode: 'dark' } })

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

  React.useEffect(() => {
    const locale = props.locale ?? navigator.language//Object.keys(localization).includes(navigator.language) ? navigator.language : '_DEFAULT_'
    props.dispatch({ type: 'locale/update', locale })
    props.dispatch({ type: 'translation/set', language: locale })
  }, [navigator.language])

  const raytracedCursor = Object.values(props.cursor).sort((a,b) => b.added - a.added)[0]?.cursor

  return (
    <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
      <Canvas camera={{ fov: 60 }} style={{ cursor: raytracedCursor ?? 'auto' }} id='canvas' linear>
        <Background theme={props.theme} />
        <Light />
        <BackgroundShapes />
        <Menu />
      </Canvas>
      <SiteSettings />
    </ThemeProvider>
  )
}

export default connect(state => ({
  theme: state.theme,
  cursor: state.cursor,
  locale: state.locale
}))(App)
