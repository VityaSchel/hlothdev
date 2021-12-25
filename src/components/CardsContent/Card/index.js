import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import cx from 'classnames'
import { MdChevronRight } from 'react-icons/md'

import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'

Card.propTypes = CardContainer.propTypes = {
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
    <>
      {props.avatar && <div className={styles.avatar} style={props.avatarStyles}>
        {props.avatar}
      </div>}
      <div className={[styles.content, props.className].join(' ')}>
        {props.title && <div className={styles.title}>
          <Typography variant='h6' gutterBottom component='div'>
            {props.title}
          </Typography>
        </div>}
        {props.subtitle && <div className={styles.subtitle}>
          <Typography variant='subtitle1' gutterBottom component='div'>
            {props.subtitle}
          </Typography>
        </div>}
        {props.children}
        {props.caption && <div className={styles.caption}>
          <Typography variant='overline' gutterBottom display='block'>
            {props.caption}
          </Typography>
        </div>}
      </div>
      {props.link && <div className={styles.chevron}>
        <MdChevronRight />
      </div>}
    </>
  )
}

function CardContainer(props) {
  const containerClassName = cx(styles.card, { [styles.darkTheme]: props.theme === 'dark' })

  return (
    props.link
      ? (
        <ButtonBase className={styles.container}>
          <a className={containerClassName} href={props.link}>
            <Card {...props} />
          </a>
        </ButtonBase>
      ) : (
        <div className={styles.container}>
          <div className={containerClassName}>
            <Card {...props} />
          </div>
        </div>
      )
  )
}

export default connect(state => ({
  theme: state.theme
}))(CardContainer)
