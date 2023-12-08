import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing.page'
import { Login } from './pages/login.page'
import Register from './pages/register.page'
import UpdateMembership from './pages/update-membership.page'
import { CheckIn } from './pages/check-in.page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/update-membership" element={<UpdateMembership />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
