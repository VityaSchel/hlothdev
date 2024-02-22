import { createAction, createReducer } from '@reduxjs/toolkit'

export default createReducer({}, builder => {
  builder
    .addCase(createAction('cursor/setCursor'), (state, action) => {
      if(state[action.id]) state[action.id].cursor = action.cursor
      else state[action.id] = { added: Date.now(), cursor: action.cursor }
    })
    .addCase(createAction('cursor/reset'), (state, action) => {
      delete state[action.id]
    })
})
