import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import themeReducer from './themeReducer'
import localeReducer from './localeReducer'
import cursorReducer from './cursorReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  theme: themeReducer,
  locale: localeReducer,
  cursor: cursorReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cursor', 'locale']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const persistor = persistStore(store)

export default store
