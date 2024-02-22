import React from 'react'
import { Canvas } from '@react-three/fiber'
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
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectLocale, updateLocale } from '@/store/reducers/locale'
import { selectTranslation, setLocale } from '@/store/reducers/translation'
import { selectTheme, switchTheme } from '@/store/reducers/theme'
import { selectCursor } from '@/store/reducers/cursor'
import { popRoute, selectRoute } from '@/store/reducers/route'
import { setLayout } from '@/store/reducers/layout'

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

export function App() {
  const { locale: appLocale } = useAppSelector(selectLocale)
  const translation = useAppSelector(selectTranslation)
  const { theme } = useAppSelector(selectTheme)
  const cursor = useAppSelector(selectCursor)
  const { route } = useAppSelector(selectRoute)
  const spotLightTarget = React.useRef()
  const lightRef = React.useRef()
  const dispatch = useAppDispatch()
  useHotkeys('space', () => {
    dispatch(switchTheme())
  })

  React.useEffect(() => {
    if(!lightRef.current || !spotLightTarget.current) return
    lightRef.current.target = spotLightTarget.current
  }, [lightRef, spotLightTarget])

  React.useEffect(() => {
    const locale = appLocale ?? navigator.language
    dispatch(updateLocale(locale))
    dispatch(setLocale(locale))
  }, [navigator.language])

  React.useEffect(() => {
    history.listen(({ action, location }) => {
      const newLocation = location.pathname.substring(1)
      if(action === 'POP') dispatch(popRoute(newLocation))
    })
  }, [])

  React.useEffect(() => {
    const newLocation = window.location.pathname.substring(1)
    document.title = `${translation.CARD_ME_FIRST_NAME} ${translation.CARD_ME_LAST_NAME} (@hloth) ${newLocation === '' ? '' : `— ${translation.PAGES_TITLES?.[newLocation]}`}`
  }, [translation, window.location.pathname])

  const raytracedCursor = Object.values(cursor).sort((a,b) => b.added - a.added)[0]?.cursor

  const tallLayout = useMediaQuery('(max-width:768px)')
  React.useEffect(() => {
    dispatch(setLayout(tallLayout ? 'tall' : 'wide'))
  }, [tallLayout])

  const render = route === ''

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Canvas 
        camera={{ fov: 60 }} 
        style={{ cursor: raytracedCursor ?? 'auto' }} 
        id='canvas' 
        linear
        // invalidateFrameloop={true}
      >
        <Camera />
        <Background theme={theme} />
        <Light />
        <BackgroundShapes render={render} />
        <Menu />
      </Canvas>
      <SiteSettings />
      <CardsContent />
    </ThemeProvider>
  )
}