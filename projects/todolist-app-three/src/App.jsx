import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import { useState } from "react";
import "./App.css";
import Todoitems from "./components/Todoitems";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoitems, setTodoitems] = useState([]);

  const HandleNewItem = (todoName, todoDate) => {
    console.log("new item added:${todoName} date:${todoDate}");
    const newTodoItems = [...todoitems, { name: todoName, date: todoDate }];
    setTodoitems(newTodoItems);
  };
  const HandleDeleteItem = (todoName) => {
    const newTodoItems = todoitems.filter((item) => item.name != todoName);
    setTodoitems(newTodoItems);
    console.log("item deleted:${todoName} ");
  };

  return (
    <div>
      <Appname />
      {todoitems.length <= 0 && <WelcomeMessage />}
      <AddTodo onNewItem={HandleNewItem}></AddTodo>
      <Todoitems
        todoitems={todoitems}
        handleDeleteItem={HandleDeleteItem}
      ></Todoitems>
    </div>
  );
}

export default App;
