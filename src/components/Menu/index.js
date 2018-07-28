import React from 'react';
import './index.css';

export default class extends React.Component {
  toggleGame = e => {
    const { isPlaying } = this.props;
    isPlaying ? this.props.pauseGame() : this.props.startGame();
  }
  render() {
    const { isPlaying, score } = this.props;
    const content = isPlaying ? 'Stop' : 'Start';
    return (
      <div className="menu">
	<div>
	  <span className="score">
	    Your score: <span className="score-value">{score}</span>
	  </span>
	</div>
	<button onClick={this.toggleGame}>{content}</button>
      </div>
    )
  }
}
