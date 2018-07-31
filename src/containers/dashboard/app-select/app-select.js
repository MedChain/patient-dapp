import React from 'react'
import { NavLink } from 'react-router-dom'

import './app-select.css'

const Page = props => (
  <div className="app-select">
    <NavLink className="button" to="/patient/recent">Recent App</NavLink>
    <NavLink className="button" to="/patient/fitbit">FitBit</NavLink>
    <NavLink className="button" to="/patient/healthkit">HealthKit</NavLink>
    <NavLink className="button app-add-button"  to="/patient/add">Add</NavLink>

    {props.children}
  </div>
)

export default Page
