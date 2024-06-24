import style from "./ButtonsContainer.module.css"
const ButtonsContainer=({onButtonClick})=>{
    const buttonName=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return (
        <div className={style.buttonsContainer}>
            {buttonName.map((name)=><button className={style.button} onClick={()=>onButtonClick(name)}>{name}</button>)}
      </div>
    )
}
export default ButtonsContainer;
