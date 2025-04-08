import css from './Display.module.css'
const Display=({displayVal})=>{
return(
      <input type="text" className={css.display} value={displayVal} readOnly />
      // readonly enables input only from keys 
  
)
}
export default Display;  