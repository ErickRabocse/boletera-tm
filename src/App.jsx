import { useState } from 'react'
import './App.css'
import Events from './components/Events'
import NavBar from './components/Navbar'

function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const handleNavBarSearch = (term) => {
    setSearchTerm(term)
  }
  return (
    <>
      <NavBar onSearch={handleNavBarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  )
}

export default App
