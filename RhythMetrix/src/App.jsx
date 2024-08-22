import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { handleFetch } from './utils'
import NavBar from './components/NavBar'
import CardFilter from './components/SideBar'
import DisplayCards from './components/CardShowcase'
function App() {
  const [error, setError] = useState(null);

  return (
    <>
      <NavBar title='Magic of the Gathering' />
      <CardFilter />
      <DisplayCards />
    </>
  )
}

export default App
