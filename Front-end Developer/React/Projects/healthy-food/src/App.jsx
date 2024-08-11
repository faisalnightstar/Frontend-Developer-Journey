import React, { useState } from 'react';
import FoodItems from './Componant/FoodIttems';
import ErrorMessage from './Componant/ErrorMessage';
import Container from "../../healthy-food/src/Componant/Container";
import FoodInput from './Componant/FoodInput';
import './App.css';


function App() {
  //let foodItems = [];
  // let textStateArr = useState("Food item enter by users");
  // let  textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // upar wala 3 line ka code niche 1 line ka code. same hai
  // useState() function is a react hook which we can use to get the state and set the state.
  
  let [textToShow, setTextState] =  useState();
  let [foodItems,  setFoodItems] = useState([])




  // let foodItems = ["Apple", "Orange", "Banana", "Mango", "Pineapple", "Bread", "Rice", "Green Veggie", "Ghee"];

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem =  event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);

      // setTextState("New Food Item " + event.target.value)
      // setFoodItems(["New  Food Item " + newFoodItem])
    }
    // console.log(event)
    // setTextState(event.target.value);

}
 
  return <Container>
    <h1 className='heading'>Healthy Food</h1>
    <FoodInput handleKeyDown = {onKeyDown} ></FoodInput>
    <p>{textToShow}</p>
    <ErrorMessage EItems={foodItems}></ErrorMessage>
    <FoodItems FItems = {foodItems} />
    
    </Container>
    
}

export default App


