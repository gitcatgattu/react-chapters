import css from './FoodInput.module.css'
const FoodInput=({handleKeyDown}=props)=>{
  
return (
  <input type="text" placeholder="Enter food item here"className={css.foodInput}
  //onChange={handleOnChange}
  onKeyDown={handleKeyDown}

  />
)
}
export default FoodInput 