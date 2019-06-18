import React from "react";

export default class ListItem extends React.Component {
  state = {
    done: false
  };

  render() {
    const { label, onDeleteItem } = this.props;
    const { done } = this.state;
    let classNames = "list-item";
    if (done) {
      classNames += " done";
    }

    return (
      <div>
        <span className={classNames} onClick={this.onLabelClick}>
          {label}
        </span>
        <button onClick={() => onDeleteItem}>DELETE ME</button>
      </div>
    );
  }
}
