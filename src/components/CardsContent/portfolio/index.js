import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.module.scss'
import { connect } from 'react-redux'
import { DataGrid, ruRU as xDataGridRu, enUS as xDataGridEnUS } from '@mui/x-data-grid'
import projectsList from 'data/projects'
import { dotFlatten } from '../../../utils'
import generateColumns from './generateColumns'
import Search from './Search'
import ProjectInfoDialog from './ProjectInfoDialog'
import useMediaQuery from '@mui/material/useMediaQuery'

Portfolio.propTypes = {
  translation: PropTypes.object,
  portfolio: PropTypes.object,
  locale: PropTypes.string,
  dispatch: PropTypes.func
}

function Portfolio(props) {
  const [searchTerms, setSearchTerms] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [, forceUpdateOnHistoryPush] = React.useState(false)
  const [searchFilterFunc, setSearchFilterFunc] = React.useState(() => () => true)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const translation = props.translation.PORTFOLIO
  const dataGridRef = React.useRef()
  const searchRef = React.useRef()
  const dateRegex = /^\d+ \w+ \d+$/

  React.useEffect(() => setLoading(false), [searchTerms])

  const columns = generateColumns({
    locale: props.locale,
    translation,
    setSearchTerms: terms => {
      searchRef.current.setTerms(terms)
      setSearchTerms(terms)
    },
    showShockingProjects: props.portfolio.showShockingProjects,
    ignoreContentWidthLimit: isMobile
  })

  const projects = projectsList
    .filter(project => {
      if(!searchTerms.length) return true
      const terms = searchTerms.map(term => term.toLowerCase())
      if(terms.some(term => project.name.toLowerCase().includes(term))) return true
      if(terms.some(term => project.description?.toLowerCase().includes(term))) return true
      if(terms.some(term => translation.CATEGORIES[project.category]?.toLowerCase().includes(term))) return true
      if(terms.some(term => project.stack?.some(tech => tech.toLowerCase().includes(term)))) return true
    })
    .filter(searchFilterFunc)
    .map(project => {
      const date = dateString => new Date(dateString)
      project = dotFlatten(project, 'dates')
      project = Object.fromEntries(
        Object.entries(project).map(
          ([key, val]) => [
            key,
            (key.startsWith('dates') && dateRegex.test(val))
              ? date(val)
              : val
          ]
        )
      )
      return {
        ...project,
        logo: project.logo,
        id: project.id
      }
    })
  const handleProjectClick = id => {
    const newPath = '/portfolio/' + id + window.location.search
    history.pushState(null, '', newPath)
    forceUpdateOnHistoryPush({})
  }

  return (
    <div className={styles.portfolio}>
      <Search
        setSearchFilterFunc={setSearchFilterFunc}
        setSearchTerms={setSearchTerms}
        setLoading={setLoading}
        translation={translation}
        ref={searchRef}
      />
      <DataGrid
        rows={projects}
        columns={columns}
        ref={dataGridRef}

        pageSize={25}
        rowBuffer={5}
        disableVirtualization
        rowsPerPageOptions={[]}

        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick
        onCellClick={({ id }) => handleProjectClick(id)}
        onPageChange={() => dataGridRef?.current.querySelector('.MuiDataGrid-virtualScroller').scrollTo(0, 0)}
        localeText={({ 'ru-RU': xDataGridRu }[props.locale] ?? xDataGridEnUS).components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
        className={styles.dataGrid}
      />
      <ProjectInfoDialog
        translation={translation}
        updateFunc={forceUpdateOnHistoryPush}
        portfolio={props.portfolio}
        showShockingProjects={() => props.dispatch({ type: 'portfolio/showShockingProjects' })}
      />
    </div>
  )
}

export default connect(state => ({ 
  translation: state.translation,
  locale: state.locale,
  portfolio: state.portfolio
}))(Portfolio)
