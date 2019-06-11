import React from "react";

const ListItem = ({ label, important = false }) => {
  function labelClick() {
    console.log({ styleSpan });
  }
  const styleSpan = {
    fontSize: important ? "30px" : "20px",
    color: important ? "tomato" : "black"
  };
  return (
    <span style={styleSpan} onClick={labelClick}>
      {label}
    </span>
  );
};
export default ListItem;
