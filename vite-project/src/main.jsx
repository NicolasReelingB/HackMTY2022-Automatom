import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterNav from '../routes/RouterNav'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterNav/>
    <App />
  </React.StrictMode>
)
