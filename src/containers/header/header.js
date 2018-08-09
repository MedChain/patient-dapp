import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Footer from '../logs/logs'
import Tutorial from '../tutorial/tutorial'

import './header.css'

const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img
        className="logo"
        src="../images/medchainLogo.png"
        alt="medchain"
        title="medchain"
      />
    </a>
    <div className="left">
      <NavLink className="button" to="/" exact>
        Dashboard
      </NavLink>
      <NavLink className="button" to="/history">
        Medical History
      </NavLink>
      <Tutorial />
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div
      className="collapse navbar-collapse"
      id="navbarSupportedContent"
      align="center">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/devices">
            <span className="sr-only">(current)</span>
            <img alt="" className="support-3" src="../images/heartbeat-3.png" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/telemedicine">
            <img alt="" className="support-3" src="../images/messages.png" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/scheduling">
            <img alt="" className="support-3" src="../images/calender.png" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/settings">
            <img alt="" className="support-3" src="../images/settings.png" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/doctor">
            <img alt="" className="support-3" src="../images/settings.png" />
          </NavLink>
        </li>

        <li className="dropdown">
          <div
            className="nav-link"
            id="navbarDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <img alt="" className="support-3" src="../images/connection.png" />
          </div>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item">Secure Medical Record Chain</a>
            <a className="dropdown-item"> Private IPFS</a>
            <div className="dropdown-divider" />
            <Footer />
          </div>
        </li>
      </ul>

      <div>
        <NavLink className="nav-link" to="/connect-app">
          <img alt="" className="profile" src="../images/connect_app_icon.png" />
          <span>Connect App</span>
        </NavLink>
      </div>
      <NavLink className="nav-link" to="/profile">
        <span>
          <img alt=""
            className="profile"
            src="https://static1.squarespace.com/static/55ecec2ae4b048d1ed402671/t/59f212ade9bfdff97985afaa/1516916823951/kara-circle-profile.png?format=500w"
          />{' '}
        </span>
      </NavLink>
    </div>
  </nav>
)

const mapStateToProps = ({ router }) => ({
  pathname: router.location.pathname
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
