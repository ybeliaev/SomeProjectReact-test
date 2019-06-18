import React from "react";
import ListItem from "./list-item";
const List = ({ dataList, onDelete }) => {
  const makeDelete = () => {};
  const elements = dataList.map(item => {
    const { id, ...itemData } = item;
    return (
      <li>
        <ListItem key={id} {...itemData} onDeleteItem={makeDelete} />
        {id}
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
export default List;
