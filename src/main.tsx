import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/index'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore typescript is not published

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
