import PropTypes from 'prop-types'
import Card from '../Card'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { SiTelegram } from 'react-icons/si'
import { ReactComponent as VKLogo } from '../../../assets/images/svgIcons/vk_logo.svg'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { ImGithub } from 'react-icons/im'
import avatar from '../../../assets/images/avatar.jpeg'

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
}

function Me(props) {
  if(!props.translation.PAGES_TITLES) return <></>

  return (
    <div className={styles.me}>
      <div className={styles.info}>
        <Card className={styles.about}>
          <div dangerouslySetInnerHTML={{ __html: props.translation.ABOUT_ME }} className={styles.text} />
        </Card>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.topRow}>
          <Card
            avatar={<img src={avatar} width={100} style={{ borderRadius: 999 }} />}
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
        <div className={styles.experience}>
          <Card>
            jkasdjkjakls
          </Card>
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(Me)
