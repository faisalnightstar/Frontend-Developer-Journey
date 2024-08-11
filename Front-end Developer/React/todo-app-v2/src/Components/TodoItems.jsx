import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
        {/* //print array or objects here using map
        // TODO: Add the rest of the items here */}
        {todoItems.map((item, index) => { return <TodoItem key={index} todoDate={item.date} todoName={item.name}></TodoItem>; })}
    </div>
  );
};

export default TodoItems;
