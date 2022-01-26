import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { DataGrid, ruRU as xDataGridRu, enUS as xDataGridEnUS } from '@mui/x-data-grid'
import projectsList from 'lib/projects'
import { dotFlatten } from 'utils.js'
import { format } from 'date-fns'
import { enUS as dateFnsEnUS, ru as dateFnsRu } from 'date-fns/locale'

Services.propTypes = {
  translation: PropTypes.object,
  locale: PropTypes.string
}

function Services(props) {
  const cards = props.translation.SERVICES_CARDS
  if(!cards) return <></>

  const dateRegex = /^\d+ \w+ \d+$/
  const dateColWidth = 150

  const renderDate = ({ value }) => (value && (dateRegex.test(value) || value instanceof Date))
    ? format(value, 'dd LLLL y', { locale: { 'ru-RU': dateFnsRu }[props.locale] ?? dateFnsEnUS })
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

  const projects = projectsList.map(project => {
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
      <DataGrid
        rows={projects}
        columns={columns}
        autoHeight
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick
        onCellClick={({ id }) => handleProjectClick(id)}
        localeText={({ 'ru-RU': xDataGridRu }[props.locale] ?? xDataGridEnUS).components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  )
}

export default connect(state => ({ translation: state.translation, locale: state.locale }))(Services)
