import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import projects from '../../../lib/projects'
import copy from 'copy-to-clipboard'
import { MdLink } from 'react-icons/md'

ProjectInfoDialog.propTypes = {
  updateFunc: PropTypes.func
}
export default function ProjectInfoDialog(props) {
  const [shareTooltipOpened, setShareTooltipOpened] = React.useState(false)

  const openedProjectID = window.location.pathname.substring(1)?.split?.('/')?.[1]
  const openedProject = projects.find(({ id }) => id === openedProjectID)
  const handleClose = () => {
    const parts = window.location.pathname.split('/')
    parts.pop()
    const newPath = parts.join('/') + window.location.search
    history.pushState(null, '', newPath)
    props.updateFunc({})
  }

  const handleShare = () => {
    const url = window.location.origin + window.location.pathname
    if('share' in navigator) {
      navigator.share({
        url,
        title: `${document.title} — ${openedProject.name}`
      })
    } else {
      copy(url)
      setShareTooltipOpened(true)
    }
  }

  if(!openedProject) return <div></div>
  return (
    <Dialog
      open={openedProjectID.length}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {openedProject.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {openedProject.description}
        </DialogContentText>
        {openedProject.links && <DialogContentText className={styles.links}>
          <span><MdLink /> Ссылки:</span>
          {openedProject.links.map(link => <span key={link}><a href={link}>{link}</a></span>)}
        </DialogContentText>}
      </DialogContent>
      <DialogActions>
        <Tooltip open={shareTooltipOpened} title='Ссылка скопирована'>
          <Button onClick={handleShare} onPointerOut={() => setShareTooltipOpened(false)}>Поделиться</Button>
        </Tooltip>
        <Button onClick={handleClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  )
}