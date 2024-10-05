import React from 'react'
import styles from './styles.module.scss'
import IconButton from '@mui/material/IconButton'
import { MdClear } from 'react-icons/md'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Filters from './Filters.js'
import { useAppSelector } from '@/store/hooks.js'
import { selectTranslation } from '@/store/reducers/translation.js'
import { Project, technologies } from '@/data/projects.js'
import { Chip } from '@mui/material'

export type SearchProps = {
  setSearchTerms(terms: string[]): void;
  setLoading(isLoading: boolean): void;
  setSearchFilterFunc(func: () => any): void;
}

export type SearchRef = {
  setTerms: (terms: string[]) => void;
}

const quickSearch = [['web', 'WEB'], ['backend', 'BACKEND'], ['databases', 'DATABASES'], ['bots', 'BOTS'], ['devOps', 'DEV_OPS'], ['mobile', 'MOBILE'], ['design', 'DESIGN'], ['gameDev', 'GAME_DEV'],  ['ai', 'AI'], ['payments', 'PAYMENTS'], ['software', 'SOFTWARE'], ['modeling', 'MODELING'], ['other', 'OTHER']] as const

const Search = React.forwardRef<SearchRef, SearchProps>(({
  setLoading,
  setSearchTerms,
  setSearchFilterFunc
}, ref) => {
  const translation = useAppSelector(selectTranslation).PORTFOLIO.SEARCH
  const [searchTerm, setSearchTerm] = React.useState('')
  const [filters, setFilters] = React.useState({})

  React.useImperativeHandle(ref, () => ({
    setTerms(terms: string[]) {
      setSearchTerm(terms.map(term => term.includes(' ') ? `"${term}"` : term).join(' '))
    }
  }))

  React.useEffect(() => {
    const queryChange = () => {
      const query = new URLSearchParams(window.location.search)
      const queryStr = query.has('q') && query.get('q')
      if (queryStr) {
        setSearchTerm(queryStr)
        setSearchTerms(queryStr.split(', '))
      } else {
        setSearchTerm('')
        setSearchTerms([])
      }
    }
    queryChange()
    window.addEventListener('popstate', () => queryChange())
    window.addEventListener('navigate', () => queryChange())
    return () => {
      window.removeEventListener('popstate', () => queryChange())
      window.removeEventListener('navigate', () => queryChange())
    }
  }, [])

  const handleClearInput = () => {
    setSearchTerm('')
    setSearchTerms([])
    pushNewQueryToUrl('')
  }

  const filtersList: { id: string, filterFunc: (project: Project) => void }[] = [
    { id: 'ORDERS_ONLY', filterFunc: project => project.tags?.includes?.('order') },
    { id: 'PERSONAL_WEBSITES_ONLY', filterFunc: project => project.tags?.includes?.('personalsite') },
    { 
      id: 'RECENT_PROJECTS_ONLY', filterFunc: project => {
        if (!project.dates.release) return false
        return Date.now() - 1000 * 60 * 60 * 24 * 365 <= new Date(project.dates.release).getTime()
      } 
    },
  ]

  React.useEffect(() => {
    const functions = filtersList.filter(({ id }) => filters[id]).map(({ filterFunc }) => filterFunc)
    setSearchFilterFunc(() => (project: Project) => functions.every(func => func(project)))
  }, [filters])
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    setSearchTerm(e.target.value)
    const terms = e.target.value
      .match(/\\?.|^$/g)!
      .reduce((prev, cur) => {
        if (cur === '"') {
          prev.quote ^= 1
        } else if (!prev.quote && cur === ' ') {
          prev.term.push('')
        } else {
          prev.term[prev.term.length - 1] += cur.replace(/\\(.)/, '$1')
        }
        return prev
      }, { term: [''] }).term
    setLoading(true)
    pushNewQueryToUrl(searchTerm)
    setTimeout(() => {
      setSearchTerms(terms)
      setLoading(false)
    }, 10)
  }

  const pushNewQueryToUrl = (searchTerm: string) => {
    if (searchTerm === '') {
      history.replaceState(null, '', window.location.pathname)
    } else {
      const query = new URLSearchParams(window.location.search)
      query.set('q', searchTerm)
      const newRelativePathQuery = window.location.pathname + '?' + query.toString()
      history.replaceState(null, '', newRelativePathQuery)
    }
}

  return (
    <div className='flex gap-3 items-center'>
      <FormControl variant='outlined' fullWidth>
        <InputLabel htmlFor='search-box'>{translation.PLACEHOLDER}</InputLabel>
        <OutlinedInput
          id='search-box'
          value={searchTerm}
          onChange={onChange}
          label={translation.PLACEHOLDER}
          placeholder={translation.EXAMPLE}
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
      <div className='flex flex-wrap gap-1'>
        <span className='text-[var(--secondary-text-color)]'>{translation.QUICK_SEARCH.TITLE}:</span>
        {quickSearch.map(([id, label]) => (
          <Chip
            label={translation.QUICK_SEARCH[label]}
            size='small'
            onClick={() => {
              setSearchTerm(technologies[id].join(', '))
              setSearchTerms([...technologies[id]])
            }}
            key={id}
          />
        ))}
      </div>
      <Filters 
        checked={filters}
        setChecked={(filterID, checked) => setFilters({ ...filters, [filterID]: checked })}
        filtersList={filtersList}
      />
    </div>
  )
})

Search.displayName = 'Search'
export default Search
