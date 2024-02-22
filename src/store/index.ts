import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeReducer'
import localeReducer from './localeReducer'
import cursorReducer from './cursorReducer'
import translationReducer from './translationReducer'
import routeReducer from './routeReducer'
import layoutReducer from './layoutReducer'
import portfolioReducer from './portfolioReducer'

export const store = configureStore(
  {
    theme: themeReducer,
    locale: localeReducer,
    cursor: cursorReducer,
    translation: translationReducer,
    route: routeReducer,
    layout: layoutReducer,
    portfolio: portfolioReducer
  }, 
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Redux DevTools Extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
