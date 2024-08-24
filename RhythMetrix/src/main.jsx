import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import React from 'react'
import './index.css'
import CardsProvider from './context/CardsContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CardsProvider>
        <App />
      </CardsProvider>
    </StrictMode>
  </BrowserRouter>
)
