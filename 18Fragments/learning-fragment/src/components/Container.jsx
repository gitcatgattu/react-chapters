import css from './Container.module.css'
const Container =(props)=>{
return (
  <div className={css.Container}>{props.children}</div>
)
}
export default Container