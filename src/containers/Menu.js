import { connect } from 'react-redux';
import Component from '../components/Menu';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  isPlaying: state.snake.isPlaying,
  score: state.snake.body.length
})

const container = connect(
  mapStateToProps,
  actionCreators
)(Component)

export default container;
