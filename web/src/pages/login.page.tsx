// Login.js
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from 'libphonenumber-js/core'

export function Login() {
  const [phoneNumber, setPhoneNumber] = useState<E164Number>()

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Handle the login logic here
    // Store the token in localStorage or sessionStorage
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <PhoneInput
          international
          defaultCountry="US"
          value={phoneNumber}
          onChange={setPhoneNumber}
          id="phone"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
