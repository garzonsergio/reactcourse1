import React from "react";
import "./styles/CreateToDoButton.css";

function CreateToDoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={() => console.log("clic")}>
      <span className="material-icons">add_circle</span>
    </button>
  );
}

export { CreateToDoButton };
