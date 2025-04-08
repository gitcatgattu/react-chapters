import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
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

  return (
    <center className="todo-container">
      <AppName />

      <AddToDo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
