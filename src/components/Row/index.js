import React from 'react';
import Square from '../Square';
import _ from 'lodash';
import './index.css';

export default class extends React.PureComponent {
  renderSquares() {
    const { width, y, body, food: foodCoords } = this.props;
    const res = new Array(width - 1);
    res.fill(null);
    return res.map((item, i) => {
      const coords = {
	x: i,
	y
      }
      const isBody = body.some(item => _.isEqual(item, coords)) ?
		      true
		      : false;
      const food = _.isEqual(foodCoords, coords);
      return (
	<Square coords={coords} body={isBody} food={food} key={i}/>
      )
    })
  }
  render() {
    return (
      <div className="row">
	{this.renderSquares()}
      </div>
    )
  }
}
