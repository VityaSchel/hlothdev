import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { DataGrid, ruRU, enUS } from '@mui/x-data-grid'
import projectsList from '/src/lib/projects'
import { flatten } from '/src/utils'

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
      width: 71,
      renderCell: ({ row: { logo } }) => <img src={logo} height={100} className={styles.logo} />
    },
    { field: 'name', headerName: 'Название', flex: 1 },
    { field: 'description', headerName: 'Описание', flex: 2 },
    { field: 'stack', headerName: 'Технологии' },
    { field: 'dates.devStart', headerName: 'Начало разработки' },
    { field: 'dates.release', headerName: 'Релиз' },
    { field: 'dates.abandon', headerName: 'Приостановка' }
  ]

  const projects = projectsList.map(project => {
    project = flatten(project)
    console.log(project)
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
