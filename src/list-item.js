import React from "react";

const ListItem = ({ label, important = false }) => {
  const styleSpan = {
    fontSize: important ? "30px" : "20px",
    color: important ? "tomato" : "black"
  };
  return (
    <span style={styleSpan} onClick={() => console.log(`Click on '${label}'`)}>
      {label}
    </span>
  );
};
export default ListItem;
