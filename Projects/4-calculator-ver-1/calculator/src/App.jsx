import css from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtClick = (buttonText) => {
    if (buttonText==='C'){
      setCalVal('')
    }else if(buttonText==='='){
      const result =eval(calVal)
      setCalVal(result)
    }else{
      const newDisplay=calVal+buttonText;
      setCalVal(newDisplay)
    }

  }//'string'+event ->string objectobject
  return (
    <div className={css.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer
        onButtonClick={onButtClick} 
      ></ButtonsContainer>
    </div>
  );
}

export default App;
