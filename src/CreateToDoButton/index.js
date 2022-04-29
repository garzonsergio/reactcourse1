import React from "react";
import "./CreateToDoButton.css";
import { TodoContext } from "../TodoContext";

function CreateToDoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const onClickButton = () => setOpenModal(!openModal);
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <span className="material-icons">add_circle</span>
    </button>
  );
}

export { CreateToDoButton };
