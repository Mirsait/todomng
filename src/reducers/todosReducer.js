import {
    CREATE_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
  } from '../constants';
  

  const todos = (state=[], action) => {
    switch(action.type){

      case CREATE_TODO:
        return [...state, action.payload]
  
      case COMPLETE_TODO:
        const st = state.map(p => 
          (p.id===action.payload) ? {...p, complete:true} : {...p});
        return st;

      case DELETE_TODO:
          const ft = state.filter(p => p.id !== action.payload);
        return ft;
        
      default:
        return state;
    }
  }
  
  export default todos;

  