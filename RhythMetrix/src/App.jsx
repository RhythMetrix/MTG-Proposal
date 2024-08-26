import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import { handleFetch } from './utils'
import NavBar from './components/NavBar'
import CardFilter from './components/SideBar'
import DisplayCards from './components/CardShowcase'
import Card from './components/Card'
import DeckPage from './components/Deck'
import Home from './components/HomePage'
function App() {
  const [error, setError] = useState(null);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card/:cardId' element={<Card />} />
        <Route path='/deck/' element={<DeckPage />} />
      </Routes>
      {/* <NavBar title='Magic of the Gathering' />
      <CardFilter />
      <DisplayCards /> */}
    </>
  )
}

export default App
