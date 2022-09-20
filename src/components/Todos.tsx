import { useContext } from "react";
import { TodoContext } from "../context/todo-context";

import { NewTodo } from "./NewTodo";
import TodoItem from "./TodoItem";
import Classes from "./Todos.module.css";

const Todos = () => {
  const ctx = useContext(TodoContext);
  return (
    <div>
      <NewTodo onAddTodo={ctx.addTodo} />
      <ul className={Classes.todos}>
        {ctx.todos.map((item) => (
          <TodoItem
            key={item.id}
            tid={item.id}
            text={item.text}
            onDelete={ctx.deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;

// check out previous commit to lean more, i have removed some valuable comments
