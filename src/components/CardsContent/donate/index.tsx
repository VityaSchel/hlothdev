import PropTypes from 'prop-types'
import Card from '../Card'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { Translation } from 'types/definitions'
import DonateForm from './DonateForm'

AboutSite.propTypes = {
  translation: PropTypes.object,
}

function AboutSite(props: { translation: Translation }) {
  const translation = props.translation.DONATE

  return (
    <div className={styles.donateContainer}>
      <Card
        className={styles.donateCard}
        title={translation.MAIN_BLOCK_HEADING}
      >
        <DonateForm />
      </Card>
      <Card
        title={translation.DONATES_HISTORY}
      >
        
      </Card>
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(AboutSite)
