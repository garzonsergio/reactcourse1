import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import "./App.css";

function AppUI() {
  return (
    <React.Fragment>
      <header>
        <h1>To Do Today!</h1>
      </header>
      <main>
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer>
          {({
            error,
            loading,
            searchedTodos,
            completeTodo,
            unmarkTodo,
            deleteTodo,
          }) => (
            <TodoList>
              {loading && <p>App loading, please, take a while</p>}
              {error && <p>Something went wrong, try again</p>}
              {!loading && !searchedTodos.length && (
                <p>Create your first task To Do</p>
              )}

              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onUnmark={() => unmarkTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          )}
        </TodoContext.Consumer>
        <CreateToDoButton />
      </main>
    </React.Fragment>
  );
}

export { AppUI };
