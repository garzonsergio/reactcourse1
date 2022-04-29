import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTask, setNewTask] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal((prevValue) => !prevValue);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTask);
    setOpenModal((prevValue) => !prevValue);
  };
  const onChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label></label>
      <textarea
        value={newTask}
        onChange={onChange}
        placeholder="Ingresa una tarea nueva"
      />
      <div>
        <button type="submit">Añadir</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
