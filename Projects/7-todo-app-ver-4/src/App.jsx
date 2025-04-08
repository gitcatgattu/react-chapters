import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import  TodoItemsContextProvider from "./store/todo-items-store";


function App() {

  return (
    <TodoItemsContextProvider >
      <center className="todo-container">
        <AppName />

        <AddToDo></AddToDo>

        <WelcomeMessage></WelcomeMessage>

        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}
export default App;
