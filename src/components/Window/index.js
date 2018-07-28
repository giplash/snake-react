import React from 'react';
import './index.css';

export default class extends React.Component {
  handleClick = e => {
    this.props.closeWindow();
    this.props.restartGame();
  }
  render() {
    const { score } = this.props;
    return (
      <div>
	<div className="shadow-block"></div>
	<div className="window">
	  <span>Your score - <span className="score-value">{score}</span></span>
	  <button onClick={this.handleClick}>Restart</button>
	</div>
      </div>
    )
  }
}
