import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import { MdWbSunny, MdOutlineTranslate } from 'react-icons/md'
import { IoMdMoon } from 'react-icons/io'

SiteSettings.propTypes = {
  theme: PropTypes.string,
  translation: PropTypes.object,
  dispatch: PropTypes.func,
}
function SiteSettings({ translation, ...props }) {
  const themeSwitch = () => props.dispatch({ type: 'theme/switch' })

  return (
    <div className={styles.container}>
      {props.theme === 'dark' ? (
        <IconButton aria-label={translation.THEME_SWITCH_TO_LIGHT} onClick={themeSwitch}>
          <MdWbSunny />
        </IconButton>
      ) : (
        <IconButton aria-label={translation.THEME_SWITCH_TO_DARK} onClick={themeSwitch}>
          <IoMdMoon />
        </IconButton>
      )}
      <IconButton aria-label={translation.CHANGE_LANGUAGE} onClick={themeSwitch}>
        <MdOutlineTranslate />
      </IconButton>
    </div>
  )
}

export default connect(state => ({ translation: state.translation, theme: state.theme }))(SiteSettings)
