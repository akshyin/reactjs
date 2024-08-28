import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import Todoitem from "./components/TodoItem";
import "./App.css";
import Todoitems from "./components/Todoitems";
function App() {
  const todoitems = [
    {
      name: "Buy Milk",
      date: "20/12/2023",
    },
    {
      name: "Going Collge",
      date: "12/12/2023",
    },
    {
      name: "Like it",
      date: "now",
    },
  ];
  return (
    <div>
      <Appname />
      <AddTodo />
      <Todoitems todoitems={todoitems}></Todoitems>
    </div>
  );
}

export default App;
