import React from "react";
import ListItem from "./list-item";
const List = ({ dataList }) => {
  const elements = dataList.map(item => {
    const { id, ...itemData } = item;
    return (
      <li>
        <ListItem key={id} {...itemData} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
export default List;
