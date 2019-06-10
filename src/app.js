import React from "react";
import List from "./list";
const App = () => {
  const dataList = [
    { label: "Make fitness", important: "true", id: 1 },
    { label: "Drink vodka", importeat: "false", id: 2 },
    { label: "Read book", important: "true", id: 3 }
  ];
  return (
    <div>
      <List dataList={dataList} />
    </div>
  );
};

export default App;
