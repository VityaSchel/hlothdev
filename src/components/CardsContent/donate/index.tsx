import Card from '../Card'
import styles from './styles.module.scss'
import DonateForm from './DonateForm'
import { useAppSelector } from '@/store/hooks'
import { selectTranslation } from '@/store/reducers/translation'

export function Donate() {
  const translation = useAppSelector(selectTranslation).DONATE

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