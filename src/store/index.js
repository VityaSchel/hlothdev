import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import themeReducer from './themeReducer'
import localeReducer from './localeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  theme: themeReducer,
  locale: localeReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store
