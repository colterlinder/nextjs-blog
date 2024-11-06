import React, { useState, useEffect } from "react";
export default function Counter(props) {
  const [count, setCount] = useState(0);

  // Reset count if it goes above 10
  function rollOverCount() {
    if (count > 10) {
      setCount(0);
    }
  }

  useEffect(rollOverCount, [count]);

  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1 * props.mult)}
        className="counter-button"
        style={{ backgroundColor: props.bgColor }} // Dynamically apply color if passed as prop
      >
        Increase
      </button>
    </div>
  );
}
