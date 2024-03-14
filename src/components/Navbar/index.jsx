import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'

const NavBar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('search has been updated')
  }, [search])

  useEffect(() => {
    console.log('onSearch has been updated')
  }, [onSearch])

  useEffect(() => {
    console.log('Component has been mounted')
  }, [])

  useImperativeHandle(ref, () => ({
    search,
    setSearch
  }))

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search)
      // console.log(search, 10)
    }
  }
  //   console.log(search)
  return (
    <div ref={ref}>
      <p>Mi boletera</p>
      <input
        placeholder='Encuentra tu evento'
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
})

NavBar.displayName = 'NavBar'
export default NavBar
