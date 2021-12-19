import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import cx from 'classnames'
import { MdChevronRight } from 'react-icons/md'

import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'

Card.propTypes = {
  children: PropTypes.node,
  avatar: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  caption: PropTypes.string,
  theme: PropTypes.string,
  link: PropTypes.string,
}

function Card(props) {
  return (
    <ButtonBase className={styles.container}>
      <a className={cx(styles.card, { [styles.darkTheme]: props.theme === 'dark' })} href={props.link}>
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
        <div className={styles.chevron}>
          <MdChevronRight />
        </div>
      </a>
    </ButtonBase>
  )
}

export default connect(state => ({
  theme: state.theme
}))(Card)
