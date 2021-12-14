import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

import themeReducer from './themeReducer'
import localeReducer from './localeReducer'
import cursorReducer from './cursorReducer'
import translationReducer from './translationReducer'
import routeReducer from './routeReducer'
import layoutReducer from './layoutReducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  locale: localeReducer,
  cursor: cursorReducer,
  translation: translationReducer,
  route: routeReducer,
  layout: layoutReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cursor', 'translation', 'route', 'layout']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const persistor = persistStore(store)

export default store
