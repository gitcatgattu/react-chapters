import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

import  TodoItemsContext  from "./store/todo-items-store";





function App() {
 
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
  
    setTodoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const deleteItem = (todoItem) => {
    console.log(`Deleting ${todoItem}...`);

    const newTodoItems = todoItems.filter((item) => item.name !== todoItem);
    setTodoItems(newTodoItems);
  };
  const defaultTodoItems = [//{name:'b',dueDate:'today'}
    ]
      // console.log('hi')
  
  return (
    <TodoItemsContext.Provider value={
      {todoItems,
      addNewItem,
      deleteItem,}

    }>
    <center className="todo-container">
      <AppName /> 

      <AddToDo ></AddToDo>
      
        <WelcomeMessage ></WelcomeMessage>
      
      <TodoItems  ></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
