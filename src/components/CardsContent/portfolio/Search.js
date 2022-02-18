import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import { MdFilterList, MdClear } from 'react-icons/md'

const Search = React.forwardRef((props, ref) => {
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

  React.useImperativeHandle(ref, () => ({
    setTerms(terms) {
      setSearchTerm(terms.map(term => term.includes(' ') ? `"${term}"` : term).join(' '))
    }
  }))

  React.useEffect(() => {
    props.setLoading(true)
    const currentTimeout = setTimeout(() => {
      props.setSearchTerms(terms)
      props.setLoading(false)
    }, 400)
    return () => clearTimeout(currentTimeout)
  }, [searchTerm])

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if(query.has('q')) setSearchTerm(query.get('q'))
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
      <IconButton>
        <MdFilterList />
      </IconButton>
    </div>
  )
})

Search.propTypes = {
  translation: PropTypes.object,
  setSearchTerms: PropTypes.func,
  setLoading: PropTypes.func,
}
Search.displayName = 'Search'
export default Search
