import React from "react";

const ItemAddForm = ({ onAddItem }) => {
  return (
    <form>
      <input type="text" placeholder="Input name of element" />
      <button onClick={() => onAddItem("hello")}>Add Item</button>
    </form>
  );
};

export default ItemAddForm;
