import { connect } from 'react-redux';
import Component from '../components/App';
import * as actionCreators from '../actions';

const mapStateToProps = state => state;

const container = connect(
  mapStateToProps,
  actionCreators
)(Component)

export default container;
