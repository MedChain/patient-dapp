export const LIST_REQUESTED = 'patient/LIST_REQUESTED'
export const SAVE_LIST = 'patient/SAVE_LIST'
export const SWITCH_PATIENT = 'patient/SWITCH_PATIENT'

const initialState = {
  patients: [],
  isFetching: false,
  currentPatient: 0,
}

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_REQUESTED:
      return {
        ...state,
        isFetching: true
      }

    case SAVE_LIST:
      return {
        ...state,
        patients: action.patientList,
        isFetching: false,
      }

    case SWITCH_PATIENT:
      return {
        ...state,
        currentPatient: action.patientId,
      }

    default:
      return state
  }
}

// actions
export const savePatientList = (patientList) => {
  return dispatch => {
    dispatch({
      type: LIST_REQUESTED
    })

    dispatch({
      type: SAVE_LIST,
      patientList,
    })
  }
}

export const switchPatient = (patientId) => {
  return dispatch => {
    dispatch({
      type: SWITCH_PATIENT,
      patientId,
    })
  }
}
