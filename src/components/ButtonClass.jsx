/* eslint-disable react/prop-types */
import { Component } from "react";

class ButtonClass extends Component {
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      berhitung: 0,
    };

    this.counterup = this.counterup.bind(this);
  }

  counterup() {
    this.setState({ berhitung: this.state.berhitung + 1 });
  }

  render() {
    return (
      // <button
      //   onClick={() => {
      //     this.setState({ berhitung: this.state.berhitung + 1 });
      //   }}
      // >
      <button onClick={this.counterup}>
        {this.props.text} {this.state.berhitung}
      </button>
    );
  }
}

ButtonClass.defaultProps = {
  text: "Mulai",
};

export default ButtonClass;
