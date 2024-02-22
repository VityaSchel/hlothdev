import styles from './styles.module.scss'
import Chip from '@mui/material/Chip'
import cx from 'classnames'
import { ReactComponent as figmaIcon } from '@/assets/images/svgIcons/figma_logo.svg'
import { ReactComponent as branchIcon } from '@/assets/images/svgIcons/branch_icon.svg'
import { ReactComponent as gamepadIcon } from '@/assets/images/svgIcons/gamepad_icon.svg'
import { ReactComponent as npmLogo } from '@/assets/images/svgIcons/npm_logo.svg'
import { ReactComponent as robotIcon } from '@/assets/images/svgIcons/robot_icon.svg'
import { ReactComponent as webIcon } from '@/assets/images/svgIcons/web_icon.svg'
import { ReactComponent as appIcon } from '@/assets/images/svgIcons/app_icon.svg'
import { ReactComponent as alertDecagram } from '@/assets/images/svgIcons/mdi_alert_decagram.svg'
import { ReactComponent as eyeOff } from '@/assets/images/svgIcons/mdi_eye_off.svg'

export default function generateColumns({ 
  locale, translation, setSearchTerms, showShockingProjects, ignoreContentWidthLimit = false }) {
  const dateRegex = /^\d+[ -]\w+[ -]\d+$/
  const dateColWidth = 150

  const search = terms => e => {
    setSearchTerms([terms])
    e.stopPropagation()
  }

  const renderDate = ({ value }) => (value && (dateRegex.test(value) || value instanceof Date))
    ? Intl.DateTimeFormat(locale, { day: '2-digit', month: 'long', year: 'numeric' })
      .format(value instanceof Date ? value : new Date(value))
    : value

  const mobileContentWidthMult = 20

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
        if(logo && (!unpublic || showShockingProjects)) {
          return <img src={logo} height={100} className={styles.logo} />
        } else {
          const shockingProject = unpublic && !showShockingProjects
          let Logo
          if(hidden) Logo = eyeOff
          else if(shockingProject) Logo = alertDecagram
          else Logo = {
            'figma_plugin': figmaIcon,
            'npmjs_library': npmLogo,
            'app': appIcon,
            'website': webIcon,
            'bot': robotIcon,
            'game': gamepadIcon,
          }[category?.split('/')[0]] ?? branchIcon
          return <Logo className={[styles.logo, styles.placeholderLogo].join(' ')} />
        }
      }
    },
    {
      field: 'name',
      headerName: translation.COLUMNS.NAME,
      ...(!ignoreContentWidthLimit ? { flex: 10 } : { width: 10 * mobileContentWidthMult }),
      renderCell: ({ row: { name, category, hidden, unpublic, tags } }) => {
        const shockingProject = unpublic && !showShockingProjects
        if(hidden) name = translation.HIDDEN_PROJECT.NAME
        else if(shockingProject) name = translation.SHOCK_PROJECT.NAME

        const translatedCategory = translation.CATEGORIES[category]

        return <span className={cx(styles.multilineCell, styles.nameCell)}>
          <div className={styles.info}>
            <span className={(hidden || shockingProject) ? styles.projectInfoPlaceholder : styles.projectName}>{name}</span>
            {category && (
              <span className={styles.projectCategory} onClick={search(translatedCategory)}>{translatedCategory}</span>
            )}
          </div>
          {tags?.includes('order') && (
            <Chip label={translation.TAGS.ORDER} size='small' />
          )}
          {unpublic && showShockingProjects && (
            <Chip label={translation.HIDDEN_PROJECT.NAME} size='small' />
          )}
        </span>
      }
    },
    {
      field: 'description',
      headerName: translation.COLUMNS.DESCRIPTION,
      ...(!ignoreContentWidthLimit ? { flex: 18 } : { width: 18 * mobileContentWidthMult }),
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row: { description, hidden, unpublic } }) => {
        const shockingProject = unpublic && !showShockingProjects
        if(hidden) description = translation.HIDDEN_PROJECT.DESCRIPTION_PREVIEW
        else if(shockingProject) description = translation.SHOCK_PROJECT.DESCRIPTION_PREVIEW
        return (
          <span className={cx(styles.description, { [styles.projectInfoPlaceholder]: hidden || shockingProject })}>
            {description}
          </span>
        )
      }
    },
    {
      field: 'stack',
      headerName: translation.COLUMNS.TECHNOLOGIES,
      ...(!ignoreContentWidthLimit ? { flex: 7 } : { width: 7 * mobileContentWidthMult }),
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row: { stack } }) => <span className={[styles.multilineCell, styles.stack].join(' ')}>
        {stack.map(technology => (
          <>
            <Chip
              label={technology}
              size='small'
              onClick={search(technology)}
              key={technology}
            />
            <span>&#32;&#32;</span>
          </>
        ))}
      </span>
    },
    {
      field: 'dates.devStart',
      headerName: translation.COLUMNS.DATES.DEVSTART,
      renderCell: renderDate,
      width: dateColWidth
    },
    {
      field: 'dates.release',
      headerName: translation.COLUMNS.DATES.RELEASE,
      renderCell: renderDate,
      width: dateColWidth
    },
    {
      field: 'dates.abandon',
      headerName: translation.COLUMNS.DATES.ABANDON,
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
