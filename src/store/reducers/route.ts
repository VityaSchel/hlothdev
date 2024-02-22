import { history } from '../../App'

// export default function routeReducer(state = window.location.pathname.substring(1).split('/')[0], action) {
//   switch (action.type) {
//     case 'route/set':
//       var params = action.params ? '?' + action.params.toString() : ''
//       history.push(`/${action.route}${params}`)
//       return action.route
//     case 'route/pop':
//       return action.route
//     default:
//       return state
//   }
// }


import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type RouteSlice = {
  route: string
}

const initialState: RouteSlice = {
  route: window.location.pathname.substring(1).split('/')[0]
}

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<{ route: string, params?: object }>) => {
      const params = action.payload.params ? '?' + action.payload.params.toString() : ''
      history.push(`/${action.payload.route}${params}`)
      state.route = action.payload.route
    },
    popRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload
    }
  }
})

export const { setRoute, popRoute } = routeSlice.actions
export const selectRoute = (state: RootState) => state.route
export default routeSlice.reducer