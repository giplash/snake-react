export default {
  'right': moveToRight,
  'left': moveToLeft,
  'top': moveToTop,
  'bottom': moveToBottom,
}
function moveToRight(snake, size, growing) {
  const { width, height } = size;
  let prev;
  const mapped = snake.map(({ x, y }, i) => {
    if (i === 0) {
      prev = {x, y};
      const newX = x + 1;
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
  return growing ? [ ...mapped, prev ] : mapped;
}

function moveToLeft(snake, size, growing) {
  const { width, height } = size;
  let prev;
  const mapped = snake.map(({ x, y }, i) => {
    if (i === 0) {
      prev = {x, y};
      const newX = x - 1;
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
  return growing ? [ ...mapped, prev ] : mapped;
}

function moveToTop(snake, size, growing) {
  const { width, height } = size;
  let prev;
  const mapped = snake.map(({ x, y }, i) => {
    if (i === 0) {
      prev = {x, y};
      const newY = y - 1;
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
  return growing ? [ ...mapped, prev ] : mapped;
}

function moveToBottom(snake, size, growing) {
  const { width, height } = size;
  let prev;
  const mapped = snake.map(({ x, y }, i) => {
    if (i === 0) {
      prev = {x, y};
      const newY = y + 1;
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
  return growing ? [ ...mapped, prev ] : mapped;
}
