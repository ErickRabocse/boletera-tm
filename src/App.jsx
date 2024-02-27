import { useState } from 'react'
import './App.css'
import Events from './components/Events'
import NavBar from './components/Navbar'
import SignUpForm from './components/SignupForm'

function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const handleNavBarSearch = (term) => {
    setSearchTerm(term)
  }
  return (
    <>
      {/* <NavBar onSearch={handleNavBarSearch} />
      <Events searchTerm={searchTerm} /> */}
      <SignUpForm />
    </>
  )
}
export default App
