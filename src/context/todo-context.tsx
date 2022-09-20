import Todo from "../models/Todo";
import React, { useState } from "react";

type ContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (tid: string) => void;
};
export const TodoContext = React.createContext<ContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
});


const TodoContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    setTodos((prevState) => {
      return prevState.concat(new Todo(text));
    });
  };

  const onDeleteTodoHandler = (tid: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== tid);
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        addTodo: onAddTodoHandler,
        deleteTodo: onDeleteTodoHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
