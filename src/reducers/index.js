import {combineReducers} from 'redux';
import todosReducer from './todosSlice';
import visibilityFilterReducer from './filtersSlice.js';

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
