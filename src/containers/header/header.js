import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './header.css'

const Header = props => (
  // <header className="navbar navbar-light bg-light" >
  //   <div className="left" >
  //     <a className="navbar-brand" href="/">
  //         <img src="../images/medchainLogo.png" alt="medchain" title="medchain"/>
  //     </a>
      
  //     <NavLink className="button" to="/" exact>Patient</NavLink>
  //     <NavLink className="button" to="/doctor">Doctor</NavLink>
  //   </div>

  //   <div className="center">
  //     <NavLink className="header-icon pill" to="/temp-page1"></NavLink>
  //     <NavLink className="header-icon steth" to="/temp-page2"></NavLink>
  //     <NavLink className="header-icon pills" to="/temp-page3"></NavLink>
  //     <NavLink className="header-icon pills2" to="/temp-page4"></NavLink>
  //     <NavLink className="header-icon pill-flat" to="/temp-page5"></NavLink>
  //     <NavLink className="header-icon heart" to="/temp-page6"></NavLink>
  //   </div>
  //   <li class="nav-item dropdown">
  //       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //         Dropdown link
  //       </a>
  //       <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
  //         <a class="dropdown-item" href="#">Action</a>
  //         <a class="dropdown-item" href="#">Another action</a>
  //         <a class="dropdown-item" href="#">Something else here</a>
  //       </div>
  //     </li>
  //   <div className="right">
  //     <NavLink className="" to="/profile">My Profile</NavLink>
  //     <NavLink className="" to="/connect-app">Connect App</NavLink>
  //     </div>
  // </header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img src="../images/medchainLogo.png" alt="medchain" title="medchain"/>
          
      </a>
            <div className="left" >

      
       <NavLink className="button" to="/" exact>Patient</NavLink>
       <NavLink className="button" to="/doctor">Doctor</NavLink>
     </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" align="center">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link"><span class="sr-only">(current)</span>
          <img class="support-3" src="../images/heartbeat-3.png"/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" >
        <img class="support-3" src="../images/messages.png"/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" >
        <img class="support-3" src="../images/calender.png"/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" >
        <img class="support-3" src="../images/settings.png"/>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="support-3" src="../images/connection.png"/>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item">Secure Medical Record Blockchain</a>
          <a class="dropdown-item"> Private IPFS coming soon</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>
  
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
