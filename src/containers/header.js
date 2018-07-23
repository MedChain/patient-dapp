import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <Link to="/">Dashboard</Link>
    <Link to="/doctor">Doctor</Link>
    <Link to="/about-us">About</Link>
  </header>
)

export default Header
