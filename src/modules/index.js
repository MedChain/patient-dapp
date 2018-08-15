import { combineReducers } from 'redux'
import counter from './counter'
import patient from './patient'
import logs from './logs'
import toggle from './SMRCstatus'

export default combineReducers({
  counter,
  patient,
  logs,
  toggle,
})
