import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class App extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return <div>{this.props.children}</div>;
	}
}
