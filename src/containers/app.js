import React from 'react'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Dashboard from './dashboard'
import NA from './na'
import Doctor from './doctor/doctor'
import Header from './header/header'
import ConnectApp from './connect-app/connect-app'
import Profile from './profile/profile'
import History from './medical-history/historyIndex'
import Devices from './devices/devices'
import Messages from './messages/messages'
import Scheduling from './scheduling/scheduling'
import Settings from './settings/settings'
import TempPage1 from './temp-page/temp-page1'
import TempPage2 from './temp-page/temp-page2'
import TempPage3 from './temp-page/temp-page3'
import TempPage4 from './temp-page/temp-page4'
import TempPage5 from './temp-page/temp-page5'
import TempPage6 from './temp-page/temp-page6'
import TempPage7 from './temp-page/temp-page7'
import TempPage8 from './temp-page/temp-page8'
import TempPage9 from './temp-page/temp-page9'

import {
  switchPatient,
  apiGetPatientList,
} from '../modules/patient'


class App extends React.Component {
  componentDidMount() {
    this.props.switchPatient(1);
    this.props.apiGetPatientList(); //TODO: this can go away once /doctor path is removed
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard/*" component={Dashboard} />
          <Route exact path="/doctor" component={Doctor} />
          <Route exact path="/na" component={NA} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/connect-app" component={ConnectApp} />
          <Route exact path="/history" component={History} />
          <Route exact path="/devices" component={Devices} />
          <Route exact path="/devices/*" component={Devices} />
          <Route exact path="/telemedicine" component={Messages} />
          <Route exact path="/scheduling" component={Scheduling} />
          <Route exact path="/settings" component={Settings} />

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
  }
}

const mapStateToProps = (state, ownProps) => ({
  patient: state.patient.patient || null,
  currentPatient: state.patient.currentPatient,
  state,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      switchPatient,
      apiGetPatientList,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
