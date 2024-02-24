import React from 'react'
import styles from '../styles.module.scss'
import { DataGrid, ruRU as xDataGridRu, enUS as xDataGridEnUS } from '@mui/x-data-grid'
import projectsList from '../../../data/projects'
import generateColumns from './generateColumns'
import Search, { SearchRef } from './Search'
import ProjectInfoDialog from './ProjectInfoDialog'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useAppSelector } from '@/store/hooks'
import { selectTranslation } from '@/store/reducers/translation'
import { selectLocale } from '@/store/reducers/locale'
import { selectPortfolio } from '@/store/reducers/portfolio'
import { dotFlatten } from '@/utils'

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
  const { showShockingProjects } = useAppSelector(selectPortfolio)
  const dataGridLocalization = { 'ru-RU': xDataGridRu }[locale] ?? xDataGridEnUS

  React.useEffect(() => setLoading(false), [searchTerms])

  const columns = React.useMemo(() => generateColumns({
    locale,
    translation: translation.PORTFOLIO,
    setSearchTerms: (terms: string[]) => {
      if (searchRef.current)
        searchRef.current.setTerms(terms)
      setSearchTerms(terms)
    },
    showShockingProjects,
    ignoreContentWidthLimit: isMobile
  }), [locale, translation, isMobile])

  const projects = React.useMemo(() => projectsList
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
    .filter(searchFilterFunc),
  [searchTerms, searchFilterFunc, translation, showShockingProjects])
  const handleProjectClick = (id: string) => {
    const newPath = '/portfolio/' + id + window.location.search
    history.pushState(null, '', newPath)
    forceUpdateOnHistoryPush(Date.now())
  }

  const projectsFlatten = React.useMemo(() => projects.map(p => dotFlatten(p, 'dates')), [projects])

  return (
    <div className='flex flex-col gap-3 flex-1'>
      <Search
        setSearchFilterFunc={setSearchFilterFunc}
        setSearchTerms={setSearchTerms}
        setLoading={setLoading}
        ref={searchRef}
      />
      <DataGrid
        rows={projectsFlatten}
        columns={columns}
        ref={dataGridRef}

        pageSize={50}
        rowBuffer={5}
        rowsPerPageOptions={[]}

        // otherwise scroll breaks
        disableVirtualization

        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick
        onCellClick={({ id }) => handleProjectClick(String(id))}
        onPageChange={() => dataGridRef.current?.querySelector('.MuiDataGrid-virtualScroller')?.scrollTo(0, 0)}
        localeText={dataGridLocalization.components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
        className='flex-1 [&_.MuiDataGrid-row]:cursor-pointer'

        getRowId={row => row.id}
      />
      <ProjectInfoDialog
        updateFunc={forceUpdateOnHistoryPush}
      />
    </div>
  )
}