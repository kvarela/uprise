import React, { useState } from 'react'
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { E164Number } from 'libphonenumber-js'

export function Login() {
  const [phone, setPhoneNumber] = useState<E164Number>()
  const [isLoading, setIsLoading] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [code, setVerificationCode] = useState('')

  const handleCode = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/verify`, { phone, code })
      console.log({ res })
      toast.success('Successfully verified')

      localStorage.setItem('jwt', res.data.jwt)
    } catch (error) {
      toast.error((error as any).response?.data?.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth`, { phone })
      setIsCodeSent(true)
      toast.success('Code sent to your phone.')
    } catch (error) {
      toast.error((error as any).response?.data?.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <ToastContainer />
      <h1>Login</h1>
      {!isCodeSent ? (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <PhoneInput
              international
              defaultCountry="US"
              value={phone}
              onChange={setPhoneNumber}
              id="phone"
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleCode}>
          <div>
            <label htmlFor="code">Enter Code:</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setVerificationCode(e.target.value)}
              id="code"
              maxLength={4}
            />
          </div>
          <button type="submit">Verify</button>
        </form>
      )}
    </div>
  )
}
