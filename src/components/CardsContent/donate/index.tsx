import PropTypes from 'prop-types'
import Card from '../Card'
import styles from '../styles.module.scss'
import { connect } from 'react-redux'

AboutSite.propTypes = {
  translation: PropTypes.object,
}

function AboutSite(props) {
  const translation = props.translation.DONATE

  return (
    <div className={styles.donateContainer}>
      <Card
        title={translation.HEADING}
      >
        <div className={styles.donateCard}>
          <p>{translation.TEXT}</p>
          <a href={translation.EXTERNAL_DONATE_SITE}>{translation.EXTERNAL_DONATE_SITE}</a>
        </div>
      </Card>
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(AboutSite)
