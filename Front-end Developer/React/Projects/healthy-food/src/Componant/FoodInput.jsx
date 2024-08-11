import styles from "./FoodInput.module.css"
const FoodInput= ({handleKeyDown}) => {
   
    return(
        <>
        <input id="inout-food" className={styles["food-input"]} type="text" placeholder="Enter food" onKeyDown= { handleKeyDown} />
        <button className="btn btn-primary kg-items">Add</button>
        </>
    )
}
export default FoodInput;