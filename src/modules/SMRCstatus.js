

// export const statusState = createStore(toggleStatus, true)
export const OPEN = 'toggle/OPEN'
export const CLOSE = 'toggle/CLOSE'


const initialState ={
  toggle: false,
}
//reducers
export default (state=initialState, action) => {
    switch (action.type){
      case OPEN:
        return {
          ...state,
          toggle: true
        }
      case CLOSE:
        return{
          ...state,
          toggle: false
        }
      default:
        return state
      }
  }

//actions
export const toggleDD = () =>({
    type: OPEN
  })
