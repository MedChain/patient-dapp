

// export const statusState = createStore(toggleStatus, true)
export const TOGGLE = 'toggle/TOGGLE'
export const CLOSE = 'toggle/CLOSE'


const initialState ={
  toggle: false,
}
//reducers
export default (state=initialState, action) => {
    switch (action.type){
      case TOGGLE:
        return {
          ...state,
          toggle: !state.toggle
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
    type: TOGGLE
  })
