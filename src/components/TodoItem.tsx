import { MouseEventHandler } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string, onDelete : (id: string) => void, tid : string }> = (props) => {


  return (
    <li className={classes.item} onClick={props.onDelete.bind(null,props.tid)}>
      {props.text}
    </li>
  );
};

export default TodoItem;
