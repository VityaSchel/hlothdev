import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type PortfolioSlice = {
  showShockingProjects: boolean
}

const initialState: PortfolioSlice = {
  showShockingProjects: false
}

export const localeSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setShowShockingProjects: (state, action: PayloadAction<boolean>) => {
      state.showShockingProjects = action.payload
    }
  }
})

export const { setShowShockingProjects } = localeSlice.actions
export const selectPortfolio = (state: RootState) => state.portfolio
export default localeSlice.reducer