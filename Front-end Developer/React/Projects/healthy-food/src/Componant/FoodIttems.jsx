import Items from "./Items";
import { useState } from "react";

const FoodItems = ({ FItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => { 
    let newItems = ([...activeItems, item]);
    setActiveItems(newItems)
  }

  return (
    <ul className="list-group kg-items">
      {FItems.map((item) => (
        <Items
          key={item}
          FoodItems={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClicked={(event) => onBuyButton(item, event)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
