import styles from "./App.module.css";
import Display from "./component/Display";
import Buttons from "./component/Buttons";
import { useState } from "react";


function App() {

  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === "C") {
      setCalValue("");
    }
    else if(buttonText === "=") {
      setCalValue(eval(calValue));
    }
    else{
      const newCalValue = calValue + buttonText;
      setCalValue(newCalValue);
    }
  }


  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={ calValue }></Display>
        <Buttons onButtonClick ={ onButtonClick}></Buttons>
        
      </div>
    </>
  );
}

export default App;
