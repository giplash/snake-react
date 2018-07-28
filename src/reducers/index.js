import { combineReducers } from 'redux';
import snake from './snake';
import window from './window';

export default combineReducers({
  snake,
  window
})
