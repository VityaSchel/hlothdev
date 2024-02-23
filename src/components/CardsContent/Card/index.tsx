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
      {props.avatar && <div className={'mr-[10px] bg-[#eee] p-[20px] flex justify-center items-center rounded-[999px] shadow-card-avatar [&>svg]:w-[48px] [&>svg]:h-[48px]'} style={props.avatarStyles}>
        {props.avatar}
      </div>}
      <div className={cx('flex flex-col text-left flex-[1]', props.className)}>
        {props.title && <div>
          <Typography variant='h6' gutterBottom component='div'>
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
      {props.link && <div>
        <MdChevronRight className='w-[30px] h-[30px] text-[#fff]' />
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
  const containerClassName = cx('w-full h-full box-border p-[25px] flex gap-[20px] items-center bg-[#fff] no-underline text-[#000]', { 'bg-[linear-gradient(125deg,_#282828,_#1e1e1e)] text-[#fff]': theme === 'dark' })

  const containerClasses = `'!rounded-[15px] overflow-hidden shadow-card-container ${props.containerStyle}`

  return (
    props.link
      ? (
        <ButtonBase className={containerClasses}>
          <a className={containerClassName} href={props.link}>
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
