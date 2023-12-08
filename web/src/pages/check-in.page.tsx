// CheckIn.js
import React, { useState } from 'react'

function CheckIn() {
  const [classSelected, setClassSelected] = useState('')
  const [status, setStatus] = useState('')

  const handleCheckIn = () => {
    // Implement check-in logic here
    setStatus('Checked in successfully')
  }

  return (
    <div>
      <h1>Check-In</h1>
      <select onChange={(e) => setClassSelected(e.target.value)}>
        <option value="yoga">Yoga</option>
        <option value="boxing">Boxing</option>
        <option value="cardio">Cardio</option>
      </select>
      <button onClick={handleCheckIn}>Check In</button>
      {status && <p>{status}</p>}
    </div>
  )
}

export default CheckIn
