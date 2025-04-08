import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import TodoItemsContext from '../store/todo-items-store'
import {useContext} from 'react'
function  AddToDo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const noOfUpdates = useRef(0)
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current+=1

  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(noOfUpdates.current+ 'is the no of updates')
  // };

  const handleAddButtonClicked = (event) => {
    console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);

    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success my-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
