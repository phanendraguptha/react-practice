// 📄 Read Docs
// useCallback - https://react.dev/reference/react/useCallback
// Definition - The useCallback hook returns a memoized version of the callback function that only changes
//              if one of the dependencies has changed. This is useful when passing callbacks to optimized
//              child components that rely on reference equality to prevent unnecessary renders.
// Rules of Hooks - https://react.dev/reference/rules/rules-of-hooks

import { useState, useCallback } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // Memoized callback function
  // This function will maintain the same reference between renders
  // unless dependencies change (empty array means it never changes)
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4 p-4 h-screen justify-center">
      <h2 className="text-2xl font-bold text-gray-800">useCallback Example</h2>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment Count
      </button>

      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Log Message
      </button>

      <p className="text-xl">Count: {count}</p>
    </div>
  );
};

export default UseCallback;
