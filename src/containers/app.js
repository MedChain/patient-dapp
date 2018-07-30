import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './dashboard'
import NA from './na'
import Doctor from './doctor/doctor'
import Header from './header/header'
import ConnectApp from './connect-app/connect-app'
import Profile from './profile/profile'
import TempPage1 from './temp-page/temp-page1'
import TempPage2 from './temp-page/temp-page2'
import TempPage3 from './temp-page/temp-page3'
import TempPage4 from './temp-page/temp-page4'
import TempPage5 from './temp-page/temp-page5'
import TempPage6 from './temp-page/temp-page6'
import TempPage7 from './temp-page/temp-page7'
import TempPage8 from './temp-page/temp-page8'
import TempPage9 from './temp-page/temp-page9'

const App = () => (
  <div>
    <Header/>
    <main>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/patient/*" component={Dashboard} />
      <Route exact path="/doctor" component={Doctor} />
      <Route exact path="/na" component={NA} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/connect-app" component={ConnectApp} />
      <Route exact path="/temp-page1" component={TempPage1} />
      <Route exact path="/temp-page2" component={TempPage2} />
      <Route exact path="/temp-page3" component={TempPage3} />
      <Route exact path="/temp-page4" component={TempPage4} />
      <Route exact path="/temp-page5" component={TempPage5} />
      <Route exact path="/temp-page6" component={TempPage6} />
      <Route exact path="/temp-page7" component={TempPage7} />
      <Route exact path="/temp-page8" component={TempPage8} />
      <Route exact path="/temp-page9" component={TempPage9} />
    </main>
  </div>
)

export default App
