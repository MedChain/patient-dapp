import React from 'react'
import TempPage from './temp-page'
import './temp-page.css'

const Temp = () => (
  <div class="jumbotron">
  <h1 class="display-4">Medical History Coming Soon</h1>
  <p class="lead">This page will query the Secure Medical Record Blockchain(SMRC) and display John Doe's medical history!!</p>
 
  <p>For now you can update John Does personal info by clicking the My Profile tab in the upper right corner. After submitting the form John Doe's new information will be recorded on the SMRC</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="/doctor" role="button">Add data to SMRC</a>
  </p>
 </div>
)

export default Temp
