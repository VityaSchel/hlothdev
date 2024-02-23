import React from 'react'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import Popper from '@mui/material/Popper'
import IconButton from '@mui/material/IconButton'
import { MdFilterList } from 'react-icons/md'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Badge from '@mui/material/Badge'
import cx from 'classnames'
import { useAppSelector } from '@/store/hooks'
import { selectTheme } from '@/store/reducers/theme'

type FiltersProps = {
  checked?: object;
  translation?: object;
  setChecked?(...args: unknown[]): unknown;
  filtersList?: unknown[]
};

function Filters(props: FiltersProps) {
  const { theme } = useAppSelector(selectTheme)
  const [arrowRef, setArrowRef] = React.useState(null)
  const filterDialogAnchorRef = React.useRef()
  const [filterMenuOpen, setFilterMenuOpen] = React.useState(false)

  return (
    <ClickAwayListener onClickAway={() => filterMenuOpen && setFilterMenuOpen(false)}>
      <div>
        <div ref={filterDialogAnchorRef}>
          <Badge color='primary' badgeContent={Object.values(props.checked).filter(Boolean).length}>
            <IconButton onClick={() => setFilterMenuOpen(!filterMenuOpen)}>
              <MdFilterList />
            </IconButton>
          </Badge>
        </div>
        <Popper
          placement='bottom'
          disablePortal={false}
          open={filterMenuOpen}
          arrow
          anchorEl={filterDialogAnchorRef.current}
          modifiers={[
            {
              name: 'flip',
              enabled: true,
              options: {
                altBoundary: true,
                rootBoundary: 'document',
                padding: 8,
              },
            },
            {
              name: 'preventOverflow',
              enabled: true,
              options: {
                altAxis: true,
                altBoundary: true,
                tether: true,
                rootBoundary: 'document',
                padding: 8,
              },
            },
            {
              name: 'arrow',
              enabled: true,
              options: {
                element: arrowRef,
              },
            },
          ]}
        >
          <div ref={setArrowRef} className={cx(styles.arrow, { [styles.lightTheme]: theme === 'light' })} />
          <Paper className={styles.paper}>
            <Typography sx={{ p: 2 }}>
              <FormGroup>
                {props.filtersList.map(filter => (
                  <FormControlLabel
                    key={filter.id}
                    control={<Checkbox 
                      checked={props.checked?.[filter.id]}
                      onChange={(_, checked) => props.setChecked(filter.id, checked)}
                    />}
                    label={props.translation?.PORTFOLIO?.FILTERS?.[filter.id] ?? ''}
                  />
                ))}
              </FormGroup>
            </Typography>
          </Paper>
        </Popper>
      </div>
    </ClickAwayListener>
  )
}

export default connect(state => ({ 
  translation: state.translation, 
  locale: state.locale, 
  theme: state.theme 
}))(Filters)