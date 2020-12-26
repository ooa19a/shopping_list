import React from "react";

const DeleteLastItem = (props) => {
  const handleDeleteLastItem = (event) => {
    props.onDeleteLastItem();
  };

  return (
    <button disabled={props.buttonDisabled} 
    onClick={handleDeleteLastItem}>
      Delete the Last Item
    </button>
  );
};
export default DeleteLastItem;