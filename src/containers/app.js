import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './dashboard'
import NA from './na'
import Doctor from './doctor'
import Header from './header'

const App = () => (
  <div>
    <Header/>
    <main>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/doctor" component={Doctor} />
      <Route exact path="/na" component={NA} />
    </main>
  </div>
)

export default App
