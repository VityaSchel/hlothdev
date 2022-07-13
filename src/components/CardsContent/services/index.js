import PropTypes from 'prop-types'
import Card from '../Card'
import LanguageIcon from '@mui/icons-material/Language'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { GiRobotAntennas, GiAbstract016 } from 'react-icons/gi'
import styles from './styles.module.scss'
import mailTo from 'mailto-link'
import { connect } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery'

Services.propTypes = {
  translation: PropTypes.object,
}

function Services(props) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const cards = props.translation.SERVICES_CARDS
  if(!cards) return <></>

  const cardsContent = [
    { avatar: <MdOutlineSpaceDashboard />, key: 'landing' },
    { avatar: <LanguageIcon />, key: 'turnkey_website' },
    { avatar: <GiRobotAntennas />, key: 'bot' },
    { avatar: <GiAbstract016 />, key: 'other' },
  ]

  return (
    <div className={styles.services}>
      {cardsContent.map(card => <Card
        key={card.key}
        avatar={!isMobile && card.avatar}
        title={isMobile 
          ? <><span className={styles.avatar}>{card.avatar}</span> {cards[card.key].title}</> 
          : cards[card.key].title
        }
        subtitle={cards[card.key].description}
        caption={cards[card.key].price}
        link={mailTo({ to: 'hi@hloth.dev', subject: cards[card.key].title })}
      />)}
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(Services)
