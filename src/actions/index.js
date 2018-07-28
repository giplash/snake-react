import { createAction } from 'redux-actions';

export const startGame = createAction('GAME_START');
export const pauseGame = createAction('GAME_PAUSE');
export const restartGame = createAction('GAME_RESTART');

export const changeDirection = createAction('DIRECTION_CHANGE');
export const moveToRight = createAction('SNAKE_MOVE_TO_RIGHT');
export const moveToLeft = createAction('SNAKE_MOVE_TO_LEFT');
export const moveToTop = createAction('SNAKE_MOVE_TO_TOP');
export const moveToBottom = createAction('SNAKE_MOVE_TO_BOTTOM');
export const grow = createAction('SNAKE_GROW');
export const placeFood = createAction('FOOD_PLACE');

export const showWindow = createAction('WINDOW_SHOW');
export const closeWindow = createAction('WINDOW_CLOSE');
