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

export type SearchProps = {
  setSearchTerms(terms: string[]): void;
  setLoading(isLoading: boolean): void;
  setSearchFilterFunc(func: () => any): void;
}

export type SearchRef = {
  setTerms: (terms: string[]) => void;
}

const Search = React.forwardRef<SearchRef, SearchProps>(({
  setLoading,
  setSearchTerms,
  setSearchFilterFunc
}, ref) => {
  const translation = useAppSelector(selectTranslation).PORTFOLIO.SEARCH
  const [searchTerm, setSearchTerm] = React.useState('')
  const [filters, setFilters] = React.useState({})
  const terms = searchTerm
    .match(/\\?.|^$/g)!
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

  React.useImperativeHandle(ref, () => ({
    setTerms(terms: string[]) {
      setSearchTerm(terms.map(term => term.includes(' ') ? `"${term}"` : term).join(' '))
    }
  }))

  React.useEffect(() => {
    setLoading(true)
    const currentTimeout = setTimeout(() => {
      setSearchTerms(terms)
      setLoading(false)
    }, 400)
    return () => clearTimeout(currentTimeout)
  }, [searchTerm])

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if(query.has('q')) {
      setSearchTerm(query.get('q') as string)
    }
  }, [])

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if(query.has('q') || searchTerm !== '') {
      query.set('q', searchTerm)
      const newRelativePathQuery = window.location.pathname + '?' + query.toString()
      history.replaceState(null, '', newRelativePathQuery)
    }
  }, [searchTerm])

  const handleClearInput = () => {
    setSearchTerm('')
    setSearchTerms(terms)
  }

  const filtersList = [
    { id: 'ORDERS_ONLY', filterFunc: project => project.tags?.includes?.('order') },
    { id: 'PERSONAL_WEBSITES_ONLY', filterFunc: project => project.tags?.includes?.('personalsite') },
    { 
      id: 'RECENT_PROJECTS_ONLY', filterFunc: project => {
        return Date.now() - 1000 * 60 * 60 * 24 * 365 <= new Date(project.dates.release).getTime()
      } 
    },
  ]

  React.useEffect(() => {
    const functions = filtersList.filter(({ id }) => filters[id]).map(({ filterFunc }) => filterFunc)
    setSearchFilterFunc(() => project => functions.every(func => func(project)))
  }, [filters])

  return (
    <div className={styles.search}>
      <FormControl variant='outlined' fullWidth>
        <InputLabel htmlFor='search-box'>{translation.PLACEHOLDER}</InputLabel>
        <OutlinedInput
          id='search-box'
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
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
