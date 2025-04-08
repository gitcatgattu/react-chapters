import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2025",
    },
    {
      name: "Go to College",
      dueDate: "5/2/2025",
    },
    {
      name: "like the video",
      dueDate: "now",
    },
  ];

  const [todoItems, setTodoItems] = useState([]);
  const addItem = (itemName, itemDueDate) => {
    // let item=
    // let newTodoItems=[...todoItems,item]

    setTodoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const removeItem = (todoItem) => {
    console.log(`Deleting ${todoItem}...`);

    const newTodoItems = todoItems.filter((item) => item.name !== todoItem);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />

      <AddToDo onAddClick={addItem}></AddToDo>
      {todoItems.length === 0 && (
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      )}
      <TodoItems onDeleteButton={removeItem} todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
