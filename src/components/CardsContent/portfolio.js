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
import Chip from '@mui/material/Chip'
import { MdFilterList, MdClear } from 'react-icons/md'
import _ from 'lodash'

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
  const dateColWidth = 150

  const renderDate = ({ value }) => (value && (dateRegex.test(value) || value instanceof Date))
    ? Intl.DateTimeFormat(props.locale, { day: '2-digit', month: 'long', year: 'numeric' }).format(value)
    : value

  const formatName = name => {
    if(name.startsWith('hiddenID_')) {
      return 'Скрытый проект'
    } else {
      return name
    }
  }

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
      flex: 10,
      renderCell: ({ row: { name, category } }) => <span className={styles.multilineCell}>
        {formatName(name)}
        <span>&#32;&#32;</span>
        <Chip label={translation.CATEGORIES[category]} size='small' onClick={() => setSearchTerms([category])} />
      </span>
    },
    {
      field: 'description',
      headerName: 'Описание',
      flex: 18,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row: { description } }) => <span className={styles.description}>{description}</span>
    },
    {
      field: 'stack',
      headerName: 'Технологии',
      flex: 7,
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ row: { stack } }) => <span className={[styles.multilineCell, styles.stack].join(' ')}>
        {stack?.map(technology => <><Chip
          label={technology}
          size='small'
          onClick={() => setSearchTerms([technology])}
          key={technology}
        /><span>&#32;&#32;</span></>)}
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
        pageSize={15}
        rowBuffer={5}
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

Search.propTypes = {
  translation: PropTypes.object,
  setSearchTerms: PropTypes.func,
  setLoading: PropTypes.func,
}
function Search(props) {
  const translation = props.translation.SEARCH
  const [searchTerm, setSearchTerm] = React.useState('')
  const terms = searchTerm
    .match(/\\?.|^$/g)
    .reduce((prev, cur) => {
      if(cur === '"') {
        prev.quote ^= 1
      } else if(!prev.quote && cur === ' ') {
        prev.term.push('')
      } else {
        prev.term[prev.term.length - 1] += cur.replace(/\\(.)/, '$1')
      }
      return prev
    }, { term: [''] }).term

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

export default connect(state => ({ translation: state.translation, locale: state.locale }))(Portfolio)
