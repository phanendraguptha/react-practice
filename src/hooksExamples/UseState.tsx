import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // ❌ If we directly use count, React doesn't update immediately, so the second update won't see the latest value.
    // setCount(count + 1);
    // setCount(count + 1);
    // This will only increment by 1, not 2.

    // ✅ Correct approach: Use the functional update form of setState.
    // This ensures that each update gets the latest state value.
    // React batches these updates, so both run in a single render cycle.
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // Read the caveats here - https://react.dev/reference/react/useState#setstate-caveats
  };

  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center gap-2 w-full h-screen justify-center">
      <div className="flex items-center gap-2">
        <button onClick={decrement}>-1</button>
        {count}
        <button onClick={increment}>+2</button>
      </div>
    </div>
  );
};

export default UseState;
