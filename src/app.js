import React from "react";

import List from "./list";
import ItemAddForm from "./item-add-form";
export default class App extends React.Component {
  maxID = 50;
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
      const before = dataList.slice(0, idx);
      const after = dataList.slice(idx + 1);

      return { dataList: [...before, ...after] };
    });
  };
  addItem = text => {
    console.log(text);
    const newItem = {
      label: text,
      important: false,
      id: this.maxID++
    };
    this.setState(({ dataList }) => {
      const newArr = [...dataList, newItem];
      return {
        dataList: newArr
      };
    });
  };
  render() {
    return (
      <div>
        <List dataList={this.state.dataList} onDelete={this.makeDelete} />
        <ItemAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}
