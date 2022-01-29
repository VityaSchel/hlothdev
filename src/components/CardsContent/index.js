import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { animated, useSpring } from 'react-spring'
import { connect } from 'react-redux'
import { MdArrowBack } from 'react-icons/md'

import Me from './me'
import Services from './services'
import Portfolio from './portfolio'

import { useTheme } from '@mui/styles'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

CardsContent.propTypes = {
  route: PropTypes.string,
  translation: PropTypes.object,
  dispatch: PropTypes.func,
}
function CardsContent(props) {
  const theme = useTheme()
  const { opacity, backgroundColor } = useSpring({
    opacity: props.route === '' ? 0 : 1,
    backgroundColor: theme.palette.background.default
  })

  return (
    <animated.div className={styles.container}
      style={{
        opacity: opacity.interpolate(o => o > 0.5 ? (o-0.5)*2 : 0),
        display: opacity.interpolate(o => o === 0 ? 'none' : 'flex'),
        backgroundColor
      }}
    >
      <Grid container spacing={2} className={styles.title}>
        <Grid item>
          <IconButton aria-label={props.translation.BACK} onClick={() => props.dispatch({ type: 'route/set', route: '' })}>
            <MdArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant='h4' color={theme.palette.text.primary}>
            {props.translation.PAGES_TITLES?.[props.route]?.toUpperCase()}
          </Typography>
        </Grid>
      </Grid>
      {{
        me: <Me />,
        services: <Services />,
        portfolio: <Portfolio />
      }[props.route]}
    </animated.div>
  )
}

export default connect(state => ({
  route: state.route,
  translation: state.translation
}))(CardsContent)
