import react from react


export const statusState = createStore(toggleStatus, true)


export function toggleStatus(state=true, action){
    switch (action.type){
      case 'OPEN': return true;
      case 'CLOSE': return false;
    }
  }
  
   