import React from 'react'
import { NavLink } from 'react-router-dom'
import FitBit from './fitbit'
import HealthKit from './healthkit'
import Add from './add'

import './app-select.css'

const Page = props => (
  <div className="app-select">
    <NavLink className="button app-icon-recent" to="/devices/recent">Recent App</NavLink>
    <NavLink className="button" to="/devices/fitbit"><FitBit /></NavLink>
    <NavLink className="button" to="/devices/healthkit"><HealthKit /></NavLink>
    <NavLink className="button app-icon-add" to="/devices/add"><Add /></NavLink>

    {props.children}
  </div>
)

export default Page
