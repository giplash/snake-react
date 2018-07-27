import React from 'react';
import Field from '../Field';
import './index.css';

export default class extends React.Component {
  render() {
    return (
      <div className="container">
	<Field 
	  size={{
	    width: 40,
	    height: 40
	  }}
	/>
      </div>
    )
  }
}
