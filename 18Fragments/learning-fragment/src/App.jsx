import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  
  //.....array destructuring......//,,,
  let [foodItems, setFoodItems] = useState([]);
 
  const onKeyDown= (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems,newFoodItem];
      event.target.value=''
      
      setFoodItems(newItems);
    }//.............observed from console.log(event)
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems itemsoffood={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is the list of healthy foods that are good for your health </p>
      </Container>
    </>

    //extra div as the there are two levels so we use fragment
  );
}

export default App;
