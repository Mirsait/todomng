import {
  SET_FILTER
} from '../constants';


const visibleFilter = (state='ALL', action) => {
  switch(action.type){
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }  
}

export default visibleFilter;