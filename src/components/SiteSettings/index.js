import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import { MdWbSunny, MdOutlineTranslate } from 'react-icons/md'
import { IoMdMoon } from 'react-icons/io'
import { useSpring, animated } from 'react-spring'
import useResizeObserver from 'use-resize-observer'
import cx from 'classnames'

import ruRU from '../../assets/images/emojis/flags/ru-RU.png'
import enUS from '../../assets/images/emojis/flags/en-US.png'

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
      <SiteLanguage />
    </div>
  )
}

const mapState = state => ({ translation: state.translation, locale: state.locale, theme: state.theme })
export default connect(mapState)(SiteSettings)

const SiteLanguage = connect(mapState)(function({ translation, ...props }) {
  const [listOpen, setListOpen] = React.useState(false)
  const { width, ref } = useResizeObserver()
  const { listWidth } = useSpring({ listWidth: listOpen ? width+10 : 0 })

  const setLang = locale => () => {
    props.dispatch({ type: 'locale/update', locale })
    props.dispatch({ type: 'translation/set', language: locale })
  }

  return (
    <div className={styles.languageChange}
      onPointerOver={() => setListOpen(true)}
      onPointerOut={() => setListOpen(false)}
    >
      <animated.div className={styles.languages} style={{ width: listWidth }}>
        <div className={styles.languagesInner} ref={ref}>
          <IconButton aria-label={translation.LANGUAGE_RUSSIAN}
            onClick={setLang('ru-RU')}
            className={cx([], { [styles.focused]: props.locale === 'ru-RU' })}
          >
            <img src={ruRU} />
          </IconButton>
          <IconButton aria-label={translation.LANGUAGE_ENGLISH}
            onClick={setLang('en-US')}
            className={cx([], { [styles.focused]: props.locale === 'en-US' })}
          >
            <img src={enUS} />
          </IconButton>
        </div>
      </animated.div>
      <IconButton aria-label={translation.CHANGE_LANGUAGE}>
        <MdOutlineTranslate />
      </IconButton>
    </div>
  )
})
