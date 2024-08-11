import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css"

function App() {

  const todoItems = [
  {
    name: "Abu Faisal",
    dueDate: "2025-01-02",
  },
   {
    name: "Faisal",
    dueDate: "202-01-02",
   },
   {
    name:"Faisala",
    dueDate: "202-01-02",
   },
   {
    name: "Faisalwa",
    dueDate: "202-01-02",
   },

  ];
  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )
}

export default App;
