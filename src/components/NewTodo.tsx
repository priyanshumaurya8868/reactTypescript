import React, { useRef } from "react";
import Classes from "./NewTodo.module.css";
export const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (
  props
) => {
  //useRef is react hook,& each react hook is generic
  // useRef required initial value, so passed null
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const text = inputRef.current!.value;
    if (text?.trim().length === 0) {
      return;
    }
    props.onAddTodo(text);
  };

  return (
    <form className={Classes.form} onSubmit={onSubmitHandler}>
      <label className={Classes.label} htmlFor="text">
        Todo
      </label>
      <input className={Classes.input} type="text" id="text" ref={inputRef} />
      <button className={Classes.button} type="submit">
        Add Todo
      </button>
    </form>
  );
};
