import TodoItemsContext from "../store/todo-items-store";

import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";
import { useContext } from "react";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext)
  console.log(todoItems)
     
  return (
    <div className={css["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
