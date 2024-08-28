import { useState } from "react";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleChangeName = (event) => {
    setTodoName(event.target.value);
  };
  const handleChangeDate = (event) => {
    setTodoDate(event.target.value);
  };
  const addButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" value={todoName} onChange={handleChangeName} />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleChangeDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={addButtonClicked}
          >
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
