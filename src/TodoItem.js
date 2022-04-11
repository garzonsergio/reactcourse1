import React from "react";
import "./styles/TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <span className="material-icons tasks-buttons" onClick={props.onComplete}>
        radio_button_unchecked
      </span>
      <span className="material-icons tasks-buttons" onClick={props.onUnmark}>
        check_circle_outline
      </span>
      <p className="todoItem">{props.text}</p>
      <span className="material-icons tasks-buttons" onClick={props.onDelete}>
        clear
      </span>
    </li>
  );
}

export { TodoItem };
