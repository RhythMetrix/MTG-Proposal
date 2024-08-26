import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Card from './pages/Card'
import DeckPage from './pages/Deck'
import Home from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card/:cardId' element={<Card />} />
        <Route path='/deck/' element={<DeckPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
