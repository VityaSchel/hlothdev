import React from 'react'
import styles from '../styles.module.scss'
import { connect } from 'react-redux'
import { DataGrid, ruRU as xDataGridRu, enUS as xDataGridEnUS } from '@mui/x-data-grid'
import projectsList from '../../../data/projects'
import { dotFlatten } from '../../../utils'
import generateColumns from './generateColumns'
import Search, { SearchProps, SearchRef } from './Search'
import ProjectInfoDialog from './ProjectInfoDialog'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectTranslation } from '@/store/reducers/translation'
import { selectLocale } from '@/store/reducers/locale'
import { setShowShockingProjects } from '@/store/reducers/portfolio'

type PortfolioProps = {
  portfolio?: object;
}

export function Portfolio() {
  const [searchTerms, setSearchTerms] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState(false)
  const [, forceUpdateOnHistoryPush] = React.useState<number>(0)
  const [searchFilterFunc, setSearchFilterFunc] = React.useState(() => () => true)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const translation = useAppSelector(selectTranslation)
  const dataGridRef = React.useRef<HTMLDivElement>(null)
  const searchRef = React.useRef<SearchRef>(null)
  const { locale } = useAppSelector(selectLocale)
  const dataGridLocalization = { 'ru-RU': xDataGridRu }[locale] ?? xDataGridEnUS

  React.useEffect(() => setLoading(false), [searchTerms])

  const columns = generateColumns({
    locale,
    translation: translation.PORTFOLIO,
    setSearchTerms: (terms: string[]) => {
      if (searchRef.current)
        searchRef.current.setTerms(terms)
      setSearchTerms(terms)
    },
    showShockingProjects: translation.PORTFOLIO.PROJECT_DIALOG.SHOW_SHOCKING_PROJECTS,
    ignoreContentWidthLimit: isMobile
  })

  const projects = projectsList
    .filter(project => {
      if(!searchTerms.length) return true
      const terms = searchTerms.map(term => term.toLowerCase())
      if (terms.some(term => project.name.toLowerCase().includes(term))) 
        return true
      if (terms.some(term => project.description?.toLowerCase().includes(term))) 
        return true
      if (project.category && project.category in translation.PORTFOLIO.CATEGORIES && terms.some(term => 
        translation.PORTFOLIO.CATEGORIES[project.category as keyof typeof translation.PORTFOLIO.CATEGORIES]?.toLowerCase().includes(term)
      ))
        return true
      if (terms.some(term => project.stack?.some(tech => tech.toLowerCase().includes(term)))) return true
    })
    .filter(searchFilterFunc)
  const handleProjectClick = (id: string) => {
    const newPath = '/portfolio/' + id + window.location.search
    history.pushState(null, '', newPath)
    forceUpdateOnHistoryPush(Date.now())
  }

  return (
    <div className={styles.portfolio} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Search
        setSearchFilterFunc={setSearchFilterFunc}
        setSearchTerms={setSearchTerms}
        setLoading={setLoading}
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
        onCellClick={({ id }) => handleProjectClick(String(id))}
        onPageChange={() => dataGridRef.current?.querySelector('.MuiDataGrid-virtualScroller')?.scrollTo(0, 0)}
        localeText={dataGridLocalization.components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
        className={styles.dataGrid}

        getRowId={row => row.id}
      />
      <ProjectInfoDialog
        updateFunc={forceUpdateOnHistoryPush}
      />
    </div>
  )
}