import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";

const Controls = () => {
  // const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    console.log('increment called',counterActions.decrement
  )
  };
  const handleDecrement = () => {
counterActions.decrement()     
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };
  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button"  className="btn btn-warning" onClick={handlePrivacyToggle}>
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          className="number-input"
          ref={inputElement}
          placeholder="Enter number"
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
