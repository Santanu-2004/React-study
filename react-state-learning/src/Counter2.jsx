import { useState } from "react";
import "./Counter2.css";

export default function Counter2() {
  let [count, setCount] = useState(0);
  let incCount = () => {
    setCount(count + 1);
  };

  let disCount = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
    // setCount(count - 1);
  };

  return (
    <div className="counterBox">
      <button id="decrease" onClick={disCount}>
        -
      </button>
      <div className="showCount">{count}</div>
      <button id="increase" onClick={incCount}>
        +
      </button>
    </div>
  );
}
