import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { handleFetch } from './utils'
import Home from './pages/Home'

function App() {
  const [error, setError] = useState(null);

  return (
    <>
      < Home card={'card'} />
    </>
  )
}

export default App
