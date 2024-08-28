import TodoItem from "./TodoItem.jsx";
function Todoitems({ todoitems }) {
  return (
    <>
      <div className="item-container">
        {todoitems.map((item) => (
          <TodoItem todoitem={item.name} date={item.date}></TodoItem>
        ))}
      </div>
    </>
  );
}
export default Todoitems;
