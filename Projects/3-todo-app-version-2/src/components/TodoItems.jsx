import TodoItem from "./TodoItem";
import css from './TodoItems.module.css'

const TodoItems = ({ todoItems }) => {
  return (
    <div className={css['items-container']}>
      {todoItems.map((item) => (
        <TodoItem key={item.name}  todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
