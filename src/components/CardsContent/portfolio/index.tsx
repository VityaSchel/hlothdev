import React from 'react'
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

export function Portfolio() {
  const [searchTerms, setSearchTerms] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState(false)
  const [searchFilterFunc, setSearchFilterFunc] = React.useState(() => () => true)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const translation = useAppSelector(selectTranslation)
  const dataGridRef = React.useRef<HTMLDivElement>(null)
  const searchRef = React.useRef<SearchRef>(null)
  const { locale } = useAppSelector(selectLocale)
  const { showShockingProjects } = useAppSelector(selectPortfolio)
  const dataGridLocalization = { 'ru-RU': xDataGridRu }[locale] ?? xDataGridEnUS
  const [openedProjectID, setOpenedProjectID] = React.useState<string | null>(window.location.pathname.substring(1).split('/')[1] || null)

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
  }), [locale, translation, isMobile, showShockingProjects])

  const projects = React.useMemo(() => projectsList
    .filter(project => {
      if(!searchTerms.length) return true
      const terms = searchTerms.map(term => term.toLowerCase())
      if (terms.some(term => project.name.toLowerCase().includes(term))) 
        return true
      if (terms.some(term => {
        const projectDescription = locale in project.description
          ? project.description[locale as keyof typeof project.description]
          : project.description['_DEFAULT_']
        projectDescription.toLowerCase().includes(term)
      })) 
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
    setOpenedProjectID(id)
  }

  React.useEffect(() => {
    const handlePopState = () => {
      setOpenedProjectID(window.location.pathname.substring(1).split('/')[1] || null)
    }
    window.addEventListener('navigate', handlePopState)
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('navigate', handlePopState)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return (
    <div className='flex flex-col gap-3 flex-1'>
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

        pageSize={50}
        rowBuffer={5}
        rowsPerPageOptions={[]}

        // otherwise scroll breaks
        disableVirtualization

        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableSelectionOnClick
        onCellClick={({ id }, event) => {
          if (event.target && 'tagName' in event.target && event.target.tagName === 'A') return
          handleProjectClick(String(id))
        }}
        onPageChange={() => dataGridRef.current?.querySelector('.MuiDataGrid-virtualScroller')?.scrollTo(0, 0)}
        localeText={dataGridLocalization.components.MuiDataGrid.defaultProps.localeText}
        loading={loading}
        className='flex-1 [&_.MuiDataGrid-row]:cursor-pointer'

        getRowId={row => row.id}
      />
      <ProjectInfoDialog 
        openedProjectID={openedProjectID}
        setOpenedProjectID={setOpenedProjectID}
      />
    </div>
  )
}