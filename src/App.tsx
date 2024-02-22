import React from 'react'
import { Canvas } from '@react-three/fiber'
import { connect } from 'react-redux'
import { useHotkeys } from 'react-hotkeys-hook'
import { createBrowserHistory } from 'history'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import WebFont from 'webfontloader'
import _ from 'lodash'

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
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        row: {
          maxHeight: 'unset !important'
        },
        cell: {
          maxHeight: 'unset !important'
        }
      }
    }
  }
}
const lightTheme = createTheme(
  _.merge(defaultTheme, {
    palette: { mode: 'light' },
    components: {
      MuiTypography: { styleOverrides: { root: { color: '#000' } } },
      MuiSvgIcon: { styleOverrides: { root: { color: '#000' } } },
    }
  })
)
const darkTheme = createTheme(
  _.merge(defaultTheme, {
    palette: { mode: 'dark' },
    components: {
      MuiTypography: { styleOverrides: { root: { color: '#fff' } } },
      MuiSvgIcon: { styleOverrides: { root: { color: '#fff' } } },
    }
  })
)

export const history = createBrowserHistory()

WebFont.load({
  google: {
    families: ['Oswald:400']
  }
})

type AppProps = {
  theme?: string;
  route?: string;
  cursor?: object;
  locale?: string;
  translation?: object;
  dispatch?(...args: unknown[]): unknown;
};

function App(props: AppProps) {
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
    document.title = `${props.translation.CARD_ME_FIRST_NAME} ${props.translation.CARD_ME_LAST_NAME} (@hloth) ${newLocation === '' ? '' : `— ${props.translation.PAGES_TITLES?.[newLocation]}`}`
  }, [props.translation, window.location.pathname])

  const raytracedCursor = Object.values(props.cursor).sort((a,b) => b.added - a.added)[0]?.cursor

  const tallLayout = useMediaQuery('(max-width:768px)')
  React.useEffect(() => props.dispatch({ type: 'layout/set', layout: tallLayout ? 'tall' : 'wide' }), [tallLayout])

  const render = props.route === ''

  return (
    <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
      <Canvas 
        camera={{ fov: 60 }} 
        style={{ cursor: raytracedCursor ?? 'auto' }} 
        id='canvas' 
        linear
        invalidateFrameloop={true}
      >
        <Camera />
        <Background theme={props.theme} />
        <Light />
        <BackgroundShapes render={render} />
        <Menu />
      </Canvas>
      <SiteSettings />
      <CardsContent />
    </ThemeProvider>
  )
}

export default connect(state => ({
  theme: state.theme,
  route: state.route,
  cursor: state.cursor,
  locale: state.locale,
  translation: state.translation
}))(App)
