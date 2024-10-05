import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useHotkeys } from 'react-hotkeys-hook'
import { createBrowserHistory } from 'history'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import WebFont from 'webfontloader'
import _ from 'lodash'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectLocale, updateLocale } from '@/store/reducers/locale'
import { selectTranslation, setLocale } from '@/store/reducers/translation'
import { selectTheme, switchTheme } from '@/store/reducers/theme'
import { selectCursor } from '@/store/reducers/cursor'
import { popRoute, selectRoute } from '@/store/reducers/route'
import { setLayout } from '@/store/reducers/layout'

import Camera from './components/Camera'
import Light from './components/Light'
import BackgroundShapes from './components/BackgroundShapes'
import Background from './components/Background'
import Menu from './components/Menu'
import { SiteSettings } from './components/SiteSettings'
import { CardsContent } from './components/CardsContent'
import { OrbitControls } from '@react-three/drei'
import { ACESFilmicToneMapping, LinearToneMapping, NeutralToneMapping } from 'three'

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
        // row: {
        //   maxHeight: 'unset !important'
        // },
        // cell: {
        //   maxHeight: 'unset !important'
        // }
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

export const debug = false

const DisableRender = () => useFrame(() => null, 1000)

export function App() {
  const translation = useAppSelector(selectTranslation)
  const { theme } = useAppSelector(selectTheme)
  const cursor = useAppSelector(selectCursor)
  const { route } = useAppSelector(selectRoute)
  const dispatch = useAppDispatch()
  useHotkeys('space', () => {
    dispatch(switchTheme())
  })

  React.useEffect(() => {
    history.listen(({ action, location }) => {
      const newLocation = location.pathname.substring(1)
      if(action === 'POP') dispatch(popRoute(newLocation))
    })
  }, [])

  React.useEffect(() => {
    const newLocation = window.location.pathname.substring(1)
    const pageTitle = newLocation in translation.PAGES_TITLES 
      ? translation.PAGES_TITLES[newLocation as keyof typeof translation.PAGES_TITLES] 
      : '404'
    document.title = `${translation.CARD_ME_FIRST_NAME} ${translation.CARD_ME_LAST_NAME} (@hloth) ${newLocation === '' ? '' : `— ${pageTitle}`}`
  }, [translation, window.location.pathname])

  const raytracedCursor = Object.values(cursor).sort((a,b) => b.added - a.added)[0]?.cursor

  const tallLayout = useMediaQuery('(max-width:768px)')
  React.useEffect(() => {
    dispatch(setLayout(tallLayout ? 'tall' : 'wide'))
  }, [tallLayout])

  const render = route === ''

  const [disableRendering, setDisableRendering] = React.useState(false)
  const disableRenderingTimeout = React.useRef<Timer | null>(null)

  React.useEffect(() => {
    if(route === '') {
      setDisableRendering(false)
    } else {
      if (disableRenderingTimeout.current) clearTimeout(disableRenderingTimeout.current)
      disableRenderingTimeout.current = setTimeout(() => {
        setDisableRendering(true)
      }, 500)
    }
  }, [route])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Canvas 
        camera={{ fov: 60 }} 
        style={{ cursor: raytracedCursor ?? 'auto' }} 
        id='canvas' 
        // linear
        // invalidateFrameloop={true}
        dpr={window.devicePixelRatio}
        onCreated={({ gl }) => {
          gl.toneMapping = 2
          gl.toneMappingExposure = 2.0
        }} 
      >
        {disableRendering && <DisableRender />}
        <Camera />
        <Background theme={theme} />
        <Light />
        <BackgroundShapes render={render} />
        <Menu />
        {debug && <OrbitControls />}
      </Canvas>
      <SiteSettings />
      <CardsContent />
    </ThemeProvider>
  )
}