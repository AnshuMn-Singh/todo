import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  function incrementCounterfunction() {
    setCount(count + 1);
  }
  function decrementCounterfunction() {
    setCount(count - 1);
  }

  return (
    <div className="Counter ">
      <span className="count">{count}</span>
      <div>
        <button className="counterButton" onClick={incrementCounterfunction}>
          +1
        </button>
        <button className="counterButton" onClick={decrementCounterfunction}>
          -1
        </button>
      </div>
    </div>
  );
}
