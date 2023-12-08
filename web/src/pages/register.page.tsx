// Register.js
import React, { useState } from 'react'

function Register() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [paymentDetails, setPaymentDetails] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Handle the registration logic here
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <input
        type="text"
        value={paymentDetails}
        onChange={(e) => setPaymentDetails(e.target.value)}
        placeholder="Payment Details"
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
