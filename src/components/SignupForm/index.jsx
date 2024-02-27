import { useState } from 'react'

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phone, setPhone] = useState('')

  const handleClearSubmit = () => {
    setName('')
    setAge('')
    setAddress('')
    setZipcode('')
    setPhone('')
  }
  const handleFormSumbit = (e) => {
    e.preventDefault()
    console.log('submit:', {
      name,
      age,
      address,
      zipcode,
      phone
    })
  }

  return (
    <div>
      <form onSubmit={handleFormSumbit}>
        <label htmlFor=''>
          Name
          <input type='text' value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <br />
        <label htmlFor=''>
          Age
          <input type='text' value={age} onChange={e => setAge(e.target.value)} required />
        </label>
        <br />
        <label htmlFor=''>
          Address
          <input type='text' value={address} onChange={e => setAddress(e.target.value)} required />
        </label>
        <br />
        <label htmlFor=''>
          Zipcode
          <input type='text' value={zipcode} onChange={e => setZipcode(e.target.value)} required />
        </label>
        <br />
        <label htmlFor=''>
          Phone
          <input type='text' value={phone} onChange={e => setPhone(e.target.value)} required />
        </label>
        <br />
        <div>
          <button type='button' onClick={handleClearSubmit}>clear</button>
          <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}
export default SignUpForm
