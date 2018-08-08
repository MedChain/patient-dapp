import React from 'react'
import AppSelect from './app-select/app-select'
import AppData from './app-data/app-data'

import "./devices.css"
const Page = () => (
  <div class="jumbotron">
  <h1 class="display-4">Medical Devices Coming Soon</h1>
  <p class="lead">
    This page will contain all the data from any medical devices you may have. This could include heart monitors, insulin checks, or FitBit-like data.
  </p>
  <AppSelect>
    <AppData />
  </AppSelect>
 </div>

)

export default Page
