import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/shared/styles/global.scss'
import { Provider } from 'react-redux'
import { store } from './store/index'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore typescript is not published
import { App } from './App'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
