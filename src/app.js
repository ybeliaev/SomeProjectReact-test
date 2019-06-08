import React from "react";
import List from "./list";
const App = () => {
  const dataList = [
    { label: "Make fitness", importent: "true", id: 1 },
    { label: "Drink vodka", importent: "false", id: 2 },
    { label: "Read book", importent: "true", id: 3 }
  ];
  return (
    <div>
      <List dataList={dataList} />
    </div>
  );
};

export default App;
