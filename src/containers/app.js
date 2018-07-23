import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import Doctor from './doctor'
import Header from './header'

const App = () => (
  <div>
    <Header/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/doctor" component={Doctor} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
