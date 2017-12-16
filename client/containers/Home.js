import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
      app
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
