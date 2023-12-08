// CheckIn.js
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CheckIn() {
  const navigate = useNavigate()
  const [isTokenValid, setIsTokenValid] = useState(false)
  const [classSelected, setClassSelected] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('jwtToken')

    if (token) {
      setIsTokenValid(true)
    } else {
      navigate('/login')
    }
  }, [navigate])

  if (!isTokenValid) {
    return <div>Loading...</div> // or any other loading indicator
  }

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
