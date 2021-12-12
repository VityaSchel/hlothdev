import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import { MdWbSunny } from 'react-icons/md'
import { IoMdMoon } from 'react-icons/io'

SiteSettings.propTypes = {
  locale: PropTypes.string,
  theme: PropTypes.string,
  dispatch: PropTypes.func,
}
function SiteSettings(props) {
  const themeSwitch = () => props.dispatch({ type: 'theme/switch' })

  return (
    <div className={styles.container}>
      {props.theme === 'dark' ? (
        <IconButton aria-label='Включить светлую тему' onClick={themeSwitch}>
          <MdWbSunny />
        </IconButton>
      ) : (
        <IconButton aria-label='Включить темную тему' onClick={themeSwitch}>
          <IoMdMoon />
        </IconButton>
      )}
    </div>
  )
}

export default connect(state => ({ locale: state.locale, theme: state.theme }))(SiteSettings)
