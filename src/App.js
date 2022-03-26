import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
// import "./App.css";

const todos = [
  { text: "Limpiar baños", completed: false },
  { text: "Pararse en las manos", completed: false },
  { text: "Sacar la basura", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
