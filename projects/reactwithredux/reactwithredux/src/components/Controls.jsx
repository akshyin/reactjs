import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
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
