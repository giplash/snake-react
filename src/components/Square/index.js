import React from 'react';
import cn from 'classnames';
import './index.css';

export default class extends React.PureComponent {
  render() {
    const { body, food } = this.props;
    const className = cn({
      'square': true,
      'body': body,
      'food': food
    });
    return (
      <div className={className}></div>
    )
  }
}
