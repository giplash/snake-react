import { connect } from 'react-redux';
import Component from '../components/Window';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  score: state.snake.body.length
})

const container = connect(
  mapStateToProps,
  actionCreators
)(Component)

export default container;
