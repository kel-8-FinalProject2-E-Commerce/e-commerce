import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/assets/style/tailwindcss/output.css'
import {store} from './config/store'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
