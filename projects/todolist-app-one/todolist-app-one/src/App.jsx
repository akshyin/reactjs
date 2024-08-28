import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import Todoitem1 from "./components/TodoItem1";
import Todoitem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <div>
      <Appname />
      <AddTodo />
      <div className="item-container">
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </div>
  );
}

export default App;
