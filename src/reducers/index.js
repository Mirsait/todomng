import { combineReducers } from 'redux';
import todos from './todosReducer';
import filter from './filterReducer';

const rootReducers = combineReducers({
  todos,
  filter
});

export default rootReducers;