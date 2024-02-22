import { useState } from 'react'

const NavBar = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search)
      console.log(search, 10)
    }
  }
  //   console.log(search)
  return (
    <div>
      <p>Mi boletera</p>
      <input
        placeholder='Encuentra tu evento'
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default NavBar
