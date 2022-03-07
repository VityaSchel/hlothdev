import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Card from '../Card'
import categories from '../../../lib/categories.js'
import technologies from '../../../lib/technologies.js'
import MUICard from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

Experience.propTypes = {
  translation: PropTypes.object
}

export default function Experience(props) {
  return (
    <div className={styles.experience}>
      <Card>
        {categories.map(categoryID => (
          <div key={categoryID}>
            <Typography variant='overline'>{props.translation.CATEGORIES[categoryID]}</Typography>
            <div className={styles.technologiesGrid}>
              {
                Object.entries(technologies)
                  .filter(([, technologyInfo]) => technologyInfo.category === categoryID)
                  .map(([technologyID, technologyInfo]) => (
                    <MUICard variant='outlined' className={styles.technology} key={technologyID}>
                      <CardContent sx={{ paddingBottom: 0 }}>
                        <Typography variant='h6' component='div' className={styles.name}>
                          {/* <img src={technologyInfo.logo} className={styles.logo} /> {technologyInfo.name} */}
                          <technologyInfo.logo /> {technologyInfo.name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color='text.secondary'>
                          начал учить <b>{Intl.DateTimeFormat('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          }).format(technologyInfo.startedLearning)}</b>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small'>Смотреть проекты (13)</Button>
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