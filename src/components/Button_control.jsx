import { useRef } from "react";
import { useDispatch } from "react-redux";

const Button_control = () => {
  const dispatch = useDispatch();
  const inpElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INC" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DEC" });
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inpElement.current.value } });
    inpElement.current.value = "";
  };
  const handleSub = () => {
    dispatch({ type: "SUB", payload: { num: inpElement.current.value } });

    inpElement.current.value = "";
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        -1
      </button>
      <button type="button" className="btn btn-warning" onClick={handlePrivacy}>
        TogglePrivacy
      </button>

      <input type="text" placeholder="enter number" ref={inpElement} />

      <button type="button" className="btn btn-primary" onClick={handleAdd}>
        ADD
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleSub}>
        SUB
      </button>
    </>
  );
};
export default Button_control;
