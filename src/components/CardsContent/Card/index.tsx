import styles from './styles.module.scss'
import { connect } from 'react-redux'
import cx from 'classnames'
import { MdChevronRight } from 'react-icons/md'

import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import { useAppSelector } from '@/store/hooks'
import { selectTheme } from '@/store/reducers/theme'

interface CardProps {
  children?: React.ReactNode
  avatar?: React.ReactNode
  containerStyle?: string | string[]
  className?: string | string[]
  avatarStyles?: object
  title?: string | React.ReactNode
  subtitle?: string
  caption?: string
  theme?: string
  link?: string
}

function Card(props: CardProps) {
  return (
    <>
      {props.avatar && <div className={styles.avatar} style={props.avatarStyles}>
        {props.avatar}
      </div>}
      <div className={cx(styles.content, props.className)}>
        {props.title && <div className={styles.title}>
          <Typography variant='h6' gutterBottom component='div'>
            {props.title}
          </Typography>
        </div>}
        {props.subtitle && <div className={styles.subtitle}>
          <Typography variant='subtitle1' gutterBottom component='div'>
            {props.subtitle}
          </Typography>
        </div>}
        {props.children}
        {props.caption && <div className={styles.caption}>
          <Typography variant='overline' gutterBottom display='block'>
            {props.caption}
          </Typography>
        </div>}
      </div>
      {props.link && <div className={styles.chevron}>
        <MdChevronRight />
      </div>}
    </>
  )
}

type CardContainerProps = {
  children?: React.ReactNode;
  avatar?: React.ReactNode;
  containerStyle?: string | string[];
  className?: string | string[];
  title?: string | React.ReactNode;
  subtitle?: string;
  caption?: string;
  link?: string;
};

function CardContainer(props: CardContainerProps) {
  const { theme } = useAppSelector(selectTheme)
  const containerClassName = cx(styles.card, { [styles.darkTheme]: theme === 'dark' })

  return (
    props.link
      ? (
        <ButtonBase className={[styles.container, props.containerStyle].join(' ') }>
          <a className={containerClassName} href={props.link}>
            <Card {...props} />
          </a>
        </ButtonBase>
      ) : (
        <div className={[styles.container, props.containerStyle].join(' ')}>
          <div className={containerClassName}>
            <Card {...props} />
          </div>
        </div>
      )
  )
}

export default CardContainer
