import React from 'react'
import './temp-page.css'
import { NavLink } from 'react-router-dom'
import History from '../medical-history/history'
const Temp = () => (
  <div className="jumbotron">
  <h1 className="display-4">Medical History Coming Soon</h1>
  <p className="lead">This page will query the Secure Medical Record Blockchain(SMRC) and display John Doe's medical history!!</p>

  <p>For now you can update John Does personal info by clicking the My Profile tab in the upper right corner. After submitting the form John Doe's new information will be recorded on the SMRC</p>
  <p className="lead">
    <NavLink className="btn btn-primary btn-lg" to="/doctor" role="button">Add data to SMRC </NavLink>
  </p>
  <History />
 </div>

)

export default Temp
