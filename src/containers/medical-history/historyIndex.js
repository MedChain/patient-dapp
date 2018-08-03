import React from 'react'
import { NavLink } from 'react-router-dom'
import "./historyIndex.css"
const Page = () => (
  <div class="jumbotron">
  <h1 class="display-4">Medical History Coming Soon</h1>
  <p class="lead">This page will query the Secure Medical Record Blockchain(SMRC) and display John Doe's medical history!!<br/>
  A <NavLink to="https://www.hl7.org/fhir/overview.html"> FHIR </NavLink> end point to the SMRC is under construction</p>

  <p>For now you can update John Does personal info by clicking the profile image in the upper right corner. After submitting the form John Doe's new information will be recorded on the SMRC</p>
  <p class="lead">
    <NavLink className="btn btn-primary btn-lg" to="/doctor" role="button">Add data to SMRC </NavLink>
  </p>
 </div>

)

export default Page
