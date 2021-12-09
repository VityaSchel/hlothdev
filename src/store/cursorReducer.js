import { createAction, createReducer } from '@reduxjs/toolkit'

const _1 = createAction('cursor/setCursor')
const _2 = createAction('cursor/reset')

export default createReducer({}, builder => {
  builder
    .addCase(_1, (state, action) => {
      console.log(state)
      if(state[action.id]) state[action.id].cursor = action.cursor
      else state[action.id] = { added: Date.now(), cursor: action.cursor }
    })
    .addCase(_2, (state, action) => {
      delete state[action.id]
    })
})
