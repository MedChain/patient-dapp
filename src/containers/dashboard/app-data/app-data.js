import React from 'react'
import { Route } from 'react-router-dom'
import Recent from './recent'
import Fitbit from './fitbit'
import Healthkit from './healthkit'
import Add from './add'

const Page = () => (
  <div className="app-data">
    <Route exact path="/patient/recent" component={Recent} />
    <Route exact path="/patient/fitbit" component={Fitbit} />
    <Route exact path="/patient/healthkit" component={Healthkit} />
    <Route exact path="/patient/add" component={Add} />
  </div>
)

export default Page
