import React from 'react'
import styles from './styles.module.scss'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import projects, { Project } from '../../../data/projects'
import copy from 'copy-to-clipboard'
import { MdLink, MdOutlineTranslate } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectTranslation } from '@/store/reducers/translation'
import { selectPortfolio, setShowShockingProjects } from '@/store/reducers/portfolio'
import { selectLocale } from '@/store/reducers/locale'

export default function ProjectInfoDialog({ openedProjectID, setOpenedProjectID }: {
  openedProjectID: string | null
  setOpenedProjectID: (id: string | null) => void
}) {
  const translation = useAppSelector(selectTranslation).PORTFOLIO
  const portfolio = useAppSelector(selectPortfolio)
  const dispatch = useAppDispatch()
  const [shareTooltipOpened, setShareTooltipOpened] = React.useState(false)
  const { locale } = useAppSelector(selectLocale)

  const [openedProject, setOpenedProject] = React.useState<Project | null>(null)

  React.useEffect(() => {
    if(!openedProjectID) {
      return
    }
    const project = decodeURIComponent(openedProjectID)
    setOpenedProject(projects.find(({ id }) => id === project) ?? null)
  }, [openedProjectID])
  const showShockingProjects = portfolio.showShockingProjects
  const shockingProject = showShockingProjects ? false : (!openedProject?.hidden && openedProject?.unpublic)
  const actualProject = openedProject?.unpublic ? showShockingProjects : !openedProject?.hidden

  const handleClose = () => {
    const parts = window.location.pathname.split('/')
    parts.pop()
    const newPath = parts.join('/') + window.location.search
    history.pushState(null, '', newPath)
    setOpenedProjectID(null)
  }

  const handleShare = () => {
    const url = window.location.origin + window.location.pathname
    if('share' in navigator) {
      navigator.share({
        url,
        title: `${document.title} — ${openedProject!.name}`
      })
    } else {
      copy(url)
      setShareTooltipOpened(true)
    }
  }

  return (
    <Dialog
      open={Boolean(openedProjectID)}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {
          openedProject && (
            openedProject.hidden
              ? translation.HIDDEN_PROJECT.NAME
              : shockingProject
                ? translation.SHOCK_PROJECT.NAME
                : openedProject.name
          )
        }
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {openedProject && (
            <p 
              className='m-0'
              dangerouslySetInnerHTML={{
                __html:
                  openedProject.hidden
                    ? translation.HIDDEN_PROJECT.DESCRIPTION.replace('%PROJECT_ID%', openedProject.name.substring(9))
                    : shockingProject
                      ? translation.SHOCK_PROJECT.DESCRIPTION
                      : locale in openedProject.description
                        ? openedProject.description[locale as keyof typeof openedProject.description]
                        : openedProject.description['_DEFAULT_']
              }}
            />
          )}
        </DialogContentText>
        {
          actualProject && openedProject && openedProject.links && 
          <DialogContentText className={styles.links}>
            <span><MdLink /> {translation.PROJECT_DIALOG.LINKS_LABEL}:</span>
            {openedProject.links.map(link => (
              <span key={link}>
                <a href={link} target='_blank' rel='noreferrer'>{link}</a>
              </span>
            ))}
          </DialogContentText>
        }
      </DialogContent>
      <DialogActions>
        {actualProject && <Tooltip open={shareTooltipOpened} title={translation.PROJECT_DIALOG.LINK_COPIED}>
          <Button onClick={handleShare} onPointerOut={() => setShareTooltipOpened(false)}>
            {translation.PROJECT_DIALOG.SHARE_LABEL}
          </Button>
        </Tooltip>}
        {shockingProject && <Button onClick={() => dispatch(setShowShockingProjects(true))}>
          {translation.PROJECT_DIALOG.SHOW_SHOCKING_PROJECTS}
        </Button>}
        <Button onClick={handleClose}>{translation.PROJECT_DIALOG.CLOSE_LABEL}</Button>
      </DialogActions>
    </Dialog>
  )
}