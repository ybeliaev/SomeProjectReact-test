import React from "react";

import List from "./list";

export default class App extends React.Component {
  state = {
    dataList: [
      { label: "Make fitness", important: "true", id: 1 },
      { label: "Drink vodka", importeat: "false", id: 2 },
      { label: "Read book", important: "true", id: 3 }
    ]
  };
  makeDelete = id => {
    this.setState(({ dataList }) => {
      const idx = dataList.findIndex(el => el.id === id);
    });
    console.log(id);
  };
  render() {
    return (
      <div>
        <List dataList={this.state.dataList} onDelete={this.makeDelete} />
      </div>
    );
  }
}
