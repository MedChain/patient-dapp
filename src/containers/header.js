import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <div class="left">
      <a class="navbar-brand" href="/">
          <img src="../images/medchainLogo.png" alt="medchain" title="medchain"/>
          MedChain
      </a>
      <Link class="button" to="/">Dashboard</Link>
      <Link class="button" to="/doctor">Doctor</Link>
    </div>
    <div class="center">
      <Link class="header-icon pill" to="/na"></Link>
      <Link class="header-icon steth" to="/na"></Link>
      <Link class="header-icon pills" to="/na"></Link>
      <Link class="header-icon pills2" to="/na"></Link>
      <Link class="header-icon pill-flat" to="/na"></Link>
      <Link class="header-icon heart" to="/na"></Link>
    </div>
    <div class="right">
      <Link class="" to="/na">Connect App</Link>
      <Link class="" to="/na">My Profile</Link>
    </div>
  </header>
)

export default Header
