import PropTypes from 'prop-types'
import Card from './Card'
import LanguageIcon from '@mui/icons-material/Language'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { GiRobotAntennas, GiAbstract016 } from 'react-icons/gi'
import styles from './styles.module.scss'
import mailTo from 'mailto-link'
import { connect } from 'react-redux'

Services.propTypes = {
  translation: PropTypes.object,
}

function Services(props) {
  const cards = props.translation.SERVICES_CARDS
  if(!cards) return <></>

  return (
    <div className={styles.services}>
      <Card
        avatar={<MdOutlineSpaceDashboard />}
        title={cards.landing.title}
        subtitle={cards.landing.description}
        caption={cards.landing.price}
        link={mailTo({ to: 'hi@hloth.dev', subject: cards.landing.title })}
      />
      <Card
        avatar={<LanguageIcon />}
        title={cards.turnkey_website.title}
        subtitle={cards.turnkey_website.description}
        caption={cards.turnkey_website.price}
        link={mailTo({ to: 'hi@hloth.dev', subject: cards.turnkey_website.title })}
      />
      <Card
        avatar={<GiRobotAntennas />}
        title={cards.bot.title}
        subtitle={cards.bot.description}
        caption={cards.bot.price}
        link={mailTo({ to: 'hi@hloth.dev', subject: cards.bot.title })}
      />
      <Card
        avatar={<GiAbstract016 />}
        title={cards.other.title}
        subtitle={cards.other.description}
        caption={cards.other.price}
        link={mailTo({ to: 'hi@hloth.dev', subject: cards.other.title })}
      />
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(Services)
