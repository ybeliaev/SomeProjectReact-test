import React from "react";

export default class Counter extends React.Component {
  state = {
    cnt: 0
  };
  increase = () => {
    this.setState({
      cnt: this.state.cnt + 1 < 11 ? this.state.cnt + 1 : 10
    });
  };
  decrease = () => {
    this.setState({
      cnt: this.state.cnt - 1 > -1 ? this.state.cnt - 1 : 0
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.decrease}>Decrease</button>
        <input type="text" value={this.state.cnt} />
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
