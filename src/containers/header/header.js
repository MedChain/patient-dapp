import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './header.css'

const Header = props => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img class="logo" src="../images/medchainLogo.png" alt="medchain" title="medchain"/>
      </a>
      <div className="left" >
       <NavLink className="button" to="/" exact>Dashboard</NavLink>
       <NavLink className="button" to="/history">Medical History</NavLink>
      </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" align="center">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><span class="sr-only">(current)</span>
          <img class="support-3" src="../images/heartbeat-3.png"/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
        <img class="support-3" src="../images/messages.png"/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" >
        <img class="support-3" src="../images/calender.png"/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" >
        <img class="support-3" src="../images/settings.png"/>
        </a>
      </li>
      <li class="dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="support-3" src="../images/connection.png"/>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item">Secure Medical Record Blockchain</a>
          <a class="dropdown-item"> Private IPFS coming soon</a>
          <div class="dropdown-divider"></div>
        </div>
      </li>
    </ul>
  
    <NavLink className="nav-link" to="/doctor">
      <span><img class="profile" src="https://static1.squarespace.com/static/55ecec2ae4b048d1ed402671/t/59f212ade9bfdff97985afaa/1516916823951/kara-circle-profile.png?format=500w"/> </span>
    </NavLink>
    <div>
    <NavLink className="nav-link" to="/connect-app">
    <img class="profile" src="../images/connect_app_icon.png"/>
    <span>Connect App</span>
    </NavLink>
    </div>
    
  </div>
</nav>
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
