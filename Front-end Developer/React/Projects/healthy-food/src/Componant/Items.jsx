import styles from "./Items.module.css";

const Items = ({FoodItems, bought, handleBuyButtonClicked}) => {
 
  return (
    <li className={`${styles["kg-items"]} list-group-item ${bought  && "active"}`}>
      {FoodItems}
      <button
        className={`${styles.button} btn btn-primary`}
        onClick= {handleBuyButtonClicked}
      >
        Buy
      </button>
      <button className={`${styles.delete_button} btn btn-danger `}>Delete</button>
    </li>
  );
};

export default Items;
