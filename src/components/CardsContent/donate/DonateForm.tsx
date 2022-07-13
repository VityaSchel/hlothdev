import React from 'react'
import styles from './styles.module.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { Translation } from 'types/definitions'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'

import { TbCurrencyRubel, TbCurrencyEuro, TbCurrencyKroneCzech } from 'react-icons/tb'

function DonateForm(props: { translation: Translation }) {
  const translation = props.translation.DONATE
  const [currency, setCurrency] = React.useState<keyof typeof currencies>('rub')

  return (
    <Formik
      initialValues={{
        username: '',
        amount: '',
      }}
      validationSchema={
        Yup.object({
          username: Yup.string()
            .max(64)
            .required(),
          amount: Yup.number()
            .min(0.5)
            .max(1000)
            .required()
          // TODO: list of goodies
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label={translation.FORM.USERNAME}
            variant='outlined'
            name='username'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            error={!!errors.username}
            helperText={errors.username}
          />
          <FormControl variant='outlined'>
            <InputLabel htmlFor='amount' error={!!errors.amount}>{translation.FORM.AMOUNT}</InputLabel>
            <OutlinedInput
              label={translation.FORM.AMOUNT}
              id='amount'
              type='number'
              name='amount'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.amount}
              error={!!errors.amount}
              endAdornment={
                <SelectCurrency
                  value={currency}
                  onChange={setCurrency}
                />
              }
            />
            {errors.amount && <FormHelperText error>{errors.amount}</FormHelperText>}
          </FormControl>
          <TextField
            label={translation.FORM.AMOUNT}
            variant='outlined'
            type='number'
            name='amount'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
            error={!!errors.amount}
            helperText={errors.amount}
            
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

const currencies = {
  'rub': <TbCurrencyRubel />,
  'eur': <TbCurrencyEuro />,
  'czk': <TbCurrencyKroneCzech />
}

function SelectCurrency(props: { value: keyof typeof currencies, onChange: (newCurrency: keyof typeof currencies) => void }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSelect = (currency: keyof typeof currencies) => () => {
    props.onChange(currency)
    setAnchorEl(null)
  }

  return (
    <InputAdornment position='end'>
      <IconButton onClick={handleClick}>
        {currencies[props.value]}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleSelect(props.value)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {Object.entries(currencies).map((currency: [keyof typeof currencies, Element]) => (
          <MenuItem onClick={handleSelect(currency[0])} key={currency[0]}>{currency[1]}</MenuItem>
        ))}
      </Menu>
    </InputAdornment>
  )
}

export default connect(state => ({ translation: state.translation }))(DonateForm)
