import styles from './styles.module.scss'
import Card from '../Card/index.js'
import { connect } from 'react-redux'
import { SiTelegram } from 'react-icons/si'
import { ReactComponent as LinkedinLogo } from '../../../assets/images/svgIcons/linkedin_logo.svg'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { MdChevronRight, MdEmail, MdLocalPhone } from 'react-icons/md'
import { ImGithub } from 'react-icons/im'
import avatar from '../../../assets/images/avatar.jpeg'
import Experience from './Experience.js'
import useMediaQuery from '@mui/material/useMediaQuery'
import { dates } from '../../../utils.js'
import { useAppSelector } from '@/store/hooks.js'
import { selectTranslation } from '@/store/reducers/translation.js'
import { Button, ButtonBase } from '@mui/material'
import { FiExternalLink } from 'react-icons/fi'

function AboutCard({ isMobile }: {
  isMobile: boolean
}) {
  const translation = useAppSelector(selectTranslation).ABOUT_ME

  return (
    <Card className={styles.about}>
      <div className={styles.text}>
        <h2 dangerouslySetInnerHTML={{ __html: translation.HEADING }} />
        <div className={styles.imgBlock}>
          <img src='/static/site-decorations/vk-dog.webp' alt={translation.INTRO_IMAGE} align='right' width={isMobile ? 80 : 130} />
          <p dangerouslySetInnerHTML={{ __html: dates(translation.INTRO) }} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: dates(translation.BACKEND) }} />
        <div className={styles.imgBlock}>
          <video src="/static/site-decorations/kolobanga.webm" autoPlay width={isMobile ? 50 : 170} muted loop alt={translation.MY_PROJECTS_IMAGE} />
          <p dangerouslySetInnerHTML={{ __html: translation.MY_PROJECTS }} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED }} />
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED_1 }} />
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED_2 }} />
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED_3 }} />
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED_4 }} />
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED_5 }} />
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED_6 }} />
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED_7 }} />
        <p dangerouslySetInnerHTML={{ __html: translation.FEATURED_8 }} />
        <div className={styles.imgBlock}>
          <img src='/static/site-decorations/shrek.webp' alt={translation.PARSING_IMAGE} align='right' width={isMobile ? 70 : 130} />
          <p dangerouslySetInnerHTML={{ __html: translation.PARSING }} />
        </div>
        <div className={styles.imgBlock}>
          <img src='/static/site-decorations/qwq.webp' alt={translation.ENDING_IMAGE} align='left' width={isMobile ? 80 : 140} />
          <p dangerouslySetInnerHTML={{ __html: translation.ENDING }} />
        </div>
      </div>
    </Card>
  )
}

function WhatIsHloth() {
  const translation = useAppSelector(selectTranslation).ABOUT_ME

  return (
    <Card className={styles.about}>
      <div className={styles.text}>
        <h2 dangerouslySetInnerHTML={{ __html: translation.WHAT_IS_HLOTH.HEADING }} />
        <p dangerouslySetInnerHTML={{ __html: translation.WHAT_IS_HLOTH.TEXT }} />
        <ol>
          {translation.WHAT_IS_HLOTH.CRITERIA.map((criteria, i) => <li key={i}>{criteria}</li>)}
        </ol>
        <p dangerouslySetInnerHTML={{ __html: translation.WHAT_IS_HLOTH.TEXT2 }} />
        <ul>
          {translation.WHAT_IS_HLOTH.VARIANTS.map((variant, i) => <li key={i}>{variant}</li>)}
        </ul>
        <p dangerouslySetInnerHTML={{ __html: translation.WHAT_IS_HLOTH.TEXT3 }} />
      </div>
    </Card>
  )
}

function AboutMeAsPerson() {
  const translation = useAppSelector(selectTranslation).ABOUT_ME

  return (
    <Card className={styles.about}>
      <div className={styles.text}>
        <h2 dangerouslySetInnerHTML={{ __html: translation.ABOUT_ME_AS_PERSON.HEADING }} />
        <p dangerouslySetInnerHTML={{ __html: translation.ABOUT_ME_AS_PERSON.INTRO }} />
        <p dangerouslySetInnerHTML={{ __html: dates(translation.ABOUT_ME_AS_PERSON.TEXT, 'floor') }} className='whitespace-pre-wrap' />
      </div>
    </Card>
  )
}

function MiniProfile() {
  const translation = useAppSelector(selectTranslation)

  return (
    <div className='flex-1 flex flex-col gap-2'>
      <Card
        containerClassname={`${styles.profileCard} relative [&>*]:pb-16`}
        avatar={<img src={avatar} width={100} height={100} style={{ borderRadius: 999 }} />}
        avatarStyles={{ padding: 0, boxShadow: '0 0 2px 0 rgba(0, 0, 0.25)' }}
        title={`${translation.CARD_ME_FIRST_NAME} ${translation.CARD_ME_LAST_NAME}`}
        subtitle={translation.FULL_SPECIALIZATION}
        caption='VityaSchel / @hloth'
      >
        <a className='w-full block absolute bottom-0 left-0 text-white border-solid border-t border-x-0 border-b-0 border-t-neutral-800' href='https://cv.hloth.dev' target='_blank' rel='nofollow noreferrer'>
          <ButtonBase tabIndex={-1} className='font-[inherit] font-medium w-full !justify-between !p-4 text-xs'>
            <div>Открыть CV / Резюме</div>
            <MdChevronRight className='text-white' />
          </ButtonBase>
        </a>
      </Card>
    </div>
  )
}

function Contacts() {
  return (
    <Card 
      containerClassname={styles.contactsContainer}
      className='flex flex-col gap-3'
    >
      {Object.values(links).map((link, i) => (
        <div key={i} className='flex items-center gap-2.5'>
          <link.icon /> <a href={link.href} target='_blank' rel='noreferrer'>{link.label}</a>
        </div>
      ))}
    </Card>
  )
}

const links = {
  GitHub: {
    icon: ImGithub,
    href: 'https://github.com/VityaSchel',
    label: '@VityaSchel'
  },
  // VKontakte: {
  //   icon: VKLogo,
  //   href: 'https://vk.com/hloth',
  //   label: 'Виктор Щелочков'
  // },
  LinkedIN: {
    icon: LinkedinLogo,
    href: 'https://www.linkedin.com/in/hloth/',
    label: 'Viktor Shchelochkov'
  },
  Twitter: {
    icon: AiFillTwitterCircle,
    href: 'https://twitter.com/hlothdev',
    label: '@hlothdev'
  },
  Telegram: {
    icon: SiTelegram,
    href: 'https://t.me/hlothdev',
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
    label: '8 9019 404 69 8'
  },
}

export function Me() {
  const isMobile = useMediaQuery('(max-width: 1360px)')

  return (
    <div className={styles.me}>
      {
        !isMobile
          ? (<>
            <div className={styles.info}>
              <AboutCard isMobile={isMobile} />
              <AboutMeAsPerson />
              <WhatIsHloth />
            </div>
            <div className={styles.rightCol}>
              <div className={styles.topRow}>
                <MiniProfile />
                <Contacts />
              </div>
              <Experience />
            </div>
          </>)
          : (<div className={styles.info}>
            <MiniProfile />
            <Contacts />
            <AboutCard isMobile={isMobile} />
            <Experience />
            <AboutMeAsPerson />
            <WhatIsHloth />
          </div>)
      }
    </div>
  )
}