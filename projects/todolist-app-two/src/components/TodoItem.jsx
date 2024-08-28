function TodoItem({ todoitem, date }) {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-4">{todoitem}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
