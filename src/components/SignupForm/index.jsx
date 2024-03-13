// import { useState } from 'react'
import { useForm } from 'react-hook-form'

const SignUpForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  //   const [name, setName] = useState('')
  //   const [age, setAge] = useState('')
  //   const [address, setAddress] = useState('')
  //   const [zipcode, setZipcode] = useState('')
  //   const [phone, setPhone] = useState('')

  const handleClearSubmit = () => {
    // setName('')
    // setAge('')
    // setAddress('')
    // setZipcode('')
    // setPhone('')
    reset()
  }
  //   const handleFormSumbit = (e) => {
  //     e.preventDefault()
  //     console.log('submit:', {
  //       name,
  //       age,
  //       address,
  //       zipcode,
  //       phone
  //     })
  //   }
  const handleFormSumbit = (data) => {
    console.log('Data shown with useform:', data)
  }
  console.log(errors)
  return (
    <div>
      {/* <form onSubmit={handleFormSumbit}> */}
      <form onSubmit={handleSubmit(handleFormSumbit)}>
        <label htmlFor=''>
          Name
          {/* <input type='text' value={name} onChange={e => setName(e.target.value)} required /> */}
          <input {...register('name', { required: true })} />

        </label>
        <br />
        <label htmlFor=''>
          Age
          {/* <input type='text' value={age} onChange={e => setAge(e.target.value)} required /> */}
          <input {...register('age', { required: true })} />

        </label>
        <br />
        <label htmlFor=''>
          Address
          {/* <input type='text' value={address} onChange={e => setAddress(e.target.value)} required /> */}
          <input {...register('address', { required: true })} />

        </label>
        <br />
        <label htmlFor=''>
          Zipcode
          {/* <input type='text' value={zipcode} onChange={e => setZipcode(e.target.value)} required /> */}
          <input {...register('zipcode', { required: true })} />

        </label>
        <br />
        <label htmlFor=''>
          Phone
          {/* <input type='text' value={phone} onChange={e => setPhone(e.target.value)} required /> */}
          <input {...register('phones', { required: true })} />
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
