import React, { useState } from "react";
import Todo from "../models/Todo";
import { NewTodo } from "./NewTodo";
import TodoItem from "./TodoItem";
import Classes from "./Todos.module.css";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
const onAddTodoHandler = (text: string) => {
  setTodos((prevState) => {
    return prevState.concat(new Todo(text));
  });
};

  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <ul className={Classes.todos}>
        {todos.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;

// check out previous commit to lean more, i have removed some valuable comments
