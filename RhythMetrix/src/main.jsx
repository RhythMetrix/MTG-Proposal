// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.css'
import CustomDeckProvider from './context/CustomDeckProvider.jsx'

createRoot(document.getElementById('root')).render(
  < CustomDeckProvider >
    <App />
  </CustomDeckProvider>
)
