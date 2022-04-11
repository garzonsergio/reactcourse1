import React from "react";
import "./styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="inputContainer">
      <input
        placeholder="Ingrese la tarea aquí"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <p>{searchValue}</p>
    </div>
  );
}

export { TodoSearch };
