// components/YourComponent.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { someAction } from "../redux/slices/someSlice";

class YourComponent extends Component {
  render() {
    // Access state variables via this.props
    const { someStateVariable } = this.props;

    return (
      <div>
        <p>{someStateVariable}</p>
      </div>
    );

    const { dispatch } = this.props;

    const handleSomeAction = () => {
      dispatch(someAction(/* payload */)); // Dispatch your action with optional payload
    };

    return (
      <div>
        <button onClick={handleSomeAction}>Dispatch Action</button>
      </div>
    );
  }
}

// Map state variables to props
const mapStateToProps = (state) => ({
  someStateVariable: state.someReducer.someStateVariable,
});

export default connect(mapStateToProps)(YourComponent);
