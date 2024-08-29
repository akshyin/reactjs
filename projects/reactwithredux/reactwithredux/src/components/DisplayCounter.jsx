import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return <>Display Counter {counter}</>;
};

export default DisplayCounter;
