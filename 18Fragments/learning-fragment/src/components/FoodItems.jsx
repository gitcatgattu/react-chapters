import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ itemsoffood } = props) => {
//  let [aci ]=useState(false);
  // let onClick=()=>{
  //   setBuy(true);

  // }


  let [activeItems,setActiveItems]=useState([])

  let onBuyButton = (event,item)=>{
    let newItems = [...activeItems,item]
    setActiveItems(newItems)

  }
  return (
    <ul className="list-group">
      {itemsoffood.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event)=>onBuyButton(event,item)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
