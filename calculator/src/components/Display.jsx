import style from './Display.module.css'
const Display=({displayval})=>{
  return(
    <input className={style.display} type="text" value={displayval} readOnly></input>
  )
}
export default Display;