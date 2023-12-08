// Login.js
import React, { useState } from 'react'

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Handle the login logic here
    // Store the token in localStorage or sessionStorage
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
