import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems,onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
        {/* //print array or objects here using map
        // TODO: Add the rest of the items here */}
        {todoItems.map((item, index) => { return <TodoItem key={index} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>; })}
    </div>
  );
};

export default TodoItems;
