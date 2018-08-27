import React from 'react';
import Field from '../Field';
import Menu from '../../containers/Menu';
import Window from '../../containers/Window';
import _ from 'lodash';
import './index.css';

const directions = {
  37: 'left',
  65: 'left',
  38: 'top',
  87: 'top',
  39: 'right',
  68: 'right',
  40: 'bottom',
  83: 'bottom'
}

export default class extends React.Component {
  componentDidUpdate() {
    this.field.focus();
  }
  componentDidMount(prevProps, prevState) {
    this.field.focus();
    this.interval = setInterval(
      callback.bind(this),
      100
    );
  }
  handleKeyDown = e => {
    const code = e.keyCode;
    const { direction: current, isPlaying, isReadyToTurn } = this.props.snake;
    isPlaying ? null : this.props.startGame();
    if (code === 27) {
      return ;
    }
    if (code === 38 || code === 40) e.preventDefault();
    const direction = directions[code];
    if (!isReadyToTurn) return;
    if (current === direction) return ;
    if (current === 'right' && direction === 'left') return;
    if (current === 'left' && direction === 'right') return;
    if (current === 'top' && direction === 'bottom') return;
    if (current === 'bottom' && direction === 'top') return;
    this.props.stopTurning();
    this.props.changeDirection(direction);
  }
  render() {
    return (
      <div 
	className="app"
	ref={c => (this.field = c)}
	tabIndex={0}
	onKeyDown={this.handleKeyDown}
      >
	<Menu />
	{this.props.window.isShown ? <Window /> : null}
	<Field 
	  body={this.props.snake.body} 
	  food={this.props.snake.food}
	  size={this.props.snake.size}
	/>
      </div>
    )
  }
}

function callback() {
  //const date1 = new Date();
  const { direction, body, food, isPlaying } = this.props.snake;
  if (!isPlaying) return;
  this.props.startTurning();
  if (isGameOver(body)) {
    this.props.pauseGame();
    this.props.showWindow();
    return;
  }
  if (checkEating(body, food)) {
    this.props.placeFood();
    this.props.grow(3);
    /*
    const date2 = new Date();
    console.log(date2 - date1);
    */
  }
  switch (direction) {
    case 'right':
      this.props.moveToRight();
      break;
    case 'left':
      this.props.moveToLeft();
      break;
    case 'top':
      this.props.moveToTop();
      break;
    case 'bottom':
      this.props.moveToBottom();
      break;
  }
}

function isGameOver(body) {
  const [ head, ...rest ] = body;
  return rest.some(item => _.isEqual(item, head));
}

function checkEating(body, food) {
  const [ head, ...rest ] = body;
  return _.isEqual(food, head);
}
