import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type ThemeSlice = {
  theme: 'light' | 'dark'
}

const initialState: ThemeSlice = {
  theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      applyThemeToBody(action.payload)
      state.theme = action.payload
    },
    switchTheme: (state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark'
      applyThemeToBody(newTheme)
      state.theme = newTheme
    }
  }
})

const defaultThemeIsDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
const defaultTheme = defaultThemeIsDark === false ? 'light' : 'dark'

function applyThemeToBody(theme: 'light' | 'dark') {
  if (theme === 'dark') document.body.classList.add('dark-theme')
  else if (theme === 'light') document.body.classList.remove('dark-theme')
}

applyThemeToBody(defaultTheme)

export const { setTheme, switchTheme } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme
export default themeSlice.reducer