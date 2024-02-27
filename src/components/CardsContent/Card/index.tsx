import cx from 'classnames'
import { MdChevronRight } from 'react-icons/md'

import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import { useAppSelector } from '@/store/hooks'
import { selectTheme } from '@/store/reducers/theme'

interface CardProps {
  children?: React.ReactNode
  avatar?: React.ReactNode
  containerClassname?: string | string[]
  className?: string | string[]
  avatarStyles?: object
  title?: React.ReactNode
  subtitle?: React.ReactNode
  caption?: string
  theme?: string
  link?: string
}

export function Card(props: CardProps) {
  return (
    <>
      {props.avatar && <div className={'mr-[10px] bg-[var(--paper-background)] transition-[background-color] duration-500 p-[20px] flex justify-center items-center rounded-[999px] shadow-cardavatar [&>svg]:w-[48px] [&>svg]:h-[48px]'} style={props.avatarStyles}>
        {props.avatar}
      </div>}
      <div className={cx('flex flex-col text-left flex-[1]', props.className)}>
        {props.title && <div>
          <Typography variant='h6' gutterBottom component='div' className='text-[var(--text-color)]'>
            {props.title}
          </Typography>
        </div>}
        {props.subtitle && <div>
          <Typography variant='subtitle1' gutterBottom component='div'>
            {props.subtitle}
          </Typography>
        </div>}
        {props.children}
        {props.caption && <div>
          <Typography variant='overline' gutterBottom display='block'>
            {props.caption}
          </Typography>
        </div>}
      </div>
      {props.link && <div className='flex items-center'>
        <MdChevronRight className='w-[30px] h-[30px] text-[var(--secondary-text-color)]' />
      </div>}
    </>
  )
}

type CardContainerProps = {
  children?: React.ReactNode
  avatar?: React.ReactNode
  avatarStyles?: React.CSSProperties
  containerClassname?: string | string[]
  className?: string | string[]
  title?: React.ReactNode
  subtitle?: React.ReactNode
  caption?: string
  link?: string
};

function CardContainer(props: CardContainerProps) {
  const { theme } = useAppSelector(selectTheme)
  const containerClassName = cx('w-full h-full box-border p-[25px] flex gap-[20px] items-center no-underline text-[#000] transition-colors duration-500 bg-opacity-1', { 
    'bg-[#282828] text-[#fff]': theme === 'dark',
    'bg-[#fff]': theme === 'light'
  })

  const containerClasses = cx('!rounded-[15px] overflow-hidden shadow-card-container [&_a]:font-semibold [&_a]:text-[0.9em] [&_a]:leading-[17px] [&_a]:no-underline', props.containerClassname)

  return (
    props.link
      ? (
        <ButtonBase className={containerClasses}>
          <a className={containerClassName}>
            <Card {...props} />
          </a>
        </ButtonBase>
      ) : (
        <div className={containerClasses}>
          <div className={containerClassName}>
            <Card {...props} />
          </div>
        </div>
      )
  )
}

export default CardContainer
