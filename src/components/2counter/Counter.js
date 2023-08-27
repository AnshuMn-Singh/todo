import { useState } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementTotal(by) {
    setCount(count + by);
  }

  function decrementTotal(by) {
    setCount(count - by);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{count} </span>
      <CounterButton
        incrementTotal={incrementTotal}
        decrementTotal={decrementTotal}
      />
      <CounterButton
        by={2}
        incrementTotal={incrementTotal}
        decrementTotal={decrementTotal}
      />
      <CounterButton
        by={5}
        incrementTotal={incrementTotal}
        decrementTotal={decrementTotal}
      />
      <button className="resetButton" onClick={resetCounter}>
        Reset
      </button>
    </>
  );
}
