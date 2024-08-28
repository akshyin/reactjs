import TodoItem from "./TodoItem.jsx";
function Todoitems({ todoitems, handleDeleteItem }) {
  return (
    <>
      <div className="item-container">
        {todoitems.map((item) => (
          <TodoItem
            todoitem={item.name}
            date={item.date}
            handleDeleteItem={handleDeleteItem}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}
export default Todoitems;
