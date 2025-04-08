// const Item = (props) => {
//   let {foodItem}= props;
//  return(
//   <li className="list-group-item">
//   {foodItem}
// </li>

//  )

// }
// export default Item

import css from "./Item.module.css";

const Item = ({ foodItem ,bought,handleBuyButton}) => {

   
  return (
    <li className={`${css['kg-item']}   list-group-item ${bought&&'active'}`}>
      <span className={css['kg-span']}>{foodItem}</span>
      <button className={`${css.button} btn btn-info`}
      onClick={handleBuyButton}
      
      >Buy</button>

      
    </li>
  );
};
export default Item;
