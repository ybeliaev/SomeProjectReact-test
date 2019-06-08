import React from "react";
import ListItem from "./list-item";

const List = ({ dataList }) => {
  const elements = dataList.map(item => {
    return (
      <li>
        <ListItem label={item.label} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
export default List;
