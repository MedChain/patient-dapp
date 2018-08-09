import React from 'react'
import AppSelect from './app-select/app-select'
import AppData from './app-data/app-data'

import "./devices.css"
const Page = () => (
  <div className="jumbotron devices">
  <h1 className="display-4">Medical Devices Coming Soon</h1>
  <p className="lead">
    This page will contain all the data from any medical devices you may have. This could include heart monitors, insulin checks, or FitBit-like data.
  </p>
  <AppSelect>
    <AppData />
  </AppSelect>
 </div>

)

export default Page
