import React from 'react'
import { Route } from 'react-router-dom'
import Recent from './recent'
import Fitbit from './fitbit'
import Healthkit from './healthkit'
import Add from './add'

const Page = () => (
  <div className="app-data">
    <Route exact path="/" component={Recent} />
    <Route exact path="/devices" component={Recent} />
    <Route exact path="/devices/recent" component={Recent} />
    <Route exact path="/devices/fitbit" component={Fitbit} />
    <Route exact path="/devices/healthkit" component={Healthkit} />
    <Route exact path="/devices/add" component={Add} />
  </div>
)

export default Page
