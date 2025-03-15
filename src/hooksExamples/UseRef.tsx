import { useRef } from "react";

// 📄 Read Docs
// useRef - https://react.dev/reference/react/useRef
// Definition - The `useRef` hook in React is used to create a mutable reference that persists across renders, often for accessing DOM elements or storing values without causing re-renders. It returns an object with a `.current` property.
// Rules of Hooks - https://react.dev/reference/rules/rules-of-hooks

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef?.current?.focus();
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full h-screen justify-center">
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
};

export default UseRef;
