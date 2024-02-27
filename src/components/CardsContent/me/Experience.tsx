import styles from './styles.module.scss'
import Card from '../Card/index.js'
import categories from '../../../data/categories.js'
import technologies from '../../../data/technologies.js'
import projects from '../../../data/projects.js'
import MUICard from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '@/store/hooks.js'
import { selectTranslation } from '@/store/reducers/translation.js'
import { setRoute } from '@/store/reducers/route.js'

export default function Experience() {
  const translation = useAppSelector(selectTranslation)
  const dispatch = useAppDispatch()
  const openProjects = (terms: string[]) => () => {
    const termsUnique = Array.from(new Set(terms.map(s => s.toLowerCase())))
    const query = new URLSearchParams(window.location.search)
    query.set('q', termsUnique.map(term => /[ "]/.test(term) ? '"' + term + '"' : term).join(', '))
    dispatch(setRoute({ route: 'portfolio', params: query }))
  }

  return (
    <div className={styles.experience}>
      <Card className={styles.categories}>
        {categories.map(categoryID => (
          <div key={categoryID}>
            <Typography variant='overline'>{translation.ABOUT_ME.CATEGORIES[categoryID as keyof typeof translation.ABOUT_ME.CATEGORIES]}</Typography>
            <div className={styles.technologiesGrid}>
              {
                Object.entries(technologies)
                  .filter(([, technologyInfo]) => technologyInfo.category === categoryID)
                  .map(([technologyID, technologyInfo]) => (
                    <MUICard variant='outlined' className={styles.technologyCard} key={technologyID}>
                      <CardContent sx={{ paddingBottom: 0 }}>
                        <Typography variant='h6' component='div' className={styles.name}>
                          <technologyInfo.logo /> {technologyInfo.name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color='text.secondary'>
                          {translation.ABOUT_ME.STARTED_LEARNING} <b>{Intl.DateTimeFormat(translation.ISO_CODE, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          }).format(technologyInfo.startedLearning)}</b>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' onClick={openProjects([technologyID, technologyInfo.name, ...(technologyInfo.aliases || [])])}>{
                          translation.ABOUT_ME.OPEN_PROJECTS_CAPTION} ({
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