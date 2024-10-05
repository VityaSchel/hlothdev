import styles from './styles.module.scss'
import { animated, useSpring } from 'react-spring'
import { MdArrowBack } from 'react-icons/md'
import cx from 'classnames'

import { Me } from './me'
import { Services } from './services'
import { Portfolio } from './portfolio'
import { Donate } from './donate'
import { AboutSite } from './aboutSite'

import { useTheme } from '@mui/styles'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectTranslation } from '@/store/reducers/translation'
import { selectRoute, setRoute } from '@/store/reducers/route'
import React from 'react'

export function CardsContent() {
  const theme = useTheme()
  const translation = useAppSelector(selectTranslation)
  const { route } = useAppSelector(selectRoute)
  const { opacity, backgroundColor } = useSpring({
    opacity: route === '' ? 0 : 1,
    backgroundColor: theme.palette.background.default
  })
  const dispatch = useAppDispatch()

  return (
    <animated.div 
      className={cx(styles.container, {
        'pl-6 py-6 max-h-screen': route === 'portfolio'
      })}
      style={{
        opacity: opacity.interpolate(o => o > 0.5 ? (o-0.5)*2 : 0),
        display: opacity.interpolate(o => o === 0 ? 'none' : 'flex'),
        backgroundColor
      }}
    >
      <Grid container spacing={2} className={styles.title}>
        <Grid item>
          <span className={styles.arrowButton}>
            <IconButton aria-label={translation.BACK} onClick={() => dispatch(setRoute({ route: '' }))}>
              <MdArrowBack />
            </IconButton>
          </span>
          <Typography variant='h4' color={theme.palette.text.primary} className={styles.text}>
            {translation.PAGES_TITLES?.[route as keyof typeof translation.PAGES_TITLES]?.toUpperCase()}
          </Typography>
        </Grid>
      </Grid>
      {{
        me: <Me />,
        services: <Services />,
        portfolio: <Portfolio />,
        donate: <Donate />,
        about: <AboutSite />
      }[route]}
    </animated.div>
  )
}