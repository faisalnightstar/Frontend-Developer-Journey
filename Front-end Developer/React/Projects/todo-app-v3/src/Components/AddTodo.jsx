import { useState } from "react";

function AddTodo({onNewItem}) {
  const [todoName, setTodoName] = useState("");
  const  [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => { 
    setDueDate(event.target.value) 
  };

  const  handleAddButtonClicked  = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }




  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input className="form-text" type="text" name="addtodo" placeholder="Enter todo here" value={todoName}  onChange={handleNameChange} required/>
        </div>
        <div className="col-4">
          <input type="date" name="addtodo" id="date" value={dueDate} onChange={handleDateChange} required />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick = {handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
