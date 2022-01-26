import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { DataGrid, ruRU, enUS } from '@mui/x-data-grid'
import projectsList from 'lib/projects'
import { dotFlatten } from 'utils.js'

Services.propTypes = {
  translation: PropTypes.object,
  locale: PropTypes.string
}

function Services(props) {
  const cards = props.translation.SERVICES_CARDS
  if(!cards) return <></>

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
    { field: 'name', headerName: 'Название', flex: 1 },
    { field: 'description', headerName: 'Описание', flex: 2, sortable: false, disableColumnMenu: true },
    { field: 'stack', headerName: 'Технологии', sortable: false, disableColumnMenu: true },
    { field: 'dates.devStart', headerName: 'Начало разработки' },
    { field: 'dates.release', headerName: 'Релиз' },
    { field: 'dates.abandon', headerName: 'Приостановка' }
  ]

  const projects = projectsList.map(project => {
    const date = dateString => new Date(dateString)
    project = dotFlatten(project, 'dates')
    project = Object.fromEntries(Object.entries(project).map(([key, val]) => [key, key.startsWith('dates') ? date(val) : val]))
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
        localeText={({ 'ru-RU': ruRU }[props.locale] ?? enUS).components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  )
}

export default connect(state => ({ translation: state.translation, locale: state.locale }))(Services)
