import React from "react";
import ListItem from "./list-item";
const List = ({ dataList, onDelete }) => {
  const elements = dataList.map(item => {
    const { id, ...itemData } = item;
    return (
      <li>
        <ListItem key={id} {...itemData} onDeleteItem={onDelete} /> {id}
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
export default List;
