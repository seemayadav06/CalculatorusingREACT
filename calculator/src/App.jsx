
import style from './App.module.css'
import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer";
import {useState} from "react";


function App() {
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='c'){
      setCalVal("");
    }
    else if(buttonText==='='){
       const result=eval(calVal);
       setCalVal(result);
    }
    else{
      const newDisplayVal=calVal+buttonText;
      setCalVal(newDisplayVal);
    }
  }

  return (
    <div className={style.calculator}>
      <Display displayval={calVal} ></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  )
}

export default App
