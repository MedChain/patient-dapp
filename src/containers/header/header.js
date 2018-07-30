import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './header.css'

const Header = props => (
  <header className="navbar navbar-light bg-light" >
    <div className="left" >
      <a className="navbar-brand" href="/">
          <img src="../images/medchainLogo.png" alt="medchain" title="medchain"/>
      </a>

      <NavLink className="button" to="/" exact>Dashboard</NavLink>
      <NavLink className="button" to="/doctor">Doctor</NavLink>
    </div>

    <div className="center">
      <NavLink className="header-icon pill" to="/temp-page1"></NavLink>
      <NavLink className="header-icon steth" to="/temp-page2"></NavLink>
      <NavLink className="header-icon pills" to="/temp-page3"></NavLink>
      <NavLink className="header-icon pills2" to="/temp-page4"></NavLink>
      <NavLink className="header-icon pill-flat" to="/temp-page5"></NavLink>
      <NavLink className="header-icon heart" to="/temp-page6"></NavLink>
    </div>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    <div className="right">
      <NavLink className="" to="/profile">My Profile</NavLink>
      <NavLink className="" to="/connect-app">Connect App</NavLink>
      </div>
  </header>
)

const mapStateToProps = ({ router }) => ({
  pathname: router.location.pathname,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
