import React from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import { useSpring, animated } from 'react-spring'
import { useComponentSize } from 'react-use-size'
import useMediaQuery from '@mui/material/useMediaQuery'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import cx from 'classnames'
import { MdWbSunny, MdOutlineTranslate } from 'react-icons/md'
import { IoMdMoon } from 'react-icons/io'
import { SiTorbrowser } from 'react-icons/si'
import ruRU from '../../assets/images/emojis/flags/ru-RU.png'
import enUS from '../../assets/images/emojis/flags/en-US.png'
import { selectLocale, updateLocale } from '@/store/reducers/locale'
import { selectTranslation, setLocale, setTranslation } from '@/store/reducers/translation'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectTheme, switchTheme } from '@/store/reducers/theme'

export function SiteSettings() {
  const translation = useAppSelector(selectTranslation)
  const { theme } = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  const themeSwitch = () => {
    dispatch(switchTheme())
  }

  return (
    <div className={styles.container}>
      <a href='http://hlothadmob6vsssnjd7ovwyz4z2le4pbpbyfhqbuwooyq62ona3l4bid.onion/' title={translation.ONION_SITE_LINK}>
        <IconButton aria-label={translation.ONION_SITE_LINK} tabIndex={-1}>
          <SiTorbrowser />
        </IconButton>
      </a>
      {theme === 'dark' ? (
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

function SiteLanguage() {
  const translation = useAppSelector(selectTranslation)
  const { locale } = useAppSelector(selectLocale)
  const dispatch = useAppDispatch()
  const [listOpen, setListOpen] = React.useState(false)
  const { width, ref } = useComponentSize()
  const { listWidth } = useSpring({ listWidth: listOpen ? (width ?? 0)+10 : 0 })
  const isMobile = useMediaQuery('(any-hover: none)')

  const setLang = (locale: string) => () => {
    dispatch(updateLocale(locale))
    dispatch(setLocale(locale))
    isMobile && setListOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={() => isMobile && setListOpen(false) }>
      <div className={styles.languageChange}
        onPointerOver={() => !isMobile && setListOpen(true)}
        onPointerOut={() => !isMobile && setListOpen(false)}
        onPointerUp={() => isMobile && setListOpen(!listOpen)}
      >
        <animated.div className={styles.languages} style={{ width: listWidth }}>
          <div className={styles.languagesInner} ref={ref}>
            <IconButton aria-label={translation.LANGUAGE_RUSSIAN}
              onClick={setLang('ru-RU')}
              className={cx([], { [styles.focused]: locale === 'ru-RU' })}
            >
              <img src={ruRU} />
            </IconButton>
            <IconButton aria-label={translation.LANGUAGE_ENGLISH}
              onClick={setLang('en-US')}
              className={cx([], { [styles.focused]: locale === 'en-US' })}
            >
              <img src={enUS} />
            </IconButton>
          </div>
        </animated.div>
        <IconButton aria-label={translation.CHANGE_LANGUAGE}>
          <MdOutlineTranslate />
        </IconButton>
      </div>
    </ClickAwayListener>
  )
}