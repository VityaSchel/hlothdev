import styles from './styles.module.scss'
import Chip from '@mui/material/Chip'
import cx from 'classnames'
import { ReactComponent as figmaIcon } from 'assets/images/svgIcons/figma_logo.svg'
import { ReactComponent as branchIcon } from 'assets/images/svgIcons/branch_icon.svg'
import { ReactComponent as gamepadIcon } from 'assets/images/svgIcons/gamepad_icon.svg'
import { ReactComponent as npmLogo } from 'assets/images/svgIcons/npm_logo.svg'
import { ReactComponent as robotIcon } from 'assets/images/svgIcons/robot_icon.svg'
import { ReactComponent as webIcon } from 'assets/images/svgIcons/web_icon.svg'
import { ReactComponent as appIcon } from 'assets/images/svgIcons/app_icon.svg'
import { ReactComponent as alertDecagram } from 'assets/images/svgIcons/mdi_alert_decagram.svg'
import { ReactComponent as eyeOff } from 'assets/images/svgIcons/mdi_eye_off.svg'

export default function generateColumns({ locale, translation, setSearchTerms }) {
  const dateRegex = /^\d+ \w+ \d+$/
  const dateColWidth = 150

  const renderDate = ({ value }) => (value && (dateRegex.test(value) || value instanceof Date))
    ? Intl.DateTimeFormat(locale, { day: '2-digit', month: 'long', year: 'numeric' }).format(value)
    : value

  return [
    {
      field: 'logo',
      headerName: '',
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 71,
      renderCell: ({ row: { logo, category, hidden, unpublic } }) => {
        if(logo && !unpublic) {
          return <img src={logo} height={100} className={styles.logo} />
        } else {
          let Logo
          if(hidden) Logo = alertDecagram
          else if(unpublic) Logo = eyeOff
          else Logo = {
            'figma_plugin': figmaIcon,
            'npmjs_library': npmLogo,
            'app': appIcon,
            'website': webIcon,
            'bot': robotIcon,
            'game': gamepadIcon,
          }[category.split('/')[0]] ?? branchIcon
          return <Logo className={[styles.logo, styles.placeholderLogo].join(' ')} />
        }
      }
    },
    {
      field: 'name',
      headerName: 'Название',
      flex: 10,
      renderCell: ({ row: { name, category, hidden, unpublic } }) => {
        if(hidden) name = 'Скрытый проект'
        else if(unpublic) name = 'Нежелательный контент'

        const translatedCategory = translation.CATEGORIES[category]

        return <span className={styles.multilineCell}>
          <span className={(hidden || unpublic) ? styles.projectInfoPlaceholder : styles.projectName}>{name}</span>
          {category && <>
            <span>&#32;&#32;</span>
            <Chip label={translatedCategory} size='small' onClick={() => setSearchTerms([translatedCategory])} />
          </>}
        </span>
      }
    },
    {
      field: 'description',
      headerName: 'Описание',
      flex: 18,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row: { description, hidden, unpublic } }) => {
        if(hidden) description = 'Нажмите, чтобы узнать подробнее'
        else if(unpublic) description = 'Нажмите, чтобы показать информацию о проекте'
        return (
          <span className={cx(styles.description, { [styles.projectInfoPlaceholder]: hidden || unpublic })}>
            {description}
          </span>
        )
      }
    },
    {
      field: 'stack',
      headerName: 'Технологии',
      flex: 7,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row: { stack } }) => <span className={[styles.multilineCell, styles.stack].join(' ')}>
        {stack.map(technology => (
          <>
            <Chip
              label={technology}
              size='small'
              onClick={() => setSearchTerms([technology])}
              key={technology}
              // sx={{ backgroundColor: technologiesColors[technology] }}
            />
            <span>&#32;&#32;</span>
          </>
        ))}
      </span>
    },
    {
      field: 'dates.devStart',
      headerName: 'Начало разработки',
      renderCell: renderDate,
      width: dateColWidth
    },
    {
      field: 'dates.release',
      headerName: 'Релиз',
      renderCell: renderDate,
      width: dateColWidth
    },
    {
      field: 'dates.abandon',
      headerName: 'Приостановка',
      renderCell: renderDate,
      width: dateColWidth
    }
  ]
}

// const technologiesColors = {
//   'NextJS': '#000',
//   'React': '#61DAFB',
//   'PHP': '#8993BE',
//   'React-router': '#E94948',
//   'MUI': '#3399FF',
//   'TypeScript': '#2871BF',
//   'NodeJS': '#77AF63',
//   'MongoDB': '#0A944E',
//   'Telegram Bot API': '#22A9E8',
//   'Kubernetes': '#',
//   'Docker': '#',
//   'React Native': '#',
//   'Expo': '#',
//   'React-admin': '#',
//   'Redux': '#',
//   'React-redux': '#',
//   'Redux-toolkit': '#',
//   'rtk-query': '#',
//   'Reactstrap': '#',
//   'Bootstrap': '#',
//   'VK API': '#',
//   'McDonalds API': '#',
//   'Vite': '#',
//   'Preact': '#',
//   'webpack': '#',
//   'nginx': '#',
//   'JavaScript': '#',
//   'Tauri': '#',
//   'MySQL': '#',
//   'phpDevelStudio': '#'
// }
