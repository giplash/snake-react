import _ from 'lodash';
export const directions = {
  37: 'left',
  65: 'left',
  38: 'top',
  87: 'top',
  39: 'right',
  68: 'right',
  40: 'bottom',
  83: 'bottom'
}

export function checkGameOver(snake, { width, height }) {
  const [ head, ...rest ] = snake;
  const { x, y } = head;
  return rest.some(item => _.isEqual(item, head)) ||
	x === width - 1 || x === 0 ||
	y === height - 1 || y === 0;
}

export function checkEating(snake, food) {
  const [ head ] = snake;
  return _.isEqual(head, food);
}

export function generateFood({ width, height }, snake) {
  let x, y;
  do {
    x = _.random(0, width - 1);
    y = _.random(0, height - 1);
  } while (snake && snake.some(item => _.isEqual(item, {x, y})))
  return {
    x,
    y
  }
}
