import { useRef, useState } from 'react'
import './App.css'
import Events from './components/Events'
import NavBar from './components/Navbar'
// import SignUpForm from './components/SignupForm'

function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef()

  const handleNavBarSearch = (term) => {
    // console.log(containerRef.current)
    console.log(containerRef.current.setSearch(''))
    setSearchTerm(term)
  }

  return (
    <>
      <NavBar onSearch={handleNavBarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
      {/* <SignUpForm /> */}
    </>
  )
}
export default App
