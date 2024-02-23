import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './reducers/theme'
import localeReducer from './reducers/locale'
import cursorReducer from './reducers/cursor'
import translationReducer from './reducers/translation'
import routeReducer from './reducers/route'
import layoutReducer from './reducers/layout'
import portfolioReducer from './reducers/portfolio'

export const store = configureStore(
  {
    reducer: {
      theme: themeReducer,
      locale: localeReducer,
      cursor: cursorReducer,
      translation: translationReducer,
      route: routeReducer,
      layout: layoutReducer,
      portfolio: portfolioReducer
    }
  }, 
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Redux DevTools Extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch