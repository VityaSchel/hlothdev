import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { DataGrid, ruRU as xDataGridRu, enUS as xDataGridEnUS } from '@mui/x-data-grid'
import projectsList from 'lib/projects'
import { dotFlatten } from 'utils.js'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import { MdFilterList, MdClear } from 'react-icons/md'

Services.propTypes = {
  translation: PropTypes.object,
  locale: PropTypes.string
}

function Services(props) {
  const [searchTerms, setSearchTerms] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const cards = props.translation.SERVICES_CARDS
  React.useEffect(() => setLoading(false), [searchTerms])

  if(!cards) return <></>

  const dateRegex = /^\d+ \w+ \d+$/
  const dateColWidth = 150

  const renderDate = ({ value }) => (value && (dateRegex.test(value) || value instanceof Date))
    ? Intl.DateTimeFormat(props.locale, { day: '2-digit', month: 'long', year: 'numeric' }).format(value)
    : value

  const columns = [
    {
      field: 'logo',
      headerName: '',
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 71,
      renderCell: ({ row: { logo } }) => <img src={logo} height={100} className={styles.logo} />
    },
    {
      field: 'name',
      headerName: 'Название',
      flex: 1
    },
    {
      field: 'description',
      headerName: 'Описание',
      flex: 2,
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: 'stack',
      headerName: 'Технологии',
      sortable: false,
      disableColumnMenu: true
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

  const projects = projectsList
    .filter(project => {
      if(!searchTerms.length) return true
      if(searchTerms.some(term => project.name.toLowerCase().includes(term.toLowerCase()))) return true
      if(searchTerms.some(term => project.stack?.some?.(tech => tech.toLowerCase().includes(term.toLowerCase())))) return true
      if(searchTerms.some(term => project.description.toLowerCase().includes(term.toLowerCase()))) return true
    })
    .map(project => {
      const date = dateString => new Date(dateString)
      project = dotFlatten(project, 'dates')
      project = Object.fromEntries(Object.entries(project).map(([key, val]) => [key, (key.startsWith('dates') && dateRegex.test(val)) ? date(val) : val]))
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
        translation={props.translation}
        setSearchTerms={setSearchTerms}
        setLoading={setLoading}
      />
      <DataGrid
        rows={projects}
        columns={columns}
        autoHeight
        pageSize={25}
        rowsPerPageOptions={[]}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick
        onCellClick={({ id }) => handleProjectClick(id)}
        localeText={({ 'ru-RU': xDataGridRu }[props.locale] ?? xDataGridEnUS).components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
      />
    </div>
  )
}

Search.propTypes = {
  translation: PropTypes.object,
  setSearchTerms: PropTypes.func,
  setLoading: PropTypes.func,
}
function Search(props) {
  const translation = props.translation.PORTFOLIO_SEARCH
  const [searchTerm, setSearchTerm] = React.useState('')
  const terms = searchTerm.split(' ')

  React.useEffect(() => {
    props.setLoading(true)
    const currentTimeout = setTimeout(() => {
      props.setSearchTerms(terms)
      props.setLoading(false)
    }, 400)
    return () => clearTimeout(currentTimeout)
  }, [searchTerm])

  const handleClearInput = () => {
    setSearchTerm('')
    props.setSearchTerms(terms)
  }

  return (
    <div className={styles.search}>
      <FormControl variant='outlined' fullWidth>
        <InputLabel htmlFor='search-box'>{translation.PLACEHOLDER}</InputLabel>
        <OutlinedInput
          id='search-box'
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          label={translation.PLACEHOLDER}
          placeholder={translation.SEARCH_EXAMPLE}
          className={styles.textField}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label={translation.CLEAR}
                onClick={handleClearInput}
                edge='end'
              >
                <MdClear />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <IconButton><MdFilterList /></IconButton>
    </div>
  )
}

export default connect(state => ({ translation: state.translation, locale: state.locale }))(Services)
