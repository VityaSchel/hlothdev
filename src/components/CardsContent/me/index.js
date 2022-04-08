import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Card from '../Card'
import { connect } from 'react-redux'
import { SiTelegram } from 'react-icons/si'
import { ReactComponent as VKLogo } from '../../../assets/images/svgIcons/vk_logo.svg'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { ImGithub } from 'react-icons/im'
import avatar from '../../../assets/images/avatar.jpeg'
import Experience from './Experience.js'

const links = {
  Telegram: {
    icon: SiTelegram,
    href: 'https://t.me/hlothdev',
    label: '@hlothdev'
  },
  VKontakte: {
    icon: VKLogo,
    href: 'https://vk.com/hloth',
    label: 'Виктор Щелочков'
  },
  Twitter: {
    icon: AiFillTwitterCircle,
    href: 'https://twitter.com/hlothdev',
    label: '@hlothdev'
  },
  Email: {
    icon: MdEmail,
    href: 'mailto:hi@hloth.dev',
    label: 'hi@hloth.dev'
  },
  Telephone: {
    icon: MdLocalPhone,
    href: 'tel:79019404698',
    label: '+7 9019 404-69-8'
  },
  GitHub: {
    icon: ImGithub,
    href: 'https://github.com/VityaSchel',
    label: '@VityaSchel'
  },
}

Me.propTypes = {
  translation: PropTypes.object,
  dispatch: PropTypes.func
}

function Me(props) {
  const translation = props.translation.ABOUT_ME

  return (
    <div className={styles.me}>
      <div className={styles.info}>
        <Card className={styles.about}>
          <div className={styles.text}>
            <h2 dangerouslySetInnerHTML={{ __html: translation.HEADING }} />
            <div className={styles.imgBlock}>
              <img src='/static/site-decorations/vk-dog.webp' alt={translation.INTRO_IMAGE} align='right' width={130} />
              <p dangerouslySetInnerHTML={{ __html: translation.INTRO }} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: translation.BACKEND }} />
            <div className={styles.imgBlock}>
              <video src="/static/site-decorations/kolobanga.webm" align='left' autoPlay width={150} muted loop alt={translation.MY_PROJECTS_IMAGE} />
              <p dangerouslySetInnerHTML={{ __html: translation.MY_PROJECTS }} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: translation.BOTS }} />
            <div className={styles.imgBlock}>
              <img src='/static/site-decorations/shrek.webp' alt={translation.PARSING_IMAGE} align='right' width={130} />
              <p dangerouslySetInnerHTML={{ __html: translation.PARSING }} />
            </div>
            <h2 dangerouslySetInnerHTML={{ __html: translation.WORK_EXPERIENCE_LABEL }} />
            <p dangerouslySetInnerHTML={{ __html: translation.WORK_EXPERIENCE_BLOCK }} />
            <div className={styles.imgBlock}>
              <img src='/static/site-decorations/qwq.webp' alt={translation.ENDING_IMAGE} align='left' width={140} />
              <p dangerouslySetInnerHTML={{ __html: translation.ENDING }} />
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.topRow}>
          <Card
            containerStyle={styles.profileCard}
            avatar={<img src={avatar} width={100} height={100} style={{ borderRadius: 999 }} />}
            avatarStyles={{ padding: 0, boxShadow: '0 0 2px 0 rgba(0, 0, 0.25)' }}
            title={`${props.translation.CARD_ME_FIRST_NAME} ${props.translation.CARD_ME_LAST_NAME}`}
            subtitle={props.translation.FULL_SPECIALIZATION}
            caption='VityaSchel / @hloth'
          />
          <Card className={styles.contacts}>
            {Object.values(links).map((link, i) => (
              <div key={i} className={styles.link}>
                <link.icon /> <a href={link.href} target='_blank' rel='noreferrer'>{link.label}</a>
              </div>
            ))}
          </Card>
        </div>
        <Experience translation={props.translation} dispatch={props.dispatch} />
      </div>
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(Me)
