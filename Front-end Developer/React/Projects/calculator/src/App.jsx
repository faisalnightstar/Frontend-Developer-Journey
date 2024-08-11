import styles from "./App.module.css";
import Display from "./component/Display";
import Buttons from "./component/Buttons";


function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <Buttons></Buttons>
        
      </div>
    </>
  );
}

export default App;
