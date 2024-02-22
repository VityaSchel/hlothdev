import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type LayoutSlice = {
  state: 'wide' | 'tall'
}

const initialState: LayoutSlice = {
  state: 'wide'
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<'wide' | 'tall'>) => {
      state.state = action.payload
    }
  }
})

export const { setLayout } = layoutSlice.actions
export const selectLayout = (state: RootState) => state.layout
export default layoutSlice.reducer