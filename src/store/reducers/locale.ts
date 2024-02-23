import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { getLocale } from '@/shared/utils/language'

type LocaleSlice = {
  locale: string
}

const initialState: LocaleSlice = {
  locale: getLocale(window.navigator.language)
}

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    updateLocale: (state, action: PayloadAction<string>) => {
      state.locale = getLocale(action.payload)
    }
  }
})

export const { updateLocale } = localeSlice.actions
export const selectLocale = (state: RootState) => state.locale
export default localeSlice.reducer