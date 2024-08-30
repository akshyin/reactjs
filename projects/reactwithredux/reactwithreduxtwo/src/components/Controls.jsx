import { useDispatch } from "react-redux";
import { counteraction } from "../store";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counteraction.increment());
  };
  const handleDecrement = () => {
    dispatch(counteraction.decrement());
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        Primary
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleDecrement}
      >
        Secondary
      </button>
    </>
  );
};

export default Controls;
