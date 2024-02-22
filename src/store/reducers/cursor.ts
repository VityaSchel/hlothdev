import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type CursorSlice = {
  [id: string]: {
    added: number
    cursor: string
  }
}

const initialState: CursorSlice = {}

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setCursor: (state, action: PayloadAction<{ id: string, cursor: string }>) => {
      if(state[action.payload.id]) state[action.payload.id].cursor = action.payload.cursor
      else state[action.payload.id] = { added: Date.now(), cursor: action.payload.cursor }
    },
    resetCursor: (state, action: PayloadAction<string>) => {
      delete state[action.payload]
    }
  }
})

export const { setCursor, resetCursor } = cursorSlice.actions
export const selectCursor = (state: RootState) => state.cursor
export default cursorSlice.reducer
