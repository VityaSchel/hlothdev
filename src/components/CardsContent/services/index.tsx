import Card from '../Card'
import LanguageIcon from '@mui/icons-material/Language'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { GiRobotAntennas, GiAbstract016 } from 'react-icons/gi'
import styles from '../styles.module.scss'
import mailTo from 'mailto-link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useAppSelector } from '@/store/hooks'
import { selectTranslation } from '@/store/reducers/translation'

export function Services() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const cards = useAppSelector(selectTranslation).SERVICES_CARDS
  if(!cards) return <></>

  const cardsContent = [
    { avatar: <MdOutlineSpaceDashboard />, key: 'landing' },
    { avatar: <LanguageIcon />, key: 'turnkey_website' },
    { avatar: <GiRobotAntennas />, key: 'bot' },
    { avatar: <GiAbstract016 />, key: 'other' },
  ]

  return (
    <div className={`${styles.services} grid xl:grid-cols-2`}>
      {cardsContent.map(card => {
        const cardKey = card.key as keyof typeof cards
        return (
          <Card
            key={card.key}
            avatar={!isMobile && card.avatar}
            title={isMobile 
              ? <><span className={styles.avatar}>{card.avatar}</span> {cards[cardKey].title}</> 
              : cards[cardKey].title
            }
            subtitle={<p className='text-sm'>{cards[cardKey].description}</p>}
            caption={cards[cardKey].price}
            link={mailTo({ to: 'hi@hloth.dev', subject: cards[cardKey].title })}
          />
        )
      })}
    </div>
  )
}