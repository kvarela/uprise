// LandingPage.js
import React from 'react'
import { Link } from 'react-router-dom'
import QRCode from 'qrcode.react'

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Uprise</h1>
      <h2>Check in by scanning the QR code below</h2>
      <QRCode value={`${process.env.REACT_APP_WEB_URL}/check-in`} size={256} />
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default LandingPage
