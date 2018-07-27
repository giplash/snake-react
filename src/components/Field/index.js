import React from 'react';
import Row from '../Row';
import moves from './moves';
import _ from 'lodash';
import * as utils from './utils';
import './index.css';

export default class extends React.Component {
  state = {
    snake: [
      {x: 5, y: 0},
      {x: 5, y: 1},
      {x: 5, y: 2},
      {x: 5, y: 3},
    ],
    food: {
      x: null,
      y: null
    },
    growing: null,
    direction: null
  }
  restart() {
    const snake = [
	{x: 5, y: 0},
	{x: 5, y: 1},
	{x: 5, y: 2},
	{x: 5, y: 3},
    ];
    this.setState({
      snake,
      food: utils.generateFood(this.props.size, snake),
      growing: 0,
      direction: 'right' 
    })
  }
  renderRows() {
    const { width, height } = this.props.size;
    const res = new Array(height - 1);
    res.fill(null);
    return res.map((item, i) => {
      const filtered = this.state.snake.filter(item => item.y === i);
      return (
	<Row key={i} width={width} y={i} snake={filtered} food={this.state.food}/>
      )
    })
  }
  componentDidMount() {
    this.setState({ 
      direction: 'right',
      food: utils.generateFood(this.props.size),
      food: {x: 20, y: 20},
      growing: 0
    });
    const binded = callback.bind(this);
    setInterval(
      binded,
      100 
    )
  }
  componentDidUpdate(prevProps, prevState) {
    this.field.focus();
  }
  handleKey = e => {
    if (utils.directions[e.keyCode] === 'top') e.preventDefault();
    if (utils.directions[e.keyCode] === 'bottom') e.preventDefault();
    const { direction } = this.state;
    const newDirection = utils.directions[e.keyCode] || direction;
    if (direction === newDirection) return;
    if (direction === 'right' && newDirection === 'left') return;
    if (direction === 'left' && newDirection === 'right') return;
    if (direction === 'top' && newDirection === 'bottom') return;
    if (direction === 'bottom' && newDirection === 'top') return;
    this.setState({
      direction: newDirection
    })
  }
  render() {
    const field = document.querySelector('.field')
    return (
      <div className="field" 
	   tabIndex={0} 
	   onKeyDown={this.handleKey} 
	   ref={c => (this.field = c)}>
	{this.renderRows()}
      </div>
    )
  }
}

function callback() {
  const { direction, snake, food, growing } = this.state;
  const { size } = this.props;
  let realGrowing = growing;
  if (utils.checkEating(snake, food)) {
    this.setState({
      growing: 3,
      food: utils.generateFood(this.props.size, snake),
    })
    realGrowing += 3;
  }
  if (utils.checkGameOver(snake)) {
    alert('you lost');
    this.restart();
    return ;
  }
  const newSnake = moves[direction](snake, size, realGrowing);
  this.setState({
    snake: newSnake,
    growing: realGrowing ? realGrowing - 1 : 0
  })
}


