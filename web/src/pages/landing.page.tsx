// LandingPage.js
import React from 'react'
import { Link } from 'react-router-dom'
import QRCode from 'qrcode.react' // You need to install qrcode.react

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Our Gym</h1>
      <QRCode value="http://example.com/check-in" size={256} />
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default LandingPage
