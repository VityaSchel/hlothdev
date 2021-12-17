import React from 'react'
import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import { connect } from 'react-redux'
import { useHotkeys } from 'react-hotkeys-hook'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { createBrowserHistory } from 'history'
import useMediaQuery from '@mui/material/useMediaQuery'
import WebFont from 'webfontloader'

import Camera from './components/Camera'
import Light from './components/Light'
import BackgroundShapes from './components/BackgroundShapes'
import Background from './components/Background'
import Menu from './components/Menu'
import SiteSettings from './components/SiteSettings'
import CardsContent from './components/CardsContent'

const defaultTheme = {
  typography: {
    h4: {
      fontFamily: 'Oswald, Arial, sans-serif',
      fontWeight: 400
    }
  }
}
const lightTheme = createTheme({ palette: { mode: 'light' }, ...defaultTheme })
const darkTheme = createTheme({ palette: { mode: 'dark' }, ...defaultTheme })

export const history = createBrowserHistory()

WebFont.load({
  google: {
    families: ['Oswald:400']
  }
})

App.propTypes = {
  theme: PropTypes.string,
  cursor: PropTypes.object,
  locale: PropTypes.string,
  translation: PropTypes.object,
  dispatch: PropTypes.func,
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
    const locale = props.locale ?? navigator.language
    props.dispatch({ type: 'locale/update', locale })
    props.dispatch({ type: 'translation/set', language: locale })
  }, [navigator.language])

  React.useEffect(() => {
    history.listen(({ action, location }) => {
      const newLocation = location.pathname.substring(1)
      if(action === 'POP') props.dispatch({ type: 'route/pop', route: newLocation })
    })
  }, [])

  React.useEffect(() => {
    const newLocation = window.location.pathname.substring(1)
    document.title = `Viktor Shchelochkov (@hloth) ${newLocation === '' ? '' : `— ${props.translation.PAGES_TITLES?.[newLocation]}`}`
  }, [props.translation, window.location.pathname])

  const raytracedCursor = Object.values(props.cursor).sort((a,b) => b.added - a.added)[0]?.cursor

  const tallLayout = useMediaQuery('(max-width:768px)')
  React.useEffect(() => props.dispatch({ type: 'layout/set', layout: tallLayout ? 'tall' : 'wide' }), [tallLayout])

  return (
    <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
      <Canvas camera={{ fov: 60 }} style={{ cursor: raytracedCursor ?? 'auto' }} id='canvas' linear>
        <Camera />
        <Background theme={props.theme} />
        <Light />
        <BackgroundShapes />
        <Menu />
      </Canvas>
      <SiteSettings />
      <CardsContent />
    </ThemeProvider>
  )
}

export default connect(state => ({
  theme: state.theme,
  cursor: state.cursor,
  locale: state.locale,
  translation: state.translation
}))(App)
