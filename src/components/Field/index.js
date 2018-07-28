import React from 'react';
import Row from '../Row';
import './index.css';

export default class extends React.PureComponent {
  renderRows() {
    const { width, height } = this.props.size;
    const res = new Array(height - 1);
    res.fill(null);
    return res.map((item, i) => {
      const filtered = this.props.body.filter(item => item.y === i);
      return (
	<Row 
	  key={i} 
	  width={width} 
	  y={i} 
	  body={filtered} 
	  food={this.props.food}
	/>
      )
    })
  }
  render() {
    return (
      <div className="field">
	{this.renderRows()}
      </div>
    )
  }
}
