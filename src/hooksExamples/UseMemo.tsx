// 📄 Read Docs
// useMemo - https://react.dev/reference/react/useMemo
// Definition - The useMemo hook lets you cache the result of a computation between re-renders.
//              It takes a function and a dependency array, and returns a memoized value that only
//              changes when the dependencies change.
// Rules of Hooks - https://react.dev/reference/rules/rules-of-hooks

import { useState, useMemo } from "react";

const UseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  // Expensive computation: Calculate sum and average
  // This calculation will only run when numbers array changes
  const average = useMemo(() => {
    console.log("doing expensive computation");
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
  }, [numbers]); // Only recompute when numbers array changes

  // Add random number
  const addRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumbers((prev) => [...prev, newNumber]);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 h-screen justify-center">
      <h2 className="text-2xl font-bold text-gray-800">useMemo Example</h2>

      <div className="text-lg">Numbers: {numbers.join(", ")}</div>

      <div className="text-lg">Average: {average.toFixed(2)}</div>

      <div className="text-lg">Counter: {count}</div>

      <div className="flex gap-4">
        <button onClick={addRandomNumber}>Add Random Number</button>

        <button onClick={() => setCount((c) => c + 1)}>
          Increment Counter
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
