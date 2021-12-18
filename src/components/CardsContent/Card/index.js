import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import cx from 'classnames'

import Typography from '@mui/material/Typography'

Card.propTypes = {
  children: PropTypes.node,
  avatar: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  caption: PropTypes.string,
  theme: PropTypes.string,
}

function Card(props) {
  return (
    <div className={cx(styles.card, { [styles.darkTheme]: props.theme === 'dark' })}>
      <div className={styles.avatar}>
        {props.avatar}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <Typography variant='h6' gutterBottom component='div'>
            {props.title}
          </Typography>
        </div>
        <div className={styles.subtitle}>
          <Typography variant='subtitle1' gutterBottom component='div'>
            {props.subtitle}
          </Typography>
        </div>
        {props.children}
        <div className={styles.caption}>
          <Typography variant='overline' gutterBottom display='block'>
            {props.caption}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({
  theme: state.theme
}))(Card)
