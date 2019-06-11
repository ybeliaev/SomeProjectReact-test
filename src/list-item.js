import React from "react";

export default class ListItem extends React.Component {
  labelClick() {
    console.log(this.styleSpan["color"]);
  }
  render() {
    const { label, important } = this.props;
    const styleSpan = {
      fontSize: important ? "30px" : "20px",
      color: important ? "tomato" : "black"
    };
    return (
      <span style={styleSpan} onClick={this.labelClick}>
        {label}
      </span>
    );
  }
}
