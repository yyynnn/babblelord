import React from 'react';
import { Link } from 'react-router';

import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button__wrapper">
        <button onClick={this.props.onClickEvent} className={'button ' + this.props.buttonType}>
          <img src={this.props.data} alt="" />
        </button>
      </div>
    );
  }
}
