

// export const statusState = createStore(toggleStatus, true)
export const OPEN = 'toggle/OPEN'
export const CLOSE = 'toggle/CLOSE'


const initialState ={
  toggle: false,
}
//reducers
export default (state=initialState, action) => {
  console.log("hello from reducer")
  console.log(state, action)
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
        return {
          ...state,
          toggle:false
        }
      }
  }
  
//actions
export const toggledd = () =>{
  console.log("hello from actions")
  return
    {
      type: OPEN
    }
  
}