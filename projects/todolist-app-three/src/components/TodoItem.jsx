function TodoItem({ todoitem, date, handleDeleteItem }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{todoitem}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => handleDeleteItem(todoitem)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
