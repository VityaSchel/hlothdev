import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'

SiteSettings.propTypes = {
  locale: PropTypes.string,
  theme: PropTypes.string,
}
function SiteSettings(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <button>
        Hello world
      </button>
    </div>
  )
}

export default connect(state => ({ locale: state.locale, theme: state.theme }))(SiteSettings)
