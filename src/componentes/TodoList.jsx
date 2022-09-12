import React from "react";
import { useState } from "react";
import Formulario from "./Formulario";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const agregarTodos = (todo) => {
    console.log(todo);
    setTodos((old) => [...old, todo]);
  };
  return (
    <div>
      <Formulario agregarTodos={agregarTodos} />
    </div>
  );
};

export default TodoList;
