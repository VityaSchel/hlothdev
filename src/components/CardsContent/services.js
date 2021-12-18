import Card from './Card'
import LanguageIcon from '@mui/icons-material/Language'
import styles from './styles.module.scss'

export default function Services() {
  return (
    <div className={styles.services}>
      <Card
        avatar={<LanguageIcon />}
        title='Разработка лендинга'
        subtitle=''
        caption=''
      />
      <Card
        avatar={<LanguageIcon />}
        title='Разработка сайта «под ключ»'
        subtitle=''
        caption=''
      />
      <Card
        avatar={<LanguageIcon />}
        title='Разработка бота'
        subtitle=''
        caption=''
      />
    </div>
  )
}
