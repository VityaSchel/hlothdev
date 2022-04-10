import PropTypes from 'prop-types'
import Card from './Card'
import LanguageIcon from '@mui/icons-material/Language'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { GiRobotAntennas, GiAbstract016 } from 'react-icons/gi'
import styles from './styles.module.scss'
import mailTo from 'mailto-link'
import { connect } from 'react-redux'

AboutSite.propTypes = {
  translation: PropTypes.object,
}

function AboutSite(props) {
  const translation = props.translation.DONATE

  return (
    <div className={styles.aboutSite}>
      <Card
        title={translation.HEADING}
      >
        <div className={styles.donate}>
          <p>{translation.TEXT}</p>
          <a href={translation.EXTERNAL_DONATE_SITE}>{translation.EXTERNAL_DONATE_SITE}</a>
        </div>
      </Card>
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(AboutSite)
