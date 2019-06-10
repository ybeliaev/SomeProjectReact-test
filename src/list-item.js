import React from "react";

const ListItem = ({ label, important = false }) => {
  const styleSpan = {
    fontSize: important ? "30px" : "20px",
    color: important ? "tomato" : "black"
  };
  return <span style={styleSpan}>{label}</span>;
};
export default ListItem;
