export const LIST_REQUESTED = 'patient/LIST_REQUESTED'
export const SAVE_PATIENT = 'patient/SAVE_PATIENT'
export const SAVE_LIST = 'patient/SAVE_LIST'
export const SWITCH_PATIENT = 'patient/SWITCH_PATIENT'

const apiUrl = 'http://1.peers.medchain.global:8080';
//const apiUrl = 'http://localhost:8080';

const initialState = {
  patients: [],
  patient: {},
  isFetching: false,
  currentPatient: 0,
}

// reducers
export default (state = initialState, action) => {
  console.log('action.type=', action.type);
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

    case SAVE_PATIENT:
      return {
        ...state,
        patient: action.data,
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
export const fetchPatientList = () => {
  return dispatch => {
    dispatch({
      type: LIST_REQUESTED
    })

    fetch(apiUrl+'/api/patient/all')
        .then(response => {
            return response.json();
        }).then(data => {
          // save data to patient state
          let patientList = []
          if (data) {
            patientList = data.reduce((result, next) => {
              result[next.id] = next;
              return result;
            }, {})
          }
          console.log("returning patientList=", patientList);
          dispatch({
            type: SAVE_LIST,
            patientList,
          })
    })
  }
}

export const switchPatient = (patientId) => {
  return dispatch => {
    dispatch({
      type: SWITCH_PATIENT,
      patientId,
    })

    dispatch({
      type: LIST_REQUESTED
    })

    fetch(apiUrl+'/api/patient/'+patientId)
      .then(response => {
          return response.json();
      }).then(data => {
        if (data) {
          console.log("returning patient=", data);
          dispatch({
            type: SAVE_PATIENT,
            data,
          })
        }
    })
  }
}
