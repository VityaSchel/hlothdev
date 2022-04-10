import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Card from '../Card'
import categories from '../../../lib/categories.js'
import technologies from '../../../lib/technologies.js'
import projects from '../../../lib/projects.js'
import MUICard from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

Experience.propTypes = {
  translation: PropTypes.object,
  dispatch: PropTypes.func
}

export default function Experience(props) {
  const openProjects = terms => () => {
    const termsUnique = Array.from(new Set(terms.map(s => s.toLowerCase())))
    const query = new URLSearchParams(window.location.search)
    query.set('q', encodeURIComponent(termsUnique.join(' ')))
    const newRelativePathQuery = '/portfolio' + '?' + query.toString()
    history.replaceState(null, '', newRelativePathQuery)
    setTimeout(() => props.dispatch({ type: 'route/set', route: 'portfolio' }), 1000)
  }

  return (
    <div className={styles.experience}>
      <Card className={styles.categories}>
        {categories.map(categoryID => (
          <div key={categoryID}>
            <Typography variant='overline'>{props.translation.ABOUT_ME.CATEGORIES[categoryID]}</Typography>
            <div className={styles.technologiesGrid}>
              {
                Object.entries(technologies)
                  .filter(([, technologyInfo]) => technologyInfo.category === categoryID)
                  .map(([technologyID, technologyInfo]) => (
                    <MUICard variant='outlined' className={styles.technology} key={technologyID}>
                      <CardContent sx={{ paddingBottom: 0 }}>
                        <Typography variant='h6' component='div' className={styles.name}>
                          <technologyInfo.logo /> {technologyInfo.name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color='text.secondary'>
                          {props.translation.ABOUT_ME.STARTED_LEARNING} <b>{Intl.DateTimeFormat(props.translation.ISO_CODE, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          }).format(technologyInfo.startedLearning)}</b>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' onClick={openProjects([technologyID, technologyInfo.name, ...(technologyInfo.aliases || [])])}>{
                          props.translation.ABOUT_ME.OPEN_PROJECTS_CAPTION} ({
                          projects.filter(project => 
                            project.stack.map(s => s.toLowerCase()).includes(technologyID.toLowerCase())
                            || project.stack.map(s => s.toLowerCase()).includes(technologyInfo.name.toLowerCase())
                            || technologyInfo.aliases?.some(alias => project.stack.map(s => s.toLowerCase()).includes(alias.toLowerCase()))
                          ).length
                        })</Button>
                      </CardActions>
                    </MUICard>
                  ))
              }
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}