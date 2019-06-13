import React from "react";

export default class ListItem extends React.Component {
  state = {
    done: false
  };
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };
  render() {
    const { label } = this.props;
    const { done } = this.state;
    let classNames = "list-item";
    if (done) {
      classNames += " done";
    }

    return (
      <span className={classNames} onClick={this.onLabelClick}>
        {label}
        <button>DELETE ME</button>
      </span>
    );
  }
}
