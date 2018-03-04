import {
  CREATE_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_FILTER
} from '../constants';

import { getNewKey } from '../utils/getNewKey';


export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: newTodo(todo)
  }
}

const newTodo = (todo) => {
  todo.id = getNewKey('todo');
  todo.complete = false;
  return todo;
}

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id
  }
}

export const deleteTodo =(id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  }
}

