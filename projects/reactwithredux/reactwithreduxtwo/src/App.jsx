import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Controls from "./components/Controls";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Redux + React</h1>
      <Header />
      <DisplayCounter />
      <Controls />
    </>
  );
}

export default App;
