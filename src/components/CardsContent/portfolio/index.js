import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { DataGrid, ruRU as xDataGridRu, enUS as xDataGridEnUS } from '@mui/x-data-grid'
import projectsList from 'lib/projects'
import { dotFlatten } from 'utils.js'
import generateColumns from './generateColumns'
import Search from './Search'

Portfolio.propTypes = {
  translation: PropTypes.object,
  locale: PropTypes.string
}

function Portfolio(props) {
  const [searchTerms, setSearchTerms] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const translation = props.translation.PORTFOLIO
  React.useEffect(() => setLoading(false), [searchTerms])

  const dateRegex = /^\d+ \w+ \d+$/

  const columns = generateColumns({
    locale: props.locale,
    translation,
    setSearchTerms
  })

  const projects = projectsList
    .filter(project => {
      if(!searchTerms.length) return true
      const terms = searchTerms.map(term => term.toLowerCase())
      if(terms.some(term => project.name.toLowerCase().includes(term))) return true
      if(terms.some(term => project.description.toLowerCase().includes(term))) return true
      if(terms.some(term => project.category.toLowerCase().includes(term))) return true
      if(terms.some(term => project.stack?.some?.(tech => tech.toLowerCase().includes(term)))) return true
    })
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
        id: project.name
      }
    })
  const handleProjectClick = id => alert(id)

  return (
    <div className={styles.portfolio}>
      <Search
        translation={translation}
        setSearchTerms={setSearchTerms}
        setLoading={setLoading}
      />
      <DataGrid
        rows={projects}
        columns={columns}
        pageSize={25}
        rowBuffer={5}
        disableVirtualization
        rowsPerPageOptions={[]}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick
        onCellClick={({ id }) => handleProjectClick(id)}
        localeText={({ 'ru-RU': xDataGridRu }[props.locale] ?? xDataGridEnUS).components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
        className={styles.dataGrid}
      />
    </div>
  )
}

export default connect(state => ({ translation: state.translation, locale: state.locale }))(Portfolio)
