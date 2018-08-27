import _ from 'lodash';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  body: [
    {x: 5, y: 5},
    {x: 4, y: 5},
    {x: 3, y: 5},
  ],
  direction: 'right',
  growing: 0,
  food: {x: 10, y: 10},
  isPlaying: false,
  isReadyToTurn: true,
  size: {
    width: 30,
    height: 20
  }
}

const snake = handleActions({
  [actions.placeFood](state) {
    const { width, height } = state.size;
    const { body } = state;
    let x, y;
    do {
      x = _.random(0, width - 2);
      y = _.random(0, height - 2);
    } while (body.some(item => _.isEqual(item, {x, y})))
    return { ...state, food: {x, y} }
  },
  [actions.changeDirection](state, { payload }) {
    return { ...state, direction: payload }
  },
  [actions.grow](state, { payload }) {
    const { growing } = state;
    return { ...state,  growing: growing + payload }
  },
  [actions.moveToRight](state) {
    const { width, height } = state.size;
    const { body, growing } = state;
    let prev;
    const mapped = body.map(({ x, y }, i) => {
      if (i === 0) {
	prev = {x, y};
	const newX = x + 1 < width - 1 ? x + 1 : 0;
	return {
	  y,
	  x: newX
	}
      }
      const newElement = {
	y: prev.y,
	x: prev.x
      }
      prev = {x, y}
      return newElement;
    })
    const newSnake = growing ? [ ...mapped, prev ] : mapped;
    return { ...state, body: newSnake, growing: growing ? growing - 1 : 0 }
  },
  [actions.moveToLeft](state) {
    const { width, height } = state.size;
    const { body, growing } = state;
    let prev;
    const mapped = body.map(({ x, y }, i) => {
      if (i === 0) {
	prev = {x, y};
	const newX = x - 1 >= 0 ? x - 1 : width - 2;
	return {
	  y,
	  x: newX
	}
      }
      const newElement = {
	y: prev.y,
	x: prev.x
      }
      prev = {x, y}
      return newElement;
    })
    const newSnake = growing ? [ ...mapped, prev ] : mapped;
    return { ...state, body: newSnake, growing: growing ? growing - 1 : 0 }
  },
  [actions.moveToTop](state) {
    const { width, height } = state.size;
    const { body, growing } = state;
    let prev;
    const mapped = body.map(({ x, y }, i) => {
      if (i === 0) {
	prev = {x, y};
	const newY = y - 1 >= 0 ? y - 1 : height - 2;
	return {
	  x,
	  y: newY
	}
      }
      const newElement = {
	y: prev.y,
	x: prev.x
      }
      prev = {x, y}
      return newElement;
    })
    const newSnake = growing ? [ ...mapped, prev ] : mapped;
    return { ...state, body: newSnake, growing: growing ? growing - 1 : 0 }
  },
  [actions.moveToBottom](state) {
    const { width, height } = state.size;
    const { body, growing } = state;
    let prev;
    const mapped = body.map(({ x, y }, i) => {
      if (i === 0) {
	prev = {x, y};
	const newY = y + 1 < height - 1 ? y + 1 : 0;
	return {
	  x,
	  y: newY
	}
      }
      const newElement = {
	y: prev.y,
	x: prev.x
      }
      prev = {x, y}
      return newElement;
    })
    const newSnake = growing ? [ ...mapped, prev ] : mapped;
    return { ...state, body: newSnake, growing: growing ? growing - 1 : 0 };
  },
  [actions.startGame](state) {
    console.log('before starting');
    console.log(state);
    return { ...state, isPlaying: true }
  },
  [actions.pauseGame](state) {
    console.log('before pausing');
    console.log(state);
    return { ...state, isPlaying: false }
  },
  [actions.restartGame](start) {
    return initialState;
  },
  [actions.startTurning](state) {
    return { ...state, isReadyToTurn: true }
  },
  [actions.stopTurning](state) {
    return { ...state, isReadyToTurn: false }
  }
}, initialState);

export default snake;
