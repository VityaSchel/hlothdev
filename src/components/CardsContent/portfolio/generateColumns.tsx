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
import type { Project } from '@/data/projects'
import { Translation } from '@/data/localization'
import type { GridColDef } from '@mui/x-data-grid'
import React from 'react'

export default function generateColumns({ locale, translation, setSearchTerms, showShockingProjects, ignoreContentWidthLimit = false }: {
  locale: string
  translation: Translation['PORTFOLIO']
  setSearchTerms: (terms: string[]) => void
  showShockingProjects: boolean
  ignoreContentWidthLimit?: boolean
}): GridColDef<Project>[] {
  const dateRegex = /^\d+[ -]\w+[ -]\d+$/

  const search = (terms: string) => (e: any) => {
    setSearchTerms([terms])
    e.stopPropagation()
  }

  const renderDate = ({ value }: { value: any }) => (value && (dateRegex.test(value) || value instanceof Date))
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
      renderCell: ({ row }: { row: Project }) => {
        let icon: React.ReactNode
        if(row.logo && (!row.unpublic || showShockingProjects)) {
          icon = (
            <img src={row.logo} className='w-full aspect-square' />
          )
        } else {
          const shockingProject = row.unpublic && !showShockingProjects
          let Logo
          if (row.hidden) Logo = eyeOff
          else if(shockingProject) Logo = alertDecagram
          else Logo = {
            'figma_plugin': figmaIcon,
            'npmjs_library': npmLogo,
            'app': appIcon,
            'website': webIcon,
            'bot': robotIcon,
            'game': gamepadIcon,
          }[row.category?.split('/')[0]] ?? branchIcon
          icon = (
            <Logo className='grayscale-[1] w-full h-full rounded-[5px]' />
          )
        }

        return (
          <div className='h-full flex items-center justify-center'>
            <div className='rounded-[5px] overflow-clip w-[41px] h-auto aspect-square flex'>
              {icon}
            </div>
          </div>
        )
      }
    },
    {
      field: 'name',
      headerName: translation.COLUMNS.NAME,
      ...(!ignoreContentWidthLimit ? { flex: 8 } : { width: 10 * mobileContentWidthMult }),
      renderCell: ({ row }: { row: Project }) => {
        const shockingProject = row.unpublic && !showShockingProjects
        let name: string = row.name
        if (row.hidden) name = translation.HIDDEN_PROJECT.NAME
        else if (shockingProject) name = translation.SHOCK_PROJECT.NAME

        const translatedCategory = translation.CATEGORIES[row.category as keyof typeof translation.CATEGORIES]

        return (
          <div className='flex flex-col gap-1 justify-center h-full leading-normal'>
            <div className='flex flex-wrap gap-x-2 items-center'>
              <span className={cx('text-wrap leading-tight',
                (row.hidden || shockingProject) ? 'text-[#dedede] italic' : 'font-semibold'
              )}>
                {name}
              </span>
              {row.tags?.includes('order') && (
                <Chip label={translation.TAGS.ORDER} size='small' />
              )}
              {row.unpublic && !row.hidden && showShockingProjects && (
                <Chip label={translation.SHOCK_PROJECT.NAME} size='small' />
              )}
            </div>
            {row.category && (
              <span className='text-[color:var(--secondary-text-color)]' onClick={search(translatedCategory)}>{translatedCategory}</span>
            )}
          </div>
        )
      }
    },
    {
      field: 'description',
      headerName: translation.COLUMNS.DESCRIPTION,
      ...(!ignoreContentWidthLimit ? { flex: 18 } : { width: 18 * mobileContentWidthMult }),
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row }: { row: Project }) => {
        const shockingProject = row.unpublic && !showShockingProjects
        let description: string = locale in row.description 
          ? row.description[locale as keyof typeof row.description] 
          : row.description['_DEFAULT_']
        if(row.hidden) description = translation.HIDDEN_PROJECT.DESCRIPTION_PREVIEW
        else if(shockingProject) description = translation.SHOCK_PROJECT.DESCRIPTION_PREVIEW
        return (
          <div className='flex items-center h-full'>
            <span
              className={cx('text-ellipsis whitespace-normal leading-[1.43] line-clamp-3', { 
                'text-[#dedede] italic': row.hidden || shockingProject,
              })} 
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        )
      }
    },
    {
      field: 'stack',
      headerName: translation.COLUMNS.TECHNOLOGIES,
      // ...(!ignoreContentWidthLimit ? { flex: 10 } : { width: 7 * mobileContentWidthMult }),
      flex: 12,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row }: { row: Project }) => (
        <div className='flex items-center h-full'>
          <span className='whitespace-normal leading-[1.75] pt-[3px] pb-[5px] px-0 text-center w-full overflow-auto'>
            {row.stack.map(technology => (
              <>
                <Chip
                  label={technology}
                  size='small'
                  onClick={search(technology)}
                  key={technology}
                  className='xs-chip'
                />
                <span>&#32;&#32;</span>
              </>
            ))}
          </span>
        </div>
      ),
    },
    {
      field: 'dates',
      headerName: translation.COLUMNS.DATES.RELEASE,
      renderCell: ({ row }: { row: Project }) => (
        <div className='flex flex-col justify-center h-full gap-1 text-xs'>
          {row.dates.devStart && (
            <div className='flex flex-col'>
              <span className='font-bold'>{translation.DATES.DEV_START}:</span>
              <span>{renderDate({ value: row.dates.devStart })}</span>
            </div>
          )}
          {row.dates.release && (
            <div className='flex flex-col'>
              <span className='font-bold'>{translation.DATES.RELEASE}:</span>
              <span>{renderDate({ value: row.dates.release })}</span>
            </div>
          )}
        </div>
      ),
      sortComparator: (v1: Project['dates'], v2: Project['dates']) => {
        const v1Date = v1.release || v1.devStart
        const v2Date = v2.release || v2.devStart
        return new Date(v1Date).getTime() - new Date(v2Date).getTime()
      },
      width: 170
    },
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
