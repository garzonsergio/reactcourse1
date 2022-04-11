import React from "react";
import "./styles/TodoItem.css";

function TodoItem(props) {
  const onComplete = () => {
    alert("Tarea " + props.text + " completada");
  };
  const onDelete = () => {
    alert("Tarea " + props.text + " eliminada");
  };
  return (
    <li>
      <span className="material-icons tasks-buttons" onClick={onComplete}>
        radio_button_unchecked
      </span>
      <span className="material-icons tasks-buttons">check_circle_outline</span>
      <p className="todoItem">{props.text}</p>
      <span className="material-icons tasks-buttons" onClick={onDelete}>
        clear
      </span>
    </li>
  );
}

export { TodoItem };
