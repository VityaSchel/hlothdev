import PropTypes from 'prop-types'
import Card from '../Card'
import styles from '../styles.module.scss'
import { connect } from 'react-redux'
import { Translation } from 'types/definitions'
import Formik from 'formik'
import Yup from 'yup'

AboutSite.propTypes = {
  translation: PropTypes.object,
}

function AboutSite(props: { translation: Translation }) {
  const translation = props.translation.DONATE

  return (
    <div className={styles.donateContainer}>
      <Card
        title={translation.MAIN_BLOCK_HEADING}
      >
        <Formik
          initialValues={{ 
            username: '',
            amount: '',
          }}
          validationSchema={
            Yup.object({
              username: Yup.string()
                .max(64)
                .required(),
              amount: Yup.number()
                .min(0.5)
                .max(1000)
              // TODO: list of goodies
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Card>
      <Card
        title={translation.DONATES_HISTORY}
      >
        
      </Card>
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(AboutSite)
