import _ from 'lodash';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  isShown: false
}

const window = handleActions({
  [actions.showWindow](state) {
    return { ...state, isShown: true }
  },
  [actions.closeWindow](state) {
    return { ...state, isShown: false }
  }
}, initialState)

export default window;
