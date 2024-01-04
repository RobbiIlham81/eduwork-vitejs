/* eslint-disable react/prop-types */
import { Component } from "react";

class ButtonClass extends Component {
  render() {
    return <button>{this.props.text} </button>;
  }
}

export default ButtonClass;
